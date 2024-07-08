import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import rightImage from "../../../../../../../../public/0007 1.webp";
import { ImageBox, MainBox, TypoBody1, TypoH3 } from "./styled";
import { heading, paragraphs } from "./data";

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
              {paragraphs.map((item, index) => (
                <TypoBody1 key={index} variant="body1" color="initial">
                  {item}
                </TypoBody1>
              ))}
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={284} width={344} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
