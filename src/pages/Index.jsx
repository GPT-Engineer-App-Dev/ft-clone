import { Box, Container, Flex, Heading, HStack, IconButton, Image, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.900" color="white" py={4}>
        <Flex alignItems="center" px={4}>
          <Heading as="h1" size="lg" letterSpacing="wide">
            Financial Times
          </Heading>
          <Spacer />
          <HStack spacing={4}>
            <IconButton aria-label="Search" icon={<FaSearch />} size="lg" variant="ghost" color="white" />
            <IconButton aria-label="User" icon={<FaUserCircle />} size="lg" variant="ghost" color="white" />
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Main Article */}
          <Box flex={2} p={4}>
            <Image src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBuZXdzfGVufDB8fHx8MTcxNjIyNTQ0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Main Article" borderRadius="md" mb={4} />
            <Heading as="h2" size="xl" mb={4}>
              Main Article Headline
            </Heading>
            <Text fontSize="lg" mb={4}>
              This is a summary of the main article. It provides a brief overview of the key points and important information.
            </Text>
            <Link color="teal.500" href="#">
              Read more
            </Link>
          </Box>

          {/* Sidebar */}
          <Box flex={1} p={4} bg="gray.50" borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>
              Latest News
            </Heading>
            <VStack align="start" spacing={4}>
              <Box>
                <Heading as="h4" size="md">
                  News Headline 1
                </Heading>
                <Text fontSize="sm">Brief summary of the news article.</Text>
              </Box>
              <Box>
                <Heading as="h4" size="md">
                  News Headline 2
                </Heading>
                <Text fontSize="sm">Brief summary of the news article.</Text>
              </Box>
              <Box>
                <Heading as="h4" size="md">
                  News Headline 3
                </Heading>
                <Text fontSize="sm">Brief summary of the news article.</Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" color="teal.500">
                Privacy Policy
              </Link>
              <Link href="#" color="teal.500">
                Terms of Service
              </Link>
              <Link href="#" color="teal.500">
                Contact Us
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
