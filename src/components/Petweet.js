import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Image, Stack } from "@chakra-ui/react";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import { getUserById } from "../services/user";
import Text from "./Text";

const timeAgo = (date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });
};

const Petweet = (props) => {
  const { image, post } = props;
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async (userId) => {
      try {
        const userResponse = await getUserById(userId);
        setUser(userResponse.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getUser(post.userId);
  }, [post.userId]);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <Card
          display="flex"
          padding="1.25rem 1rem 1rem 1rem"
          gap="0.5rem"
          flexDirection="row"
          borderRadius="none"
          marginBottom="1px"
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
              <Text
                as="h3"
                color="#757575"
                fontSize="0.875rem"
                fontWeight="700"
              >
                <Link to={`/profile?${user.username}`}>{user.name}</Link>
              </Text>
              <Text fontWeight="300" fontSize="0.75rem" color="#757575">
                @{user.username}
              </Text>
              <Text fontWeight="300" fontSize="0.625rem" color="#757575">
                •
              </Text>
              <Text fontWeight="300" fontSize="0.75rem" color="#757575">
                {timeAgo(post.createdAt)}
              </Text>
            </CardHeader>
            <CardBody padding={0}>
              <Text fontSize="0.875rem">{post.content}</Text>
            </CardBody>
          </Stack>
        </Card>
      )}
    </>
  );
};

export default Petweet;
