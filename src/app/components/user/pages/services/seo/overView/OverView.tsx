import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import rightImage from "../../../../../../../../public/pngwing.com (28) 1.webp";
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
              <TypoBody1
                sx={{ fontWeight: "bold" }}
                variant="body1"
                color="initial"
              >
                Professional SEO Services under your budget
              </TypoBody1>
              <TypoBody1
                sx={{ fontWeight: "bold" }}
                variant="body2"
                color="initial"
              >
                Make your business a brand! 
              </TypoBody1>
              <TypoBody1 variant="body1" color="initial">
                With 360 solution, the Best SEO Service, ensure your website has
                high and relevant traffic. To provide data-led services and
                generate a white hat SEO solutions approach, our SEO experts
                comprehensively analyse your business, industry, and customer
                base to furnish the best outcomes. 
              </TypoBody1>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
              <ImageBox>
                <Image src={rightImage} alt="image" height={256} width={262} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default OverView;
