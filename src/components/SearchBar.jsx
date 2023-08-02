import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next"; // Імпортуємо useTranslation

const SearchBar = ({ value, onChange }) => {
  const { t } = useTranslation(); // Використовуємо useTranslation для отримання перекладів

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={t("header.searchPlaceholder")} // Використовуємо переклад для плейсхолдера
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default SearchBar;
