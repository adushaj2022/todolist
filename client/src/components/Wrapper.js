import { Box } from "@chakra-ui/react";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <Box mt={8} mx="auto" maxW={"1000px"} w="100%">
      {children}
    </Box>
  );
};
export default Wrapper;
