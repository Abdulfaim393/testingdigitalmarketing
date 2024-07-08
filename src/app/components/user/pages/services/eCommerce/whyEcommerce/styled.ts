"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin:"1.5rem 0"
}));
export const HeadParaBox = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
}));
export const HeadContentBox = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
}));
export const TypoH3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "#932889",
  width: "100%",
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
