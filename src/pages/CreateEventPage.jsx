import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import EventForm from "../components/EventForm";

const CreateEventPage = () => {
  return (
    <Box p="6">
      <Heading as="h1" size="xl" mb="6">
        Створення нової події
      </Heading>
      <EventForm />
    </Box>
  );
};

export default CreateEventPage;
