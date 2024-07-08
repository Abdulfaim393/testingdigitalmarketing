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
              Design your business with best Graphic Design Company.
            </TypoH5>
            <TypoBody1 variant="body1" color="initial">
              We understand it’s a crucial decision to choose a particular
              Graphic Design Company in Dubai to enhance your business game. But
              our primary focus is our clients, and hence we dedicatedly work to
              give them an even higher return on their investment. You can sit
              back and let us handle the designing game. Being the best Web
              development company and creative designing agency, the designs
              that our experts produce are rare. With all their concern, our
              professionals devotedly work at their best to expand your business
              and double your revenue.
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
