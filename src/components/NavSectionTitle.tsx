import { Text, TextProps } from "@chakra-ui/react";

export const NavSectionTitle = (props: TextProps) => (
  <Text
    casing="uppercase"
    fontSize="xs"
    fontWeight="semibold"
    letterSpacing="wide"
    paddingStart="3"
    color="gray.400"
    {...props}
  />
);
