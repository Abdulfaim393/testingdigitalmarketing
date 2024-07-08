"use client";
import { Box, Button, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("/website banner 1 1.webp")`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "inherit",
  },
}));

export const HeroText = styled(Box)(({ theme }) => ({
  width: "500px",
  position: "absolute",
  right: "50px",
  bottom: "200px",
  [theme.breakpoints.down("sm")]: {
    width: "357px",
    right: "9px",
    bottom: "77px",
  },
}));

export const HeroTypoH1 = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  fontSize: "43px",
  fontFamily: "Zen Dots, sans-serif",
}));

export const HeroTypobody2 = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "justify",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  fontSize: "0.8rem",
}));

export const HeroButtonBox = styled(Box)(({ theme }) => ({
  textAlign: "right",
  padding: "10px 24px",
}));
export const HeroButton = styled(Button)(({ theme }) => ({
  border: "1px solid white",
  borderRadius: "20px",
  color: "white",
  textTransform: "capitalize",
  padding: "5px 15px",
}));
