import {Box, Button, Header as Heading} from "@mantine/core";
import {useRouter} from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const headers = [
    {title: "Home", path: "/"},
    {title: "About", path: "/about"},
    {title: "Contact Us", path: "/contact"},
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Heading height={60} p="xs" w="100%">
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box as="h1">Spice Dynasty</Box>
          {headers.map(({title, path}, key) => (
            <Box
              as="button"
              sx={{
                cursor: "pointer",
              }}
              key={title + key}
              onClick={() => router.push(path)}
            >
              {title}
            </Box>
          ))}
        </Box>
      </Heading>
    </div>
  );
};

export default Header;
