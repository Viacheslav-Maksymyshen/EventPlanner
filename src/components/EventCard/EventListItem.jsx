import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EventListItem = ({ event }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      as="li"
      style={{ "--card-padding": "0" }}
      minH="480px"
      maxW={{ base: "272px", md: "302px", xl: "302px" }}
      backgroundImage={`url(${event.image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="12px"
      background={`url(${event.image}), lightgray 50% / cover no-repeat, url(${event.image}), lightgray 50% / cover no-repeat`}
      boxShadow="2px 4px 9px 0px rgba(166, 141, 174, 0.28)"
      position="relative"
    >
      <CardHeader
        display="flex"
        alignItems="flex-start"
        gap="8px"
        borderRadius="8px"
        padding="4px"
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#FFF",
            color: "#7B61FF",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {event.category}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px 8px",
            borderRadius: "4px",
            background: "#FFF",
            color:
              event.priority === "High"
                ? "#FF2B77"
                : event.priority === "Medium"
                ? "#E2A300"
                : event.priority === "Low"
                ? "#6BD475"
                : "#7B61FF",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {event.priority}
        </span>
      </CardHeader>

      <CardBody
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "auto",
          fontStyle: "normal",
          fontFamily: "Poppins",
        }}
      >
        <Text
          display="flex"
          padding="8px 16px"
          flexDirection="column"
          alignItems="flex-start"
          background="rgba(255, 255, 255, 0.80)"
          color="#7B61FF"
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>
              {event.date} at {event.time}
            </span>
            <span>{event.location}</span>
          </div>
        </Text>
      </CardBody>
      <CardFooter
        bg="white"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
        }}
      >
        <Heading
          padding="16px 16px 8px 16px"
          color=" #1C1B1F"
          fontSize="16px"
          fontWeight="500"
          lineHeight="24px"
        >
          {event.title}
        </Heading>

        <Text
          padding="8px 16px 16px 16px"
          height="72px"
          color=" #49454F"
          fontSize="14px"
          fontWeight="400"
          lineHeight="20px"
        >
          {event.description}
        </Text>
        {isHovered && (
          <ChakraLink
            as={Link}
            to={`/event/${event.id}`}
            padding="8px 16px 16px 16px"
            alignSelf="flex-end"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              mt="4"
              _hover={{ background: "#6243FF" }}
              color="#FFF"
              textAlign="center"
              fontFamily="Poppins"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="20px"
              display="flex"
              padding="10px 24px"
              borderRadius="8px"
              background="#7B61FF"
            >
              More info
            </Button>
          </ChakraLink>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventListItem;
