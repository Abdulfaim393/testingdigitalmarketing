import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  GridComponentBox,
  GridComponentHeading,
  GridComponentImageBox,
  GridComponentText,
} from "./styled";

const CustomCardsGrid = ({ data }: any) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        {data.map((item: any, index: any) => (
          <GridComponentBox key={index}>
            <GridComponentImageBox>
              <Image src={item.icon} alt="image" height={50} width={50} />
            </GridComponentImageBox>
            <Box>
              <GridComponentHeading variant="h6" color="initial">
                {item.heading}
              </GridComponentHeading>
              <GridComponentText variant="body2" color="initial">
                {item.text}
              </GridComponentText>
            </Box>
          </GridComponentBox>
        ))}
      </Grid>
    </>
  );
};

export default CustomCardsGrid;
