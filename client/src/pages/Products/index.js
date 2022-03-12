import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "../../components/Card";

function Products() {
  return (
    <div>
      <Card />

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;
