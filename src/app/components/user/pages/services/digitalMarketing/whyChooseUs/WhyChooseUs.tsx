import React from "react";
import { MainBox, ParaTypo, Typographyh3, Typographyh5 } from "./styled";
import { Container, Grid } from "@mui/material";
import CustomCardsGrid from "../../mobileDevelopment/business/CustomCardsGrid";
import { gridData } from "../../mobileDevelopment/business/data";
import { para } from "./data";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            WHY CHOOSE US
          </Typographyh5>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typographyh3 variant="h3" color="initial" gutterBottom>
                Our goal is to ensure your satisfaction at all times.
              </Typographyh3>
              <ParaTypo variant="subtitle1" color="initial">
                {para}
              </ParaTypo>
            </Grid>
            <CustomCardsGrid data={gridData} />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChooseUs;
