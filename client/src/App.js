import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  const [todo, setToDo] = useState({});
  const [todos, setToDos] = useState([{}]);
  return (
    <div className="App">
      <Wrapper>
        <Nav />
        <Flex justifyContent="center" alignItems="center">
          <Stack spacing={3}>
            <Heading as="h2" size="sm" isTruncated mt={3}>
              Enter a task
            </Heading>
            <Input
              variant="outline"
              placeholder="Walk my dog.."
              width="450px"
              v
              mt={3}
            />
            <Button colorScheme="teal" size="sm" width="55px">
              Add
            </Button>
          </Stack>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default App;
