import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import EventPage from "./pages/EventPage";
import SearchBar from "./components/SearchBar";
import eventsData from "./data/eventsData";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t, i18n } = useTranslation();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const filteredEvents = eventsData.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Box>
        {/* header */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="4"
          borderBottom="1px solid #ddd"
        >
          <Heading as="h1" size="lg">
            {t("header.logo")}
          </Heading>
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              onClick={() => {}}
            >
              {t("header.languageSelector")}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleLanguageChange("en")}>
                {t("language.en")}
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange("ua")}>
                {t("language.ua")}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {/* content */}
        <Box p="4">
          <Routes>
            <Route path="/" element={<HomePage events={filteredEvents} />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/event/:eventId" element={<EventPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
