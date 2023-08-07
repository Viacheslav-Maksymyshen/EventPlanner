import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next"; // Імпортуємо useTranslation

const SearchBar = ({ value, onChange, onClear }) => {
  const { t } = useTranslation(); // Використовуємо useTranslation для отримання перекладів

  return (
    <InputGroup
      style={{
        display: "flex",
        width: "410px",
        height: "48px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        boxShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28)",
        borderRadius: "8px",
      }}
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color={value ? "blue.500" : "gray.300"} />
      </InputLeftElement>
      <Input
        _focus={{ outline: "none", border: "none", boxShadow: "none" }}
        border="none"
        type="text"
        placeholder={t("header.searchPlaceholder")} // Використовуємо переклад для плейсхолдера
        value={value}
        onChange={onChange}
      />
      {value && ( // Відображаємо хрестик тільки якщо є значення в інпуті
        <InputRightElement>
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
