import { Image, Box, Heading } from "@chakra-ui/react";
import styles from "./CardQuartos.module.css";

export default function CardQuarto({ title, image, text }) {
  return (
    <Box
    className={styles.image}
      w={{ base: "200px", md: "350px" }}
      h={{ base: "200px", md: "350px" }}
      position={"relative"}
    >
      <Heading
      color={"Orange.600"}
        textAlign={"center"}
        position={"absolute"}
        as={"h2"}
        fontSize={{ base: "15px", md: "30px" }}
        w={"100%"}
        mt={20}
      >
       {title}
      </Heading>
      <Box
      objectFit="cover"
      borderRadius={5}
      w={"100%"}
      h={"100%"}
      >
        <Image 
          src={image}
          alt={text}
        />
      </Box>
    </Box>
  );
}
