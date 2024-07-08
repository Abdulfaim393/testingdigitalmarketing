import { Box, Container } from "@mui/material";
import React from "react";
import { para } from "./data";
import { HeadTypo, HeadTypoH6, MainBox, SubTittleTypo } from "./styled";

const OverView = () => {
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypoH6 variant="h6" gutterBottom>
          NOT JUST BUILDING APPS BUT FUTURE BRANDS!
        </HeadTypoH6>
        <HeadTypo variant="h4" gutterBottom>
          MOBILE APPLICATION DEVELOPMENT
        </HeadTypo>
        {para.map((item, index) => (
          <SubTittleTypo key={index} variant="subtitle1" gutterBottom>
            {item}
          </SubTittleTypo>
        ))}
      </Container>
    </MainBox>
  );
};

export default OverView;
