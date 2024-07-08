import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import rightImage from "../../../../../../../../public/eCommerce-banner 1.webp";
import { ImageBox, MainBox, TypoBody1, TypoH3 } from "./styled";
import { heading } from "./data";

const OverView = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              <TypoH3 variant="h4" color="initial">
                {heading[0]}
              </TypoH3>
              <TypoBody1 variant="body1" color="initial">
                Simply setting up an e-commerce store and waiting for customer
                orders is not enough to ensure success.
              </TypoBody1>
              <TypoBody1 sx={{fontWeight:"bold"}} variant="body1" color="initial">
                To maximize sales and profits, every E-commerce store has 2
                essential requirements:
              </TypoBody1>
              <TypoBody1  variant="body1" color="initial">
                1. E-commerce marketing services are designed to help reach their
                target customers.
              </TypoBody1>
              <TypoBody1 variant="body1" color="initial">
                2. Turn potential buyers into customers, and keep them coming back.
              </TypoBody1>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={232} width={256} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
