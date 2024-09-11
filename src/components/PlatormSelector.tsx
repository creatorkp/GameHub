import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatorm";
import { Platform } from "../hooks/useGames";

interface Prop {
  onSelectPlatForm: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatormSelector = ({ onSelectPlatForm, selectedPlatform }: Prop) => {
  const { data, errors } = usePlatform();
  if (errors) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform
          ? "Filter by:" + " " + selectedPlatform?.name
          : "Platorm Filter"}
      </MenuButton>
      <MenuList>
        {data.map((plat) => (
          <MenuItem onClick={() => onSelectPlatForm(plat)} key={plat.id}>
            {plat.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatormSelector;
