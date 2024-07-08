"use client";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";

export const TopBox = styled(Box)(({ theme }) => ({
    borderRadius: "84px 88px 0px 0px",
    background: "#970089ff",
    height: "15rem",
    marginTop: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      height: "23rem",
    },
  }));
  export const TypoH2 = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: "#ffffffa3",
    fontFamily: "sans-serif",
    display: "flex",
  }));
  export const TypoH6 = styled(Typography)(({ theme }) => ({
    color: "white",
    textTransform: "capitalize",
  }));
  
  export const TypoWCUh5 = styled(Typography)(({ theme }) => ({
    background: "#f6c460ff",
    width: "230px",
    textAlign: "center",
    padding: "5px",
    borderRadius: "25px",
    fontFamily: "Righteous,sans-serif",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));
  export const TypoWCUh3 = styled(Typography)(({ theme }) => ({
    padding: "1.5rem 0rem",
    color: "white",
    fontFamily: "Righteous,sans-serif",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "2.5rem",
    },
  }));
  export const TypoWCUBody1 = styled(Typography)(({ theme }) => ({
    color: "white",
    fontSize: "1.2rem",
    paddingBottom: "1.5rem",
    textAlign: "justify",
    paddingRight: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0rem",
    },
  }));
  export const PointsBody2 = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "justify",
    marginBottom: "0.5rem",
    fontsize: "0.79rem",
  }));
  export const PointsTitleTypography = styled(Typography)(({ theme }) => ({
    color: "white",
    textTransform: "capitalize",
    fontSize: "1.7rem",
    padding: "0px",
    marginBottom: "0.7rem",
    fontFamily: "Righteous,sans-serif",
  }));
  
  export const BottomBox = styled(Box)(({ theme }) => ({
    background: "#6907A8",
    paddingTop: "4rem",
    paddingBottom: "1rem",
    borderRadius: "84px 84px 0px 0px",
    position: "relative",
    bottom: "90px",
    marginBottom: "-65px",
    [theme.breakpoints.down("sm")]: {
      bottom: "80px",
      paddingBottom: "90px",
    },
  }));
  export const CheckIconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    columnGap: "15px",
  }));
  export const HeadingParaBox = styled(Box)(({ theme }) => ({
    height: "460px",
  }));
  export const PoinIconBox = styled(Box)(({ theme }) => ({
    paddingTop: "5px",
  }));
  export const ImageBox = styled(Box)(({ theme }) => ({
    height: "460px",
    display: "flex",
    alignItems: "end",
    [theme.breakpoints.down("sm")]: {
      height: "360px",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  export const ViewAllBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  export const NumberCounterBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
  }));
  export const PointsBox = styled(Box)(({ theme }) => ({
    height: "460px",
  }));
  export const NumberGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  export const MainImage = styled(Image)(({ theme }) => ({
    width: "100%",
    height: "80%",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  }));
  export const ButtonWCU = styled(Button)(({ theme }) => ({
    color: "white",
    textTransform: "capitalize",
    border: "1px solid #ffffff94",
    padding: "5px 25px",
    borderRadius: "25px",
    "&:hover": {
      border: "1px solid #ffffff94",
    },
  }));