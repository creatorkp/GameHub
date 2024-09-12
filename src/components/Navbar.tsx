import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeWitch";
import SearchInput from "./SearchInput";
interface Prop {
  onSearchSubmit: (searchText: string) => void;
}
const NavBar = ({ onSearchSubmit }: Prop) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
