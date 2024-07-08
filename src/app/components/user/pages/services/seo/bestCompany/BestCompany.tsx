import { Container } from "@mui/material";
import React from "react";
import { HeadContentBox, MainBox, TypoBody1, TypoH3, TypoH5 } from "./styled";
import { bulletPoints, heading } from "./data";

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <TypoH3 variant="h4" color="initial">
            {heading[0]}
          </TypoH3>
          {bulletPoints.map((item, index) => (
            <HeadContentBox key={index}>
              <TypoH5 variant="h5" color="initial">
                {item.heading}
              </TypoH5>
              <TypoBody1 key={index} variant="body1" color="initial">
                {item.para}
              </TypoBody1>
            </HeadContentBox>
          ))}
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
