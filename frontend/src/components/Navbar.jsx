import React from "react";
import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <ChakraLink as={RouterLink} to={"/"}>
            Product Store 🛒
          </ChakraLink>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <ChakraLink as={RouterLink} to={"/create"}>
            <Button>
              <FaPlus />
            </Button>
          </ChakraLink>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaRegMoon /> : <IoSunnyOutline />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
