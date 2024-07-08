import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  HeadingBox,
  ImageTextBox,
  MainBox,
  RatingStarIcon,
  TestCard,
  TextTypography,
  Typographyh3,
  Typographyh5,
  Typographyh6,
} from "./styled";
import { CardData } from "./data";

const Testimonials = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Our Testimonials
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              What Our Client Says
            </Typographyh3>
          </HeadingBox>
          <Box>
            <Grid container spacing={2}>
              {CardData.map((item, index) => (
                <Grid key={index} item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <TestCard>
                    <ImageTextBox>
                      <Image
                        src={item.image}
                        alt="image"
                        height={168}
                        width={123}
                      />
                      <Box>
                        <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />{" "}
                        <RatingStarIcon /> <RatingStarIcon />
                        <TextTypography variant="body2" color="initial">
                          {item.text}
                        </TextTypography>
                      </Box>
                    </ImageTextBox>
                    <Typographyh6 variant="h6" color="initial">
                      {item.name}
                    </Typographyh6>
                  </TestCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </MainBox>
    </>
  );
};

export default Testimonials;
