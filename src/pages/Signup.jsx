import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Created:", { fullName, username, email });
    alert("Signup successful!");
  };

  return (
    <Box p={5}>
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" mt={4}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
}

export default Signup;
