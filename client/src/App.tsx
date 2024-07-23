import React, { useState, useEffect } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import axios from "axios";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/email-count")
      .then((value) => setCount(value.data.count));
  }, []);
  return (
    <Box textAlign="center" fontSize="xl">
      <Heading as="h1" size="2xl" my={5}>
        Welcome to Chakra UI with TypeScript
        {count}
      </Heading>
      <Button colorScheme="teal" size="lg" onClick={(e) => setCount(count + 1)}>
        Click Me
      </Button>
    </Box>
  );
};

export default App;
