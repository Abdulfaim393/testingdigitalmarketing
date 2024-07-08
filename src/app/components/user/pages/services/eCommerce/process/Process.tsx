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

const Process = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          
          {bulletPoints.map((item, index) => (
            <HeadContentBox key={index}>
              <TypoH5 variant="h5" color="initial">
                {item.heading}
              </TypoH5>
              {item.content.map((item, index) => (
                <TypoBody1 key={index} variant="body1" color="initial">
                  {item}
                </TypoBody1>
              ))}
            </HeadContentBox>
          ))}
        </Container>
      </MainBox>
    </>
  );
};

export default Process;
