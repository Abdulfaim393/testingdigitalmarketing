"use client";
import { CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import { MainCard, MainGrid, ParaTypography, TitleTypography } from "./styled";
import { CardData } from "./data";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index: any) => {
    setCurrentIndex(index);
  };

  const onClickItem = (index: any) => {
    console.log(`Clicked item at index ${index}`);
  };

  const onClickThumb = (index: any) => {
    console.log(`Clicked thumb at index ${index}`);
  };

  // Group data into sets of three cards
  const groupedData = CardData.reduce((acc: any, current: any, index: any) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(current);
    return acc;
  }, []);

  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={false}
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showIndicators={false}
      interval={10000}
      transitionTime={3000}
    >
      {groupedData.map((group: any, groupIndex: any) => (
        <div key={groupIndex}>
          <Grid container spacing={1}>
            {group.map((item: any, index: any) => (
              <MainGrid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MainCard gradient={item.gradient}>
                  <CardContent>
                    <Image
                      src={item.imageTop}
                      alt={item.title}
                      style={{ height: "50px", width: "50px" }}
                    />
                    <TitleTypography variant="h3" gutterBottom>
                      {item.title}
                    </TitleTypography>
                    <ParaTypography variant="body2" gutterBottom>
                      {item.para}
                    </ParaTypography>
                    <Image
                      src={item.imageBottom}
                      alt={item.title}
                      style={{ height: "10rem", width: "10rem" }}
                    />
                  </CardContent>
                </MainCard>
              </MainGrid>
            ))}
          </Grid>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
