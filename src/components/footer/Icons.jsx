import { Stack, Icon } from "@chakra-ui/react";

export const Features = ({ icon }) => {
  return (
    <Stack direction={"row"} align={"center"}>
    <Icon color={"white"} w={10} h={10}>
      {icon}
    </Icon>
</Stack>
  );
};


