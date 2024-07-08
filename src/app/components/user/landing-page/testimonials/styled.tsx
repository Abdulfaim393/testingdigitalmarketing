"use client";
import { Box, Card, Typography, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/testimonialBackgroundwebp.webp)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  padding: "3rem 0rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: "none",
    padding: "1rem 0rem",
    marginBottom: "0.6rem",
  },
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "left" as any,
}));

export const ImageTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  borderBottom: "1.5px solid black",
}));

export const TestCard = styled(Card)(({ theme }) => ({
  padding: "1rem",
}));

export const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#f6c460ff",
  color: "black",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  fontFamily:"Righteous, sans-serif",
  borderRadius: "25px",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Typographyh3 = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily:"Righteous, sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
    color: "black",
    textAlign: "center",
  },
}));

export const Typographyh6 = styled(Typography)(({ theme }) => ({}));

export const TextTypography = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
}));

export const RatingStarIcon = styled(StarIcon)(({ theme }) => ({
  color: "#f6c460ff",
}));
