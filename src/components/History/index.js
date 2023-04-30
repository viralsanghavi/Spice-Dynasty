import {Flex, Box} from "@mantine/core";
import React from "react";
import AnimatedWords from "../AnimatedWords";
import Image from "next/image";

const History = () => {
  return (
    <Box
      px={{base: "xl", sm: "xl", md: "xl", lg: 0}}
      py={50}
      sx={{
        maxWidth: "1064px",
        width: "100%",
        margin: "0 auto",
        background: "#F8F9FD",
      }}
    >
      <Flex gap={40} wrap="wrap" justify="space-between">
        <Box
          pos="relative"
          sx={{
            height: "100vh",
            overflow: "hidden",
            width: "50%",
          }}
          w={{base: "100%", sm: "100%", md: "100%", lg: "48%"}}
        >
          <Image
            src="/history.jpeg"
            alt="history"
            fill
            objectPosition="center"
            style={{
              objectFit: "cover",
              borderRadius: 24,
            }}
          />
        </Box>
        <Box
          w={{sm: "100%", md: "100%", lg: "46%"}}
          sx={{textAlign: "justify"}}
        >
          <AnimatedWords
            text="Indian spice history."
            textSx={{
              zIndex: 3,
              fontSize: "max(2.5rem,min(1.7vw,6rem))",
            }}
            containerSx={{
              justifyContent: "flex-start",
              gap: "6px",
              textAlign: "justify",
            }}
          />

          <AnimatedWords
            text="Indian spices have a rich history that dates back to ancient times. India has been a major exporter of spices since the time of the Romans and Greeks, who were attracted to the country's exotic flavors and aromas.

            The spice trade played a significant role in shaping India's history and economy. Indian spices were highly valued and sought after, leading to the establishment of trade routes that connected India with Europe, Africa, and the Middle East.
            
            The spice trade also led to the colonization of India by European powers, as they sought to control the lucrative spice trade. The British East India Company, for example, played a major role in the spice trade, and their monopoly over the market had a profound impact on India's economy and society.
            
            Spices have been used in Indian cuisine for thousands of years, not only for flavor but also for their medicinal properties. The ancient Ayurvedic texts mention the use of spices for their health benefits, and today, modern science is uncovering the various health benefits of Indian spices.
            
            India is home to a wide variety of spices, including cumin, turmeric, coriander, cardamom, and cinnamon, to name a few. These spices are used in a wide range of dishes, from the spicy curries of the north to the aromatic biryanis of the south."
            textSx={{zIndex: 3, fontSize: "max(1rem, min(1vw, 1rem))"}}
            containerSx={{
              justifyContent: "flex-start",
              gap: "4px",
              textAlign: "justify",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default History;
