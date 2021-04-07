import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import { getTodos } from "./api/todos";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([{}]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <Button colorScheme="teal" size="sm" width="55px" type="submit">
                Add
              </Button>
            </form>

            <Divider orientation="horizontal" />
            <Heading as="h2" size="sm">
              Todos
            </Heading>
            {todos.length >= 1 &&
              todos.map((t, index) => {
                return <Todo desc={t.task} key={index} />;
              })}
          </Stack>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default App;
