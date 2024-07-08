import React, { FC } from "react";
import {
  HeroButton,
  HeroButtonBox,
  HeroText,
  HeroTypobody2,
  HeroTypoH1,
  MainBox,
} from "./styled";
import { Body, ButtonText, Title } from "./data";
export interface HeroProps {
  text?: string;
}

const Hero: FC<HeroProps> = (props) => {
  return (
    <>
      <MainBox>
        <HeroText>
          <HeroTypoH1 variant="h1" color="initial" gutterBottom>
            {Title}
          </HeroTypoH1>
          <HeroTypobody2 variant="body2" color="initial" gutterBottom>
            {Body}
          </HeroTypobody2>
          <HeroButtonBox>
            <HeroButton>{ButtonText}</HeroButton>
          </HeroButtonBox>
        </HeroText>
      </MainBox>
    </>
  );
};

export default Hero;