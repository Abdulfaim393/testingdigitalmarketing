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
  width: "30%",
  marginBottom: "1.5rem",
  fontFamily: "Righteous, sans-serif",
  borderRadius: "25px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Typographyh3 = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "45px",
  fontFamily: "Righteous, sans-serif",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));
export const ParaTypo = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  lineHeight: "2.5rem",
}));
