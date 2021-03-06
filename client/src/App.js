import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import { getTodos } from "./api/todos";
import Todo from "./components/Todo";
import { create } from "./api/create";
import { remove } from "./api/remove";
import { update } from "./api/update";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/spinner";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{}]);
  const toast = useToast();

  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchData();
  }, []);

  const handleUpdate = async (e, id) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: e.target.checked };
        } else {
          return t;
        }
      })
    );
    const res = await update(id);
    if (res) {
      toast({
        title: "To do changed",
        description: "Successfully changed status",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id) => {
    const res = await remove(id);
    if (res) {
      setTodos(todos.filter((t) => t.id !== id));
      toast({
        title: "To do removed",
        description: "Successfully removed from the list",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      isCompleted: false,
    };
    const res = await create(newTodo);
    if (res) {
      //toast
      setTodos([...todos, newTodo]);
      toast({
        title: "To do added",
        description: `${newTodo["task"]} added to the list`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Flex justifyContent="center" alignItems="center">
          <Stack spacing={4}>
            <Heading as="h2" size="sm" mt={5}>
              Enter a task
            </Heading>
            <form onSubmit={handleSubmit}>
              <Input
                variant="outline"
                placeholder="Walk my dog.."
                width="450px"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                mt={3}
              />
              <Button
                colorScheme="teal"
                size="sm"
                width="55px"
                type="submit"
                height="40px"
                ml={2}
                mb={1}
              >
                Add
              </Button>
            </form>

            <Divider orientation="horizontal" />
            <Heading as="h2" size="sm">
              Todos
            </Heading>
            {todos?.length >= 1 ? (
              todos.map((t, index) => {
                return (
                  <Todo
                    desc={t.task}
                    key={index}
                    tid={t.id}
                    isC={t.isCompleted}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                );
              })
            ) : (
              <Spinner />
            )}
          </Stack>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default App;
