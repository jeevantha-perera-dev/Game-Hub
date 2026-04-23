import React from "react";
import { Game } from "../hooks/useGames";
import {
  FaWindows,
  FaXbox,
  FaApple,
  FaPlaystation,
  FaGooglePlay,
  FaLinux,
  FaAppStore,
} from "react-icons/fa";
import { SiNintendoswitch, SiSafari, SiSteam } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { Card, CardBody, Heading, HStack, Icon, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const platformIcons: Record<string, any[]> = {
  "PC (Windows)": [FaWindows, FaApple, FaLinux, FaXbox, FaPlaystation],
  "Web Browser": [FaGooglePlay, FaAppStore, SiNintendoswitch, SiSafari],
};

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail as string} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
        <HStack mt={2} spacing={2}>
          {platformIcons[game.platform]?.map((IconComponent, index) => (
            <Icon as={IconComponent} key={index} boxSize={5} color="gray.500" />
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
