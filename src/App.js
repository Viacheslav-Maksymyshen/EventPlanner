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
import { useEventsData } from "./components/EventsDataContext";

const App = () => {
  const { eventsData } = useEventsData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      selectedCategory === "" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const { t, i18n } = useTranslation();

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

  return (
    <Router>
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p="22px 0px"
          borderBottom="1px solid #ddd"
          mx="auto"
          maxWidth={{ base: "320px", md: "768px", xl: "1280px" }}
        >
          <Heading
            color="#7B61FF"
            fontFamily="Alata"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
          >
            {t("header.logo")}
          </Heading>
          <Flex alignItems="center" gap="24px">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={handleSearchClear}
            />
            <Menu>
              <MenuButton
                as={Button}
                display="flex"
                padding="12px 4px 12px 12px"
                alignItems="center"
                gap="4px"
                borderRadius="8px"
                background="#FFF"
                boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
                rightIcon={<ChevronDownIcon />}
              >
                {t("header.languageSelector")}
              </MenuButton>
              <MenuList
                display="flex"
                style={{ "--chakra-sizes-3xs": "69px" }}
                padding="16px 12px"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="8px"
                borderRadius="8px"
                background="#FFF"
                boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
              >
                <MenuItem
                  display="flex"
                  width="45px"
                  paddingBottom="0px"
                  alignItems="center"
                  gap="8px"
                  borderBottom="1px solid var(--divider, #ACA7C3)"
                  onClick={() => handleLanguageChange("en")}
                >
                  {t("language.en")}
                </MenuItem>
                <MenuItem
                  display="flex"
                  width="45px"
                  paddingBottom="0px"
                  alignItems="center"
                  gap="8px"
                  borderBottom="1px solid var(--divider, #ACA7C3)"
                  onClick={() => handleLanguageChange("ua")}
                >
                  {t("language.ua")}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box p="4">
          <Routes>
            <Route
              path="/EventPlanner"
              element={
                <HomePage
                  events={filteredEvents}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                  onSearchClear={handleSearchClear}
                />
              }
            />
            <Route
              path="/EventPlanner/create-event"
              element={<CreateEventPage />}
            />
            <Route
              path="/EventPlanner/event/:eventId"
              element={<EventPage />}
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
