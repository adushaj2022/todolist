import { Box } from "@chakra-ui/react";
import React from "react";

const Wrapper = ({ children, variant = "regular" }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "1000px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
export default Wrapper;
