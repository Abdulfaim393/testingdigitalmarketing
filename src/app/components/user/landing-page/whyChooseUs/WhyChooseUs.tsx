import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import whyChooseUSImage from "../../../../../../public/whychooseus1webp.webp";
import NumberCounter from "../../utils/NumberCounter";
import {
  BottomBox,
  ButtonWCU,
  CheckIconBox,
  HeadingParaBox,
  ImageBox,
  MainImage,
  NumberCounterBox,
  NumberGrid,
  PoinIconBox,
  PointsBody2,
  PointsBox,
  PointsTitleTypography,
  TopBox,
  TypoH2,
  TypoH6,
  TypoWCUBody1,
  TypoWCUh3,
  TypoWCUh5,
  ViewAllBox,
} from "./styled";
import { NumberArray, PointsArray } from "./data";

const WhyChooseUs = () => {
  return (
    <>
      <TopBox>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {NumberArray.map((item, index) => (
              <NumberGrid key={index} item xs={6} sm={3} md={3} lg={3} xl={3}>
                <NumberCounterBox>
                  <TypoH2 variant="h2" color="initial">
                    <NumberCounter
                      number={Number(item.number.replace(/[^\d.-]/g, ""))}
                    />
                    {item.number.replace(/[0-9]/g, "")}
                  </TypoH2>
                  <TypoH6 variant="h6" color="initial">
                    {item.text}
                  </TypoH6>
                </NumberCounterBox>
              </NumberGrid>
            ))}
          </Grid>
        </Container>
      </TopBox>
      <BottomBox>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <HeadingParaBox>
                <TypoWCUh5 variant="h5" color="initial">
                  Why Choose Us
                </TypoWCUh5>
                <TypoWCUh3 variant="h3" color="initial">
                  Unlock Revenue Growth For Your Business
                </TypoWCUh3>
                <TypoWCUBody1 variant="subtitle1" color="initial">
                  We are 100+ professional software engineers with mor than 10
                  years of experience in delivering sup erior pro Believe it
                  because you&apos;ve seen it.
                </TypoWCUBody1>
                <ViewAllBox>
                  <ButtonWCU variant="outlined">view all more</ButtonWCU>
                </ViewAllBox>
              </HeadingParaBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <ImageBox>
                <MainImage src={whyChooseUSImage} alt="image" />
              </ImageBox>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <PointsBox>
                {PointsArray.map((item, index) => (
                  <CheckIconBox key={index}>
                    <PoinIconBox>
                      <Image
                        src={item.icon}
                        alt="image"
                        height={25}
                        width={25}
                      />
                    </PoinIconBox>
                    <Box>
                      <PointsTitleTypography variant="h4" color="initial">
                        {item.title}
                      </PointsTitleTypography>
                      <PointsBody2 variant="body2" color="initial">
                        {item.text}
                      </PointsBody2>
                    </Box>
                  </CheckIconBox>
                ))}
              </PointsBox>
            </Grid>
          </Grid>
        </Container>
      </BottomBox>
    </>
  );
};

export default WhyChooseUs;
