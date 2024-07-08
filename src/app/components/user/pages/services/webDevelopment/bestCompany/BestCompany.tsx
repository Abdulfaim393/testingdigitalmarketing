import React from "react";
import { HeadTypo, ImageBox, MainBox, SubTittleTypo } from "./styled";
import { Box, Container, Grid } from "@mui/material";
import { headings, para } from "./data";
import ImageMain from "../../../../../../../../public/bestcompany.webp";
import Image from "next/image";

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Box>
                {headings.map((item, index) => (
                  <HeadTypo
                    key={index}
                    variant="h4"
                    gutterBottom
                    color={index === 0 ? "#000000" : "#6907A8"}
                  >
                    {item}
                  </HeadTypo>
                ))}
                {para.map((item, index) => (
                  <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
                    {item}
                  </SubTittleTypo>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <ImageBox>
                <Image src={ImageMain} alt="image" height={404} width={384} />
              </ImageBox>
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
