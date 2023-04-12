import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Image, Stack } from "@chakra-ui/react";
import React from "react";
import Text from "./Text";

const Petweet = (props) => {
  const { image, user, content } = props;

  return (
    <Card
      display="flex"
      padding="1.25rem 1rem 1rem 1rem"
      gap="0.5rem"
      flexDirection="row"
      borderRadius="none"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.0);"
    >
      <Image
        src={image}
        alt="foto de perfil"
        boxSize="48px"
        borderRadius="full"
      />
      <Stack>
        <CardHeader
          display="flex"
          flexDirection="row"
          padding={0}
          gap="0.25rem"
          alignItems="center"
        >
          <Text as="h3" color="#757575" fontSize="0.875rem" fontWeight="700">
            {user.name}
          </Text>
          <Text fontWeight="300" fontSize="0.75rem" color="#757575">
            {user.username}
          </Text>
        </CardHeader>
        <CardBody padding={0}>
          <Text fontSize="0.875rem">{content}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Petweet;