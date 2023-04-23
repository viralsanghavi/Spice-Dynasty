import MainLayout from "@/layout/MainLayout";
import {ALL_PRODUCTS} from "@/utils/constants";
import {Box, Card, Container} from "@mantine/core";
import Image from "next/image";

const AllProducts = () => {
  return (
    <MainLayout>
      <Container p="xs" w="100%" mt="xl">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {ALL_PRODUCTS.map(({title, navigateTo}) => {
            return (
              <Card
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  maxWidth: "300px",
                  borderRadius: 20,
                  width: "100%",
                  ":hover": {
                    cursor: navigateTo ? "pointer" : "initial",
                  },
                  padding: "0 20px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
                }}
                mb="xl"
                key={title}
              >
                <Box pos="relative" h="40px" w="40px">
                  <Image fill src="https://picsum.photos/40/40" />
                </Box>
                <Box
                  component={navigateTo ? "a" : "p"}
                  href={`product/${navigateTo}`}
                  sx={{
                    textStyle: "none",
                    // textDecoration: "none",
                    textDecoration: navigateTo ? "underline" : "none",
                    color: "inherit",
                    ":hover": {},
                    margin: 0,
                  }}
                >
                  {title}
                </Box>
              </Card>
            );
          })}
        </Box>
      </Container>
    </MainLayout>
  );
};

export default AllProducts;
