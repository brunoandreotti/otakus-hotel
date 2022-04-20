import { Stack, Icon } from "@chakra-ui/react";

export const Features = ({ icon }) => {
  return (
    <Stack direction="row" align="center">
      <Icon w={{ base: 5, md: 10 }} h={{ base: 5, md: 10 }}>
        {icon}
      </Icon>
    </Stack>
  );
};
