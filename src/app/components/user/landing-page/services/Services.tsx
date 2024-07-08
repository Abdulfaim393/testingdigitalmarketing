import { Container } from "@mui/material";
import React from "react";
import Slider from "./Slider";
import {
  HeadingBox,
  KnowMoreLink,
  MainBox,
  Typographyh3,
  Typographyh5,
  Typographyh5Link,
} from "./styled";

const Services = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Our Best Services
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              We Provide Best Services
            </Typographyh3>
          </HeadingBox>
          <Slider />
          <Typographyh5Link variant="h5" color="initial">
            Want to See our Professional Services.{" "}
            <KnowMoreLink href="/viewmore">
              Click here to View More
            </KnowMoreLink>
          </Typographyh5Link>
        </Container>
      </MainBox>
    </>
  );
};

export default Services;
