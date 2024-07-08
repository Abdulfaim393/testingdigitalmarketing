"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Image from "next/image";

export const MainBox = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/newsletterbgwebp.webp)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "3rem 0rem",
    marginBottom: "0rem",
    height: "320px",
    width: "100%",
    borderRadius: "20px",
    display: "flex",
    columnGap: "20rem",
  }));
  export const TextBox = styled(Box)(({ theme }) => ({
    width: "430px",
  }));
  export const NewsletterImage = styled(Image)(({ theme }) => ({
    position: "relative",
    bottom: "106px",
    left: "100px",
  }));
  export const PositionRelativeBox = styled(Box)(({ theme }) => ({
    position: "relative",
    top: "-3rem",
    marginBottom: "-200px",
    marginTop: "8rem",
    [theme.breakpoints.down("sm")]: {
      display:"none"
    },
    
  }));
  export const TextfieldBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px",
    background: "white",
    height: "45px",
    borderRadius: "35px",
  }));
  
  export const HeadText = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "Righteous, sans-serif",
    marginBottom: "10px",
  }));
  export const FieldButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(90deg, #ff7122, #9901f6)",
    borderRadius: "25px",
    textTransform: "capitalize",
  }));
  export const TextFieldMain = styled(TextField)(({ theme }) => ({
    background: "white",
  }));