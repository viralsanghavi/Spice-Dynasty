import AboutUs from "@/components/AboutUs";
import AnimatedWords from "@/components/AnimatedWords";
import History from "@/components/History";
import ProductsListing from "@/components/ProductsListing";
import MainLayout from "@/layout/MainLayout";
import {UilAngleLeft, UilAngleRight} from "@iconscout/react-unicons";
import {ActionIcon, Box, Container, Text, Title} from "@mantine/core";
import {collection, getDocs} from "firebase/firestore";
import {database} from "firebaseConfig";
import Head from "next/head";
import Image from "next/image";
import {Carousel} from "react-responsive-carousel";

export default function Home({sliderData = [], listingProductsData = []}) {
  const RenderInContainer = ({children}) => (
    <Container
      sx={{
        position: "relative",
        padding: 0,
      }}
      size="md"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap-reverse",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Container>
  );

  return (
    <MainLayout>
      <Head>
        <title>Spice Dynasty</title>
        <meta name="description" content="Spice dynasty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <History />

      <Box p={{base: "xl"}} py={50}>
        <Carousel
          axis="horizontal"
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={600}
          showThumbs={false}
          swipeable={false}
          renderArrowPrev={(clickHandler) => (
            <ActionIcon
              sx={{
                position: "absolute",
                top: "50%",
                bottom: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 30232,
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "#cebba4",
                },
              }}
              display={{base: "none", sm: "flex"}}
              radius="xl"
              onClick={clickHandler}
              size="xl"
            >
              <UilAngleLeft />
            </ActionIcon>
          )}
          renderArrowNext={(clickHandler) => (
            <ActionIcon
              sx={{
                position: "absolute",
                top: "50%",
                bottom: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "#cebba4",
                },
              }}
              display={{base: "none", sm: "flex"}}
              radius="xl"
              size="xl"
              onClick={clickHandler}
            >
              <UilAngleRight />
            </ActionIcon>
          )}
          animationHandler="fade"
        >
          {sliderData?.map(({title, url, description = "", id}) => (
            <RenderInContainer key={id} style={{height: "100%"}}>
              <Box
                w={{sm: "100%", md: "100%", lg: "50%", xl: "50%"}}
                sx={{
                  textAlign: "left",
                  h: "100%",
                }}
              >
                <Text fz="lg" mb={5}>
                  Spice Dynasty
                </Text>
                <Title fz="xxxl" lh={0.85}>
                  {title}
                </Title>
                <Text
                  fz="xs"
                  mt={20}
                  maw={{sm: "100%", md: "75%"}}
                  ta="justify"
                >
                  {description}
                </Text>
              </Box>
              <Box
                style={{
                  position: "relative",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  minWidth: "300px",
                  // width: "100%",
                }}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "50%",
                  xl: "50%",
                }}
                h={{base: "280px", sm: "400px", md: "560px"}}
              >
                <Image
                  alt=""
                  fill
                  src={url}
                  objectPosition="center center"
                  style={{objectFit: "cover", borderRadius: 24}}
                />
              </Box>
            </RenderInContainer>
          ))}
        </Carousel>
      </Box>

      <ProductsListing listingProductsData={listingProductsData} />
      <AboutUs />
    </MainLayout>
  );
}
export async function getStaticProps() {
  const sliderQuerySnapshot = await getDocs(
    collection(database, "home-screen")
  );
  let sliderData = [];
  sliderQuerySnapshot.forEach(async (doc) => {
    sliderData = [...sliderData, {id: doc.id, ...doc.data()}];
  });
  const productsQuerySnapshot = await getDocs(
    collection(database, "listed-products")
  );
  let listingProductsData = [];
  productsQuerySnapshot.forEach(async (doc) => {
    listingProductsData = [...listingProductsData, {id: doc.id, ...doc.data()}];
  });

  return {
    props: {
      sliderData,
      listingProductsData,
    },
  };
}
