import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import rightImage from "../../../../../../../../public/reputation-management-section_1-img_1 1.webp";
import { ImageBox, MainBox, TypoBody1, TypoH3 } from "./styled";
import { heading, paragraph } from "./data";

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
                {paragraph[0]}
              </TypoBody1>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={232} width={256} />
              </ImageBox>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TypoBody1 variant="body1" color="initial">
                {paragraph[1]}
              </TypoBody1>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
