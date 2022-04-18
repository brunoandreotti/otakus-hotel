import { Image, Box, Heading } from '@chakra-ui/react';
import img from "../../assets/images/quarto1.jpg";


export default function CardQuarto() {
  return(
    <Box w={"300px"} h={"300px"} position={"relative"}>
      
  <Heading textAlign={"center"} position={"absolute"} as={"h4"} w={"100%"} mt={"80px"}>
        titulo
      </Heading>
      <Box>
      <Image
    objectFit='cover'
    borderRadius={"3"}
    src={img}
    alt='Dan Abramov'
/>
</Box>
  </Box>
  )
}


