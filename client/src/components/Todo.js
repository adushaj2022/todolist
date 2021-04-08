import { Checkbox } from "@chakra-ui/checkbox";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, Spacer, Text } from "@chakra-ui/layout";
import React from "react";

const Todo = ({ desc, tid, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <HStack>
        <Text mt={1}>{desc}</Text>
        <Spacer />
        <Checkbox color="gray" defaultIsChecked={false} mr={1}></Checkbox>
        <DeleteIcon color="gray" onClick={() => console.log(tid)} />
      </HStack>
    </Box>
  );
};
export default Todo;
