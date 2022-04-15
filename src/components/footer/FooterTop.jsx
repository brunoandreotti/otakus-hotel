import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

import { Features } from "./Icons";

const Contato = ({ text, icon }) => {
  return (
    <Stack direction={"row"} align={"flex-start"}>
      <Flex align={"flex-start"} justify={"center"} rounded={"full"}>
        <Icon color={"yellow.500"} w={8} h={8}>
          {icon}
        </Icon>
      </Flex>
      <Text fontSize={{ base: "xs", md: "md" }}>{text}</Text>
    </Stack>
  );
};

export default function FooterTop() {
  return (
    <Box bg="gray.900" color="gray.100">
      <Container as={Stack} maxW={"6xl"} py={{base:"5", md:"10"}}>
        <SimpleGrid columns={[1, null, 2]} spacingX={"10px"}>
          <Stack
            py={{ base: "10", md: "0" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <Contato
              icon={<Icon as={MdLocationOn} />}
              text={"João XXIII, zona sul, 1000, São Paulo, Brasil."}
            />
            <Contato icon={<Icon as={MdPhone} />} text={"+55 11 3522-4076"} />
            <Contato
              icon={<Icon as={MdEmail} />}
              text={"otakushotel@gmail.com"}
            />
            <Contato
              icon={<Icon as={FaWhatsapp} />}
              text={"+55 11 9 9873-5083"}
            />
          </Stack>
          <Flex
            direction={"row"}
            justify={{ base: "center", md: "flex-end" }}
            align={{ base: "center", md: "flex-end" }}
            spacing={6}
          >
            <Features icon={<Icon as={FaFacebook} />} />
            <Features icon={<Icon as={FaInstagram} />} />
            <Features icon={<Icon as={FaLinkedin} />} />
            <Features icon={<Icon as={FaTwitter} />} />
            <Features icon={<Icon as={FaYoutube} />} />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
