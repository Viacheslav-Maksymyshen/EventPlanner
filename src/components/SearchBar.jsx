import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const SearchBar = ({ value, onChange, onClear }) => {
  const { t } = useTranslation();

  return (
    <InputGroup
      style={{
        display: "flex",
        width: "410px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        boxShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
        borderRadius: "8px",
      }}
    >
      <InputLeftElement pointerEvents="none" height="48px">
        <SearchIcon color={value ? "blue.500" : "gray.300"} />
      </InputLeftElement>
      <Input
        _focus={{ outline: "none", border: "none", boxShadow: "none" }}
        border="none"
        type="text"
        placeholder={t("header.searchPlaceholder")}
        value={value}
        onChange={onChange}
        height="48px"
      />
      {value && (
        <InputRightElement height="48px">
          <IconButton
            aria-label="Clear search"
            icon={<CloseIcon color={value ? "blue.500" : "gray.300"} />}
            size="sm"
            bg="transparent"
            _hover={{ background: "transparent" }}
            onClick={onClear}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchBar;
