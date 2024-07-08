import { Box, Grid, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  BoxGrid,
  CustomBoxCrad,
  CustomMonthYearTypography,
  CustomSnTypography,
  CustomTextTypography,
  CustomTitleTypography,
  GridBox,
  GridCardFirst,
  HeadingBox,
  MainBox,
  SndateBox,
  Typographyh3,
  Typographyh5,
} from "./styled";
import { BlogCard, BlogImg } from "./data";

const BlogNews = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="lg">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Blog And News
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              Get More Update For Blog And News
            </Typographyh3>
          </HeadingBox>
          <GridBox container spacing={3}>
            {BlogImg.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <GridCardFirst>
                  <Image
                    src={item}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </GridCardFirst>
              </Grid>
            ))}
            {BlogCard.map((item, index) => (
              <BoxGrid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <CustomBoxCrad index={index}>
                  <SndateBox>
                    <Box>
                      <CustomSnTypography
                        index={index}
                        variant="body1"
                        color="initial"
                        gutterBottom
                      >
                        {item.sn}
                      </CustomSnTypography>
                    </Box>
                    <Box>
                      <CustomMonthYearTypography
                        variant="body1"
                        color="initial"
                        gutterBottom
                        index={index}
                      >
                        {item.month}
                      </CustomMonthYearTypography>
                      <CustomMonthYearTypography
                        variant="body1"
                        color="initial"
                        gutterBottom
                        index={index}
                      >
                        {item.year}
                      </CustomMonthYearTypography>
                    </Box>
                  </SndateBox>
                  <CustomTitleTypography
                    variant="h4"
                    color="initial"
                    gutterBottom
                    index={index}
                  >
                    {item.title}
                  </CustomTitleTypography>
                  <CustomTextTypography
                    variant="body2"
                    color="initial"
                    gutterBottom
                    index={index}
                  >
                    {item.text}
                  </CustomTextTypography>
                </CustomBoxCrad>
              </BoxGrid>
            ))}
          </GridBox>
        </Container>
      </MainBox>
    </>
  );
};

export default BlogNews;
