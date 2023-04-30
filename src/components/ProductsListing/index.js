import {Box, Button, Text} from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";

const ProductsListing = ({listingProductsData = []}) => {
  const router = useRouter();

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
          display: "grid",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1064px",
          width: "100%",
          margin: "0 auto",
          gap: 40,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {listingProductsData?.map(({title, url, index}) => (
          <Box
            key={title}
            pos="relative"
            p={24}
            shadow="xl"
            bg="white"
            sx={{
              borderRadius: 24,
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
              ":hover": {
                boxShadow:
                  "0px 1px 2px rgba(0, 0, 0, 0.4), 0px 2px 6px 2px rgba(0, 0, 0, 0.35)",
              },
              cursor: "pointer",
            }}
            onClick={() => router.push("product")}
          >
            <Box
              sx={{
                position: "relative",
                height: "220px",
                minWidth: "240px",
                width: "100%",
              }}
              className="productCard"
            >
              <Image
                alt={title}
                fit="contain"
                fill
                objectPosition="left center"
                className="productImage"
                style={{
                  objectFit: "cover",
                  borderRadius: 20,
                }}
                src={url}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "self-end",
                marginTop: 16,
              }}
            >
              <Box>
                <Text size="lg" fw="bold">
                  {title}
                </Text>
                <Text size="xs" color="#b78f5d" fw="lighter">
                  Item Code: AkKEP2
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
      <Button
        radius="28px"
        variant="outline"
        sx={{
          borderColor: "white",
          color: "white",
          textAlign: "center",
          margin: "20px auto",
          flex: 1,
        }}
      >
        <Text
          color="white"
          p={12}
          tt="uppercase"
          lts={1.5}
          fw="normal"
          onClick={() => router.push("product")}
        >
          View All Products
        </Text>
      </Button>
    </Box>
  );
};

export default ProductsListing;
