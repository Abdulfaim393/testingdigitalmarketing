import { Container } from "@mui/material";
import React from "react";
import newsletterimg from "../../../../../../public/newsletterimgwebp.webp";
import {
  FieldButton,
  HeadText,
  MainBox,
  NewsletterImage,
  PositionRelativeBox,
  TextBox,
  TextfieldBox,
  TextFieldMain,
} from "./styled";

const NewsLetter = () => {
  return (
    <>
      <PositionRelativeBox>
        <Container maxWidth="xl">
          <MainBox>
            <NewsletterImage
              src={newsletterimg}
              alt="image"
              height={378}
              width={371}
            />
            <TextBox>
              <HeadText variant="h3" color="initial">
                Subscribe To Our Newsletter!
              </HeadText>
              <HeadText variant="body1" color="initial">
                We are 100 professional software engineers with mor the 10 years
                in delive ring super products it because you&apos;ve seen it
              </HeadText>
              <TextfieldBox>
                <TextFieldMain
                  size="small"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                />
                <FieldButton size="small" variant="contained">
                  Subscribe Now
                </FieldButton>
              </TextfieldBox>
            </TextBox>
          </MainBox>
        </Container>
      </PositionRelativeBox>
    </>
  );
};

export default NewsLetter;
