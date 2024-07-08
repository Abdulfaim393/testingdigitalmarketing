import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import workProcessImg from "../../../../../../public/work proccesswebp.webp";
import { HeadingBox, MainBox, Typographyh3, Typographyh5 } from "./styled";
import { GridOneData, GridTwoData } from "./data";

const WorkProcess = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Work Process
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              Our Work Process
            </Typographyh3>
          </HeadingBox>
        </Container>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {GridOneData.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: "15px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: "4rem", fontWeight: "600", color:item.color }}
                      variant="h2"
                      color="initial"
                    >
                      {item.image}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{  color:item.color,fontFamily: "Righteous,sans-serif", }}
                      variant="h5"
                      color="initial"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "600" }}
                      variant="body2"
                      color="initial"
                    >
                      {item.pata}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Image
          src={workProcessImg}
          alt="image"
          style={{ height: "100%", width: "100%" }}
        />
        <Container maxWidth="xl">
          <Grid container justifyContent="center" spacing={3}>
            {GridTwoData.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    columnGap: "15px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: "4rem", fontWeight: "600", color:item.color }}
                      variant="h2"
                      color="initial"
                    >
                      {item.image}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{  color:item.color, fontFamily: "Righteous,sans-serif", }}
                      variant="h5"
                      color="initial"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "600" }}
                      variant="body2"
                      color="initial"
                    >
                      {item.pata}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default WorkProcess;
