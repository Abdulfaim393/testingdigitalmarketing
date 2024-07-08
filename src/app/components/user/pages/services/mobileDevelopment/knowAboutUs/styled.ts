"use client";
import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1.5rem 0rem",
}));
export const HeadTypo = styled(Typography)(({ theme }) => ({
  color: "black",
  fontFamily: "Righteous",
  fontSize: "35px",
}));
export const HeadTypoH6 = styled(Typography)(({ theme }) => ({
  color: "#6907A8",
  fontFamily: "Righteous",
  fontSize: "24px",
}));

export const SubTittleTypo = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: "black",
  textAlign: "justify",
}));
