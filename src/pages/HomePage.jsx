import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Додали імпорт для Link
import EventCard from "../components/EventCard";
import eventsData from "../data/eventsData";

const HomePage = () => {
  return (
    <Box p="6">
      <Heading as="h1" size="xl" mb="6">
        Список найближчих подій
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="6">
        {eventsData.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`}>
            {" "}
            {/* Використовуємо Link замість а тегу */}
            <EventCard event={event} />
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
