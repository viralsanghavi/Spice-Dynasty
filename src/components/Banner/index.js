import {BackgroundImage, Box, Image} from "@mantine/core";
import {useRouter} from "next/router";
import React from "react";

const Banner = () => {
  const router = useRouter();
  return (
    <Box pos="relative">
      <BackgroundImage
        src="https://pisumfoods.com/img/banner/indian-spices-banner.jpg"
        radius="sm"
        sx={{
          height: "300px",
        }}
      >
        <Box
          as="h1"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: "3rem",
            top: "30%",
            position: "absolute",
          }}
        >
          Spices
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default Banner;
