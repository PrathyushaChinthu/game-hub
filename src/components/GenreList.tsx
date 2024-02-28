import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Image, List, ListItem } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../image-url";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <text fontSize="lg">{genre.name}</text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
