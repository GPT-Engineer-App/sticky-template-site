import React from "react";
import { Box, Flex, Heading, Text, VStack, Spacer, Link, useColorModeValue, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FaHome, FaInfo, FaEnvelope, FaCog } from "react-icons/fa";

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const headerBgColor = useColorModeValue("white", "gray.900");
  const sidebarWidth = "200px";

  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh" flexDir="column">
        {/* Header */}
        <Flex as="header" w="full" zIndex="sticky" bg={headerBgColor} boxShadow="sm" position="sticky" top="0" h="60px" align="center" px="4">
          <Heading size="md">My Website</Heading>
        </Flex>

        {/* Content */}
        <Flex flex="1" overflow="hidden">
          {/* Sidebar */}
          <VStack
            as="nav"
            width={sidebarWidth}
            position="sticky"
            top="60px" // same as header height
            left="0"
            h="calc(100vh - 60px)" // subtract header height
            boxShadow="sm"
            p="4"
            bg={bgColor}
            spacing="4"
            align="stretch"
          >
            <Link display="flex" alignItems="center">
              <FaInfo />
              <Text ml="2">About</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <FaCog />
              <Text ml="2">Settings</Text>
            </Link>
          </VStack>

          {/* Main Content */}
          <Box flex="1" p="4">
            <Heading size="lg" mb="8">
              Welcome to My Website
            </Heading>
            <Flex direction="column" gap="4">
              <Box bg="gray.300" p="8" borderRadius="md" boxShadow="lg">
                <Heading size="xl" textAlign="center">
                  HELLO
                </Heading>
              </Box>
              <Box bg="gray.300" p="8" borderRadius="md" boxShadow="lg">
                <Heading size="xl" textAlign="center">
                  HELLO
                </Heading>
              </Box>
              {[...Array(10)].map((_, index) => (
                <Box key={index} bg="gray.300" p="8" borderRadius="md" boxShadow="lg">
                  <Heading size="xl" textAlign="center">
                    HELLO
                  </Heading>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
