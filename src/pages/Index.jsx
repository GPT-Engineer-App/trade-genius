// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, FormControl, FormLabel, Input, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { FaPlus, FaUserPlus, FaDollarSign, FaExchangeAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Stock Trading System
        </Text>
        <Button leftIcon={<FaUserPlus />} colorScheme="teal">
          Create Account
        </Button>
      </Flex>

      <VStack spacing={5} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            Available Stocks
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Company Name</Th>
                <Th>Stock Ticker</Th>
                <Th>Volume</Th>
                <Th>Price</Th>
                <Th>Market Cap</Th>
                <Th>High/Low</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Example Corp</Td>
                <Td>EXM</Td>
                <Td>1000</Td>
                <Td>$50</Td>
                <Td>$50000</Td>
                <Td>$55/$45</Td>
              </Tr>
              {/* More rows can be added here */}
            </Tbody>
          </Table>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            User Portfolio
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Stock Ticker</Th>
                <Th>Volume</Th>
                <Th>Current Price</Th>
                <Th>Total Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>EXM</Td>
                <Td>20</Td>
                <Td>$50</Td>
                <Td>$1000</Td>
              </Tr>
              {/* More rows can be added here */}
            </Tbody>
          </Table>
        </Box>

        <Flex justifyContent="space-between">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" mr={2}>
            <Text fontSize="xl" mb={4}>
              Transaction History
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Type</Th>
                  <Th>Amount</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Deposit</Td>
                  <Td>$500</Td>
                  <Td>2023-01-01</Td>
                </Tr>
                {/* More rows can be added here */}
              </Tbody>
            </Table>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" flex="1" ml={2}>
            <Text fontSize="xl" mb={4}>
              Cash Account
            </Text>
            <FormControl id="deposit" mb={4}>
              <FormLabel>Deposit Amount</FormLabel>
              <Input type="number" placeholder="Enter amount" />
              <Button mt={2} leftIcon={<FaDollarSign />} colorScheme="green">
                Deposit
              </Button>
            </FormControl>
            <FormControl id="withdraw">
              <FormLabel>Withdraw Amount</FormLabel>
              <Input type="number" placeholder="Enter amount" />
              <Button mt={2} leftIcon={<FaExchangeAlt />} colorScheme="red">
                Withdraw
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
