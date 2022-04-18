import { Image, Box, Heading } from "@chakra-ui/react";

export default function CardQuarto({ title, image }) {
  return (
    <Box
      w={{ base: "250px", md: "350px" }}
      h={{ base: "250px", md: "350px" }}
      position={"relative"}
    >
      <Heading
        textAlign={"center"}
        position={"absolute"}
        as={"h4"}
        fontSize={{ base: "15px", md: "25px" }}
        w={"100%"}
        mt={20}
      >
       {title}
      </Heading>
      <Box
      objectFit="cover"
      borderRadius={"3"}
      w={"100%"}
      >
        <Image
          src={image}
          alt={title}
        />
      </Box>
    </Box>
  );
}
