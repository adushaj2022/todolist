import { Checkbox } from "@chakra-ui/checkbox";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, Spacer, Text } from "@chakra-ui/layout";
import React from "react";

const Todo = ({ desc, tid, isC, handleUpdate, handleDelete, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <HStack>
        <Text mt={1} as={isC ? "s" : ""}>
          {desc}
        </Text>
        <Spacer />
        <Checkbox
          color="gray"
          defaultIsChecked={isC}
          mr={1}
          onChange={(e) => handleUpdate(e, tid)}
        ></Checkbox>
        <DeleteIcon color="gray" onClick={() => handleDelete(tid)} />
      </HStack>
    </Box>
  );
};
export default Todo;
