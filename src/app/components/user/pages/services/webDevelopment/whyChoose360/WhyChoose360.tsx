import { Container, Grid } from "@mui/material";
import React from "react";
import {
  ContentBox,
  HeadTypo,
  HeadingBox,
  ImageBox,
  MainBox,
  ParaTypo,
  Typographyh3,
  Typographyh5,
} from "./styled";
import { cardData360, heading, subheading } from "./data";
import Image from "next/image";

const WhyChoose360 = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              {heading}
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              {subheading}
            </Typographyh3>
          </HeadingBox>
          <Grid container spacing={3}>
            {cardData360.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ContentBox>
                  <ImageBox>
                    <Image
                      alt="image"
                      src={item.src}
                      height={256}
                      width={300}
                    />
                  </ImageBox>
                  <HeadTypo variant="h5" color="initial">
                    {item.head}
                  </HeadTypo>
                  <ParaTypo variant="body1" color="initial">
                    {item.para}
                  </ParaTypo>
                </ContentBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChoose360;
