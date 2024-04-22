import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { username, password });
    alert(`Login attempt with username: ${username}`);
  };

  return (
    <Box p={5}>
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" mt={4}>
          Log In
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
