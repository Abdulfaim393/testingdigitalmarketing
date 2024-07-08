"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const MainBox = styled(Box)(({ theme }) => ({
  marginTop: "1.5rem",
  backgroundColor: "#6907A8",
  borderRadius: "50px 50px 0px 0px",
}));
export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "1.5rem",
  margin: "1rem 0",
}));
export const Typo1 = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "white",
  margin: "3.5rem 0rem",
}));
export const Typo2 = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "white",
}));

export const MainImage = styled(Image)(({ theme }) => ({
  width: "400px",
  height: "431px",
  objectFit: "contain",
  [theme.breakpoints.down("sm")]: {
    height: "400px",
    width: "350px",
  },
}));

export const Typographyh5 = styled(Typography)(({ theme }) => ({
    backgroundColor: "#932889",
    color: "white",
    padding: "5px 0px",
    textAlign: "center",
    width: "900px",
    fontSize:"1.7rem",
    fontFamily: "Righteous, sans-serif",
    borderRadius: "25px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));