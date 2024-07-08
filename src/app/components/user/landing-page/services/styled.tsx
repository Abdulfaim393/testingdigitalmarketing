"use client";
import { Box, Card, Grid, Typography, styled } from "@mui/material";
import Link from "next/link";

// Services section components

export const Typographyh5 = styled(Typography)(({ theme }) => ({
    backgroundColor: "#932889",
    color: "white",
    padding: "5px 0px",
    textAlign: "center",
    width: "300px",
    fontFamily: "Righteous,sans-serif",
    borderRadius: "25px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));
  export const Typographyh3 = styled(Typography)(({ theme }) => ({
    fontFamily: "Righteous,sans-serif",
  }));
  export const Typographyh5Link = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    margin: "1rem 0rem",
    fontSize: "1.2rem",
  }));
  export const MainBox = styled(Box)(({ theme }) => ({
    padding: "1rem 0rem",
  }));
  export const HeadingBox = styled(Box)(({ theme }) => ({
    textAlign: "-webkit-center" as any,
  }));
  export const KnowMoreLink = styled(Link)(({ theme }) => ({
    textDecoration:"none",
    fontsize:"0.5rem"
  }));

  // Slider section components

  interface MainCardProps {
    gradient: string;
  }
  
  export const MainCard = styled(Card)<MainCardProps>(({ gradient }) => ({
    background: gradient,
    height: "480px",
    minWidth: 275,
    maxWidth: 380,
  }));
  export const MainGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  }));
  export const TitleTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontSize: "1.5rem",
    color: "white",
    height: "5.3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  export const ParaTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontSize: "1rem",
    color: "white",
    height: "9.3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));