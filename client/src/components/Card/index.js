import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src="#" alt="product" />
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            12/12/2021
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Macbook Pro
          </Box>
          <Box>100 tl</Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Add to basket</Button>
    </Box>
  );
}

export default Card;
