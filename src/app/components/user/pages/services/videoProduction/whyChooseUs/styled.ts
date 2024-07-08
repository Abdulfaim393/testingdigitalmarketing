"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
}));

export const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "20%",
  marginBottom: "1.5rem",
  fontFamily: "Righteous, sans-serif",
  borderRadius: "25px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const HeadContentBox = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
}));

export const TypoH5 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "black",
  width: "50%",
}));

export const TypoBody1 = styled(Typography)(({ theme }) => ({
  marginTop: "0.8rem",
  fontSize: "1.2rem",
  textAlign: "justify",
}));

export const GridComponentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "purple",
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "1rem",
}));

export const GridComponentImageBox = styled(Box)(({ theme }) => ({
  background: "white",
  padding: "0.6rem",
  borderRadius: "10px",
  margin: "0rem 1rem",
}));

export const GridComponentHeading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "Righteous",
}));

export const GridComponentText = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "justify",
  fontSize: "0.7rem",
  fontFamily: "Righteous",
}));
