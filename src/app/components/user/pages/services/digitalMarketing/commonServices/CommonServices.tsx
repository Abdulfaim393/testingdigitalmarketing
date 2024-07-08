import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import {
  CardBox,
  CardImage,
  CardTypo,
  HeadingBox,
  MainBox,
  Typographyh5,
} from "./styled";
import Image from "next/image";
import { cardData } from "./data";

const CommonServices = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h6" color="initial" gutterBottom>
              Common Digital Marketing Services we Provide
            </Typographyh5>
          </HeadingBox>
          <Grid container spacing={3}>
            {cardData.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardBox>
                  <CardImage
                    src={item.icon}
                    alt="icons"
                    height={70}
                    width={70}
                  />
                  <CardTypo variant="subtitle1" color="initial">
                    {item.text}
                  </CardTypo>
                </CardBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default CommonServices;
