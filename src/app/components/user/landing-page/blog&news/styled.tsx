"use client";
import { Box, Card, Grid, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
    padding: "1rem 0rem",
  }));
  
  export const HeadingBox = styled(Box)(({ theme }) => ({
    textAlign: "-webkit-center" as any,
  }));
  export const GridCardFirst = styled(Card)(({ theme }) => ({
    height: "300px",
    borderRadius: "15px",
  }));
  export const GridBox = styled(Grid)(({ theme }) => ({
    height: "400px",
  }));
  
  export const Typographyh5 = styled(Typography)(({ theme }) => ({
    backgroundColor: "#932889",
    color: "white",
    padding: "5px 0px",
    textAlign: "center",
    width: "300px",
    borderRadius: "25px",
    fontFamily:"Righteous, sans-serif",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));
  
  export const Typographyh3 = styled(Typography)(({ theme }) => ({
    fontFamily:"Righteous, sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  }));
  
  export const CustomSnTypography = styled(({ index, ...other }: any) => (
    <Typography {...other} />
  ))(({ index }) => ({
    fontSize: "20px",
    fontWeight: 600,
    padding: "10px",
    color: index === 0 ? "white" : "#932889",
    borderRadius: "0px 0px 25px 25px",
    backgroundColor: index === 0 ? "#932889" : "white",
  }));
  export const CustomMonthYearTypography = styled(({ index, ...other }: any) => (
    <Typography {...other} />
  ))(({ index }) => ({
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "18px",
    marginBottom: "0px",
    color: index === 0 ? "black" : "white",
  }));
  export const CustomTitleTypography = styled(({ index, ...other }: any) => (
    <Typography {...other} />
  ))(({ theme, index }) => ({
    // fontWeight: 600,
    paddingLeft: "5rem",
    fontSize: "1.5rem",
    color: index === 0 ? "black" : "white",
    fontFamily:"Righteous, sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
    },
  }));
  export const CustomTextTypography = styled(({ index, ...other }: any) => (
    <Typography {...other} />
  ))(({ theme, index }) => ({
    paddingLeft: "5rem",
    color: index === 0 ? "black" : "white",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
    },
  }));
  
  export const CustomBoxCrad = styled(({ index, ...other }: any) => <Card {...other} />)(
    ({ theme, index }) => ({
      padding: "0rem 1.5rem",
      height: "200px",
      borderRadius: "5px",
      width: "500px",
      backgroundColor: index === 0 ? "white" : "#932889",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
        textAlign: "center",
        height: "230px",
      },
    })
  );
  export const SndateBox = styled(Box)(({ theme }) => ({
    display: "flex",
    columnGap: "15px",
  }));
  export const BoxGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "end",
    position: "relative",
    bottom: "170px",
    [theme.breakpoints.down("sm")]: {
      position: "static",
      bottom: "0px",
    },
  }));