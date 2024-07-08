import React from "react";
import {
  GridComponentBox,
  GridComponentHeading,
  GridComponentImageBox,
  GridComponentText,
  HeadContentBox,
  MainBox,
  TypoBody1,
  TypoH5,
  Typographyh5,
} from "./styled";
import { Box, Container, Grid } from "@mui/material";
import { gridData } from "../../socialMediaMarketing/whyChooseUs/data";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            WHY CHOOSE US
          </Typographyh5>
          <HeadContentBox>
            <TypoH5 variant="h5" color="initial">
              IT Consultation from 360 Solution
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              At 360 Solution, we have a different approach when it comes to
              helping businesses with their technology needs. We believe in
              creating solutions that not only solve the problem but also add
              value to the business. With our services, you can expect top-notch
              expertise in the field of technology and IT consulting that will
              help your business grow and succeed.
            </TypoBody1>
          </HeadContentBox>
          <Grid container spacing={1}>
            {gridData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <GridComponentBox>
                  <GridComponentImageBox>
                    <Image src={item.icon} alt="image" height={50} width={50} />
                  </GridComponentImageBox>
                  <Box>
                    <GridComponentHeading variant="h6" color="initial">
                      {item.heading}
                    </GridComponentHeading>
                    <GridComponentText variant="body2" color="initial">
                      {item.text}
                    </GridComponentText>
                  </Box>
                </GridComponentBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WhyChooseUs;
