import { Container } from "@mui/material";
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

const BestCompany = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadParaBox>
            <TypoH3 variant="h4" color="initial">
              {heading[0]} <span style={{ color: "black" }}>{heading[1]}</span>
            </TypoH3>
            {paragraph.map((item, index) => (
              <TypoBody1 key={index} variant="body1" color="initial">
                {item}
              </TypoBody1>
            ))}
          </HeadParaBox>
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
        </Container>
      </MainBox>
    </>
  );
};

export default BestCompany;
