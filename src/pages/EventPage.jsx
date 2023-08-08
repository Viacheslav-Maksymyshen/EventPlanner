import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  Spinner,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { format } from "date-fns";
import { useEventsData } from "../components/EventsDataContext";

const EventPage = () => {
  const { t } = useTranslation();
  const { eventId } = useParams();
  const { eventsData, deleteEvent } = useEventsData();
  const event = eventsData.find((event) => event.id === parseInt(eventId));
  const formattedDate = format(new Date(event.date), "dd.MM");
  const navigate = useNavigate();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDeleteEvent = () => {
    setIsDeleting(true);

    setTimeout(() => {
      deleteEvent(event.id);
      setIsDeleting(false);
      navigate("/");
    }, 1500);
  };

  const categoryStyles = {
    display: "flex",
    alignItems: "center",
    padding: "6px 12px",
    borderRadius: "8px",
    boxShadow: "4px 5px 9px 0px rgba(166, 141, 174, 0.28)",
    background: "#FFF",
    fontSize: "14px",
    fontWeight: "500",
    color: "#7B61FF",
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
      maxWidth={{ base: "320px", md: "768px", xl: "1280px" }}
      mt="12px"
      fontFamily="Poppins"
      fontStyle="normal"
    >
      <Button
        mt="12px"
        colorScheme="teal"
        onClick={handleGoBack}
        alignSelf="flex-start"
        leftIcon={<ArrowBackIcon />}
        variant="unstyled"
        color=" #7B61FF"
        fontSize="14px"
        fontWeight="500"
        lineHeight="normal"
      >
        {t("button.goBack")}
      </Button>
      <Box maxW={{ base: "272px", md: "688px", xl: "628px" }}>
        <Heading
          padding="16px 16px 8px 16px"
          color=" #3F3F3F"
          fontSize="32px"
          fontWeight="600"
          line-height="normal"
          alignSelf="flex-start"
        >
          {event.title}
        </Heading>
        <Card
          minH={{ base: "464px", md: "504px", xl: "492px" }}
          borderRadius="12px"
          backgroundImage={`url(${event.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
          position="relative"
        >
          <CardBody
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: "auto",
              fontStyle: "normal",
              fontFamily: "Poppins",
            }}
          ></CardBody>
          <CardFooter
            bg="white"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: "auto",
              alignSelf: "stretch",
              overflow: "hidden",
              borderRadius: "0px 0px 10px 10px",
              padding: "0  ",
            }}
          >
            <Text
              padding="20px 16px 16px 12px"
              height="72px"
              color=" #49454F"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
            >
              {event.description}
            </Text>
            <Box
              display="flex"
              alignItems="flex-start"
              gap="12px"
              padding="12px"
            >
              <span style={{ ...categoryStyles }}>{event.category}</span>
              <span
                style={{
                  ...categoryStyles,
                  color:
                    event.priority === "High"
                      ? "#FF2B77"
                      : event.priority === "Medium"
                      ? "#E2A300"
                      : event.priority === "Low"
                      ? "#6BD475"
                      : "#7B61FF",
                }}
              >
                {event.priority}
              </span>
              <span
                style={{
                  ...categoryStyles,
                }}
              >
                {event.location}
              </span>
              <span
                style={{
                  ...categoryStyles,
                }}
              >
                {formattedDate} at {event.time}
              </span>
            </Box>
            <Box
              display="flex"
              justify-content="flex-end"
              padding="0 40px 40px 0"
            >
              <Button
                mt="4"
                _hover={{ background: "#6243FF" }}
                color="#FFF"
                height="32px"
                width="108px"
                textAlign="center"
                fontFamily="Poppins"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="16px"
                display="flex"
                padding="8px 16px"
                borderRadius="4px"
                background="#7B61FF"
                onClick={handleDeleteEvent}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <Spinner size="sm" color="white" mr="2" />
                    {t("button.deleting")}
                  </>
                ) : (
                  t("button.deleteEvent")
                )}
              </Button>
            </Box>
          </CardFooter>
        </Card>
      </Box>
    </Box>
  );
};

export default EventPage;
