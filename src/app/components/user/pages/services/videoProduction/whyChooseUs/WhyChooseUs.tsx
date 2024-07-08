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
              Leading Video Production Services
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              Our Creative Directors ensure thorough quality checks before any
              deliverable (script, voice over, renders, animation, etc.) goes
              out to you.
            </TypoBody1>
            <TypoBody1 variant="body1" color="initial">
              Our packages include end to end service which means client only
              needs to tell us about their product, service and our team takes
              care of the rest.
            </TypoBody1>
            <TypoBody1 variant="body1" color="initial">
              Every single project is managed by a highly skilled and
              experienced Creative Director to ensure a great concept, quality
              and timely delivery.
            </TypoBody1>
            <TypoBody1 variant="body1" color="initial">
              We use advanced project planning software to ensure that you get
              your video delivered in the time committed by us.
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
