import MainLayout from "@/layout/MainLayout";
import {ALL_PRODUCTS} from "@/utils/constants";
import {
  Accordion,
  Box,
  Card,
  Container,
  List,
  Space,
  Text,
} from "@mantine/core";
import {collection, getDocs} from "firebase/firestore";
import {database} from "firebaseConfig";
import Head from "next/head";
import Image from "next/image";

const AllProducts = ({allProducts}) => {
  return (
    <MainLayout>
      <Head>
        <title>Listed Products</title>
        <meta name="description" content="Spice dynasty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container p="xs" w="100%" mt="xl">
        <Text
          component="h2"
          sx={{
            fontSize: "max(3.25rem,min(2.7vw,6.3125rem))",
            fontWeight: 400,
          }}
        >
          Type of Products
        </Text>
        <Space h="xl" />

        <Accordion
          variant="separated"
          radius="lg"
          chevronPosition="left"
          defaultValue="Quality"
        >
          {allProducts?.map(({type, variants}) => (
            <Accordion.Item
              key={type}
              value={type}
              sx={{
                border: "1px solid #dee2e6",
              }}
            >
              <Accordion.Control>{type}</Accordion.Control>
              <Accordion.Panel>
                <Container>
                  <List type="ordered">
                    {variants.map((item) => (
                      <List.Item key={item}>{item}</List.Item>
                    ))}
                  </List>
                </Container>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Space h="xl" />
      </Container>
    </MainLayout>
  );
};

export default AllProducts;

export async function getStaticProps() {
  const allProductsQuerySnapshot = await getDocs(
    collection(database, "all-products")
  );
  let allProducts = [];
  allProductsQuerySnapshot.forEach(async (doc) => {
    allProducts = [...allProducts, {id: doc.id, ...doc.data()}];
  });

  return {
    props: {
      allProducts,
    },
  };
}
