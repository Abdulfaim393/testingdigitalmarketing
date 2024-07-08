"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0rem",
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const HeadTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous, sans-serif",
  fontSize: "35px",
}));
export const SubTittleTypo = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: "black",
  textAlign: "justify",
}));
