import React from "react";
import { HeadTypo, HeadTypoH6, MainBox, SubTittleTypo } from "./styled";
import { Box, Container, Grid } from "@mui/material";
import { para } from "./data";
import knowaboutus from "../../../../../../../../public/knowaboutus.webp";
import Image from "next/image";

const KnowAboutUs = () => {
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypoH6 variant="h6" gutterBottom>
          KNOW ABOUT US
        </HeadTypoH6>
        <HeadTypo variant="h4" gutterBottom>
          Designing Effective Applications Development Services In Dubai and
          Ensuring Your Business Growth
        </HeadTypo>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            {para.map((item, index) => (
              <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
                {item}
              </SubTittleTypo>
            ))}
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={knowaboutus} alt="image" height={259} width={256} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainBox>
  );
};

export default KnowAboutUs;
