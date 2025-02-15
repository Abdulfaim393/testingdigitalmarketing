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
              Leading Content Writing Services
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              360 Solution. has successfully spent years in the content writing
              industry. We have a track record of more than 350+ happy
              customers. Our professional content writing services focus on
              accomplishing the maximum reach of your apps and products. Hence,
              these services are enriched with impeccable and intriguing topics,
              subtopics, headings, subheadings, quotations, information,
              descriptions, and visuals. 
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
