"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
  marginTop: "0rem",
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "-webkit-center" as any,
}));

export const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  borderRadius: "25px",
  fontFamily: "Righteous,sans-serif",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Typographyh3 = styled(Typography)(({ theme }) => ({
  fontFamily: "Righteous,sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));
