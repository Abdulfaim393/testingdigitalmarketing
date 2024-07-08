"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
  marginTop: "0rem",
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "-webkit-center" as any,
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  margin: "0px 2rem",
  padding: "1.5rem",
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  borderRadius: "5px",
  height: "31rem",
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "350px",
  fontFamily: "Righteous, sans-serif",
  borderRadius: "25px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Typographyh3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  fontSize:"35px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));
export const HeadTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  justifyContent: "center",
  display: "flex",
  height: "65px",
  fontFamily: "Righteous, sans-serif",
}));
export const ParaTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));
