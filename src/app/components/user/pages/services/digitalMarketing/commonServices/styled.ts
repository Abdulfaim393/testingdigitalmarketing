"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "700px",
  fontSize: "1.7rem",
  fontFamily: "Righteous, sans-serif",
  borderRadius: "25px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const CardTypo = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "Righteous, sans-serif",
}));
export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0",
}));
export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
}));
export const CardBox = styled(Box)(({ theme }) => ({
  background: "#6907A8",
  borderRadius: "10px",
  display: "flex",
  padding: "15px",
  alignItems: "center",
}));
export const CardImage = styled(Image)(({ theme }) => ({
  background: "white",
  padding: "10px",
  borderRadius: "10px",
  marginRight: "1rem",
}));
