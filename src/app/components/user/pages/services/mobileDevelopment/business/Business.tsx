import { Container, Grid } from "@mui/material";
import React from "react";
import { HeadTypo, HeadTypoH6, LeftSectionTypo, MainBox } from "./styled";
import { gridData, leftSectoionText } from "./data";
import CustomCardsGrid from "./CustomCardsGrid";

const Business = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadTypoH6 variant="h6" gutterBottom>
            WHEN BUSINESS IDEAS MEETS, INNOVATION AND MOBILE EXCELLENCE
          </HeadTypoH6>
          <HeadTypo variant="h4" gutterBottom>
            Best Mobile Application Development Company in Dubai Helping
            Businesses Worldwide
          </HeadTypo>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              {leftSectoionText.map((item, index) => (
                <LeftSectionTypo key={index} variant="body1" color="initial">
                  {item}
                </LeftSectionTypo>
              ))}
            </Grid>
            <CustomCardsGrid data={gridData} />
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default Business;
