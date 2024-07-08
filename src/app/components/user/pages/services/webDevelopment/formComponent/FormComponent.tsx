import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  FormTextBox,
  MainBox,
  SocialTypo1,
  SocialTypo2,
  SocialmediaBox,
  Typographyh3,
  Typographyh5,
} from "./styled";
import Image from "next/image";
import { socialImages } from "./data";
import Form from "./Form";

const FormComponent = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            HAVE ANY QUESTION?
          </Typographyh5>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <FormTextBox>
                <Typographyh3 variant="h3" color="initial" gutterBottom>
                  Let’s Discuss About Something
                </Typographyh3>
                <Typography variant="subtitle1" color="initial">
                  At our 360 Solution, Committed to Exceptiona Customer Service
                  and Support for Web Application and Mobile App Development.
                  Contact Us for Technical Assistance and Service Support.
                </Typography>
                <SocialmediaBox>
                  <SocialTypo1 variant="body1" color="initial">
                    Follow Us:
                  </SocialTypo1>
                  <Box>
                    {socialImages.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="icon"
                        height={40}
                        width={40}
                        style={{ marginRight: "15px" }}
                      />
                    ))}
                  </Box>
                  <SocialTypo2 variant="body1" color="initial">
                    Get Google Map Directions
                  </SocialTypo2>
                </SocialmediaBox>
              </FormTextBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default FormComponent;
