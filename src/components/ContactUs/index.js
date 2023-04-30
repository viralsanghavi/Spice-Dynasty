import {Anchor, Box, SimpleGrid, Space, Text} from "@mantine/core";
import React from "react";

const ContactUS = () => {
  return (
    <Box
      bg="#b78f5d"
      p={{base: "xl"}}
      pt={50}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: "1064px",
          width: "100%",
          margin: "0 auto",
          gap: 40,
        }}
      >
        <SimpleGrid
          cols={2}
          breakpoints={[
            {maxWidth: "62rem", cols: 2, spacing: "md"},
            {maxWidth: "48rem", cols: 2, spacing: "sm"},
            {maxWidth: "36rem", cols: 1, spacing: "sm"},
          ]}
        >
          <Box>
            <Text fw={600} lh={1}>
              CONTACT US
            </Text>
            <Space h={14} />
            <div>
              <Anchor
                variant="default"
                sx={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "transparent",
                  border: "none",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                  overflowwrap: "break-word",
                }}
                href="mailto:vsanghavi3@gmail.com"
              >
                <Text
                  size={{
                    base: 20,
                    sm: 20,
                  }}
                  sx={{
                    fontWeight: 400,
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    width: "fit-content",
                    letterSpacing: "1px",
                    overflowrap: "break-word",
                  }}
                >
                  hi@spicedynasty.co.in
                </Text>
              </Anchor>
              <Space h={10} />
              <Anchor
                variant="default"
                sx={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "transparent",
                  border: "none",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
                href="phone:+918369791656"
              >
                <Text
                  sx={{
                    fontSize: "1.2rem",
                    letterSpacing: "2px",
                    fontWeight: 400,
                    width: "fit-content",
                  }}
                >
                  +91 83697 91656
                </Text>
              </Anchor>
            </div>
          </Box>
          <Box>
            <Text fw={600} lh={1}>
              FIND US
            </Text>
            <Space h={14} />
            <div>
              <Text>Navi Mumbai</Text>
              <Text>255G 9000 Ghent</Text>
              <Text>Navi Mumbai BE 0838.495.021</Text>
            </div>
          </Box>
        </SimpleGrid>
      </div>
    </Box>
  );
};

export default ContactUS;
