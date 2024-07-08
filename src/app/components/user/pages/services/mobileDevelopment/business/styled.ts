"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0rem",
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
export const HeadTypo = styled(Typography)(({ theme }) => ({
  color: "black",
  fontFamily: "Righteous",
  fontSize: "35px",
  width: "50%",
}));
export const HeadTypoH6 = styled(Typography)(({ theme }) => ({
  color: "#932889",
  fontFamily: "Righteous",
  fontSize: "24px",
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
export const LeftSectionTypo = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  lineHeight: "2rem",
}));
