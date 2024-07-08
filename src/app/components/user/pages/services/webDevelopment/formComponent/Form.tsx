import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { FormBox, FormButton, TextfieldBox } from "./styled";
import { textfieldData } from "./data";

const Form = () => {
  return (
    <>
      <FormBox>
        {textfieldData.map((item, index) => (
          <TextfieldBox key={index}>
            <TextField
              size="small"
              fullWidth
              placeholder={item}
              variant="outlined"
            />
          </TextfieldBox>
        ))}
        <TextfieldBox>
          <TextField
            size="small"
            placeholder="Your Message"
            multiline
            fullWidth
            rows={4}
          />
        </TextfieldBox>
        <FormButton variant="contained" size="small">
          Get a Quote
        </FormButton>
      </FormBox>
    </>
  );
};

export default Form;
