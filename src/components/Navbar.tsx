import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Final Logo.png";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
