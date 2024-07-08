"use client";
import { Box, Button, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
}));
export const FormBox = styled(Box)(({ theme }) => ({
  padding: "17px 40px",
  borderRadius: "10px",
  backgroundColor: "#322B52",
}));
export const TextfieldBox = styled(Box)(({ theme }) => ({
  margin: "16px 0px",
  backgroundColor: "white",
  borderRadius: "5px",
}));
export const SocialmediaBox = styled(Box)(({ theme }) => ({
  border: "1px solid gray",
  borderRadius: "20px",
  padding: "15px 30px",
  marginTop: "1.5rem",
}));
export const FormButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  fontWeight: 600,
  background: "#932889",
  borderRadius: "20px",
  "&:hover": {
    background: "#932889",
  },
}));

export const FormTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
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
export const SocialTypo1 = styled(Typography)(({ theme }) => ({
  marginBottom: "10px",
}));
export const SocialTypo2 = styled(Typography)(({ theme }) => ({
  marginTop: "10px",
}));
