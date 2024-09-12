import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Prop {
  onSearchSubmit: (searchText: string) => void;
}
const SearchInput = ({ onSearchSubmit }: Prop) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current?.value);
        if (ref.current) onSearchSubmit(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Seach Games"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
