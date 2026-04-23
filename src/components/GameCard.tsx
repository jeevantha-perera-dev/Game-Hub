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
import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { useMemo } from "react";

interface Props {
  game: Game;
}

const platformIcons: Record<string, any[]> = {
  "PC (Windows)": [FaWindows, FaApple, FaLinux, FaXbox, FaPlaystation],
  "Web Browser": [FaGooglePlay, FaAppStore, SiNintendoswitch, SiSafari],
};
const getFakeRating = () => Number((Math.random() * 2 + 3).toFixed(1));

const GameCard = ({ game }: Props) => {
  const rating = useMemo(() => getFakeRating(), []);
  const ratingColor = rating >= 4.5 ? "green" : rating >= 4 ? "yellow" : "red";
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail as string} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
        <HStack justify="space-between">
          <HStack mt={2} spacing={2}>
            {platformIcons[game.platform]?.map((IconComponent, index) => (
              <Icon
                as={IconComponent}
                key={index}
                boxSize={5}
                color="gray.500"
              />
            ))}
          </HStack>
          <HStack>
            <Tooltip label="User Rating">
              <Badge borderRadius="md" px={2} colorScheme={ratingColor}>
                ⭐ {rating}
              </Badge>
            </Tooltip>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
