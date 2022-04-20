import { Text, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box py={6} bg="black" color="yellow.700">
      <Text fontSize={{ base: "sm", md: "sm", lg: "md" }} textAlign={"center"}>
        © 2022 Otaku's Hotel.
      </Text>
    </Box>
  );
}
