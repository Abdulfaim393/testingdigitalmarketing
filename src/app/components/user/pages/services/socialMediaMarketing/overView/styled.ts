"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0",
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  display:"flex",
  justifyContent:"center",
  alignItems: "center",
}));
export const TypoH3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  color: "#932889",
}));
export const TypoBody1 = styled(Typography)(({ theme }) => ({
  marginTop: "0.8rem",
  fontSize: "1.2rem",
  textAlign: "justify",
}));
