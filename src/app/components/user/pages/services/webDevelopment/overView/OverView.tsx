import { Box, Container } from "@mui/material";
import React from "react";
import { para } from "./data";
import { HeadTypo, MainBox, SubTittleTypo } from "./styled";

const OverView = () => {
  return (
    <MainBox>
      <Container maxWidth="xl">
        <HeadTypo variant="h4" gutterBottom>
          Web Development and Design Company
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
