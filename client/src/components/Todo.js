import { Checkbox } from "@chakra-ui/checkbox";
import { Box, HStack, Spacer, Text } from "@chakra-ui/layout";
import React from "react";

const Todo = ({ desc, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <HStack>
        <Text mt={1}>{desc}</Text>
        <Spacer />
        <Checkbox defaultIsChecked={false}></Checkbox>
      </HStack>
    </Box>
  );
};
export default Todo;
