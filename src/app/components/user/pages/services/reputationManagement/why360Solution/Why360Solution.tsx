import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {
  HeadContentBox,
  HeadParaBox,
  MainBox,
  TypoBody1,
  TypoH3,
  TypoH5,
} from "./styled";
import { bulletPoints, heading, paragraph } from "./data";
import ImageRight from "../../../../../../../../public/Faby-BLOG-COVERS-7 1.webp";
import Image from "next/image";

const Why360Solution = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadParaBox>
            <TypoH3 variant="h4" color="initial">
              {heading[0]}
            </TypoH3>
            {paragraph.map((item, index) => (
              <TypoBody1 key={index} variant="body1" color="initial">
                {item}
              </TypoBody1>
            ))}
          </HeadParaBox>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
              {bulletPoints.map((item, index) => (
                <HeadContentBox key={index}>
                  <TypoH5 variant="h5" color="initial">
                    {item.heading}
                  </TypoH5>
                  <TypoBody1 variant="body1" color="initial">
                    {item.content}
                  </TypoBody1>
                </HeadContentBox>
              ))}
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                <Image src={ImageRight} alt="image" height={286} width={280} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default Why360Solution;
