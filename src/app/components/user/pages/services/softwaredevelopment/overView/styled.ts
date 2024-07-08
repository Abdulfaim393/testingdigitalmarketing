"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0",
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  alignItems: "center",
  height:"100%"
}));
export const TypoH3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "#932889",
  width:"80%"
}));
export const TypoBody1 = styled(Typography)(({ theme }) => ({
  marginTop: "0.8rem",
  fontSize: "1rem",
  textAlign: "justify",
}));
