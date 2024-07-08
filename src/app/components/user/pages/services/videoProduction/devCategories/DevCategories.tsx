import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import benefitimage from "../../../../../../../../public/Group-26974-1-1 1.webp";
import icon from "../../../../../../../../public/whychooseus2webp.webp";
import { devCategoriesList, typo1 } from "./data";
import {
  IconBox,
  MainBox,
  MainImage,
  Typo1,
  Typo2,
  Typographyh5,
} from "./styled";

const DevCategories = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <MainImage src={benefitimage} alt="image" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typo1 variant="body2" color="initial">
                {typo1}
              </Typo1>
              {devCategoriesList.map((item, index) => (
                <IconBox key={index}>
                  <Image src={icon} alt="icon" height={25} width={25} />
                  <Typo2 variant="body1" color="initial">
                    {item}
                  </Typo2>
                </IconBox>
              ))}
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default DevCategories;
