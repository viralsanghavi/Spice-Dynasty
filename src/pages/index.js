import MainLayout from "@/layout/MainLayout";
import {getCollectionData} from "@/utils/get-collection-data";
import {UilAngleLeft, UilAngleRight} from "@iconscout/react-unicons";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import {Carousel} from "react-responsive-carousel";

export default function Home() {
  const router = useRouter();

  const RenderInContainer = ({children}) => (
    <Container
      sx={{
        position: "relative",
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

      <Box py={50}>
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
          {[
            {
              title: "Star Anise",
              url: "https://media.istockphoto.com/id/1140288941/photo/organic-indian-spice-herb-star-Anise-in-a-brown-bowl.jpg?s=612x612&w=0&k=20&c=dPcRb4maN-ABZC82B64zRYJpYvXLk3NMl7g0a53dxhk=",
              description:
                "Star Anise has been used in Asian Eurasian, cooking for many many years. This old-age spice is not only known as culinary expert, but is also famous fors its medicinal properties.",
            },
            {
              title: "Cumin",
              url: "/cumin.jpg",
              description:
                "Cumin is one of the most popular spices throughout Asia, especially in India where it is an important component of many popular recipes such as: the yogurt dish raita, alu jira (potatoes with cumin), masala dosa, and the popular spice blend garam masala. Cumin is also popular in Arabic cuisines and a part of baharat seasoning, north African tagines, and falafel.",
            },
            {
              title: "Turmeric",
              url: "/turmeric.jpeg",
              description:
                "Turmeric is a herbaceous perennial that reaches about three feet tall with grass-like leaves and greenish-yellow flowers. Turmeric thrives in rainy tropical areas such as the Indian subcontinent and Southeast Asia.",
            },
            {
              title: "Chilly",
              url: "/chilli.jpg",
              description:
                "Red peppers throughout Asia where they were particularly welcomed by Indian cooks who were already accustomed to spicy flavors.",
            },
            {
              title: "Ginger",
              url: "/ginger.jpeg",
              description:
                "Ginger is one of the most used spices in the world and comes in numerous forms, including fresh, dried, pickled, preserved, crystallized, candied, and powdered/ground. Ginger, along with green onion and garlic, is considered part of the “holy trinity” of cooking.",
            },
            {
              title: "Coriander",
              url: "/coriander.jpg",
              description:
                "The green, young coriander leaves, also known as cilantro, and the aromatic coriander fruit or seed find uses in curry meat dishes, poultry and seafood dishes, a variety of ethnic foods, puddings, breads, soups, and stews.",
            },
            {
              title: "Green cardamom",
              url: "/green-cardamom.jpg",
              description:
                "Katdare Green Elaichi is a premium quality spice that is highly aromatic and flavorful. Also known as choti elaichi, it is one of the most widely used spices in Indian cuisine. It has a strong, warm, and slightly sweet taste that adds a unique flavor to both sweet and savory dishes.",
            },
          ].map(({title, url, description = ""}) => (
            <RenderInContainer key={title} style={{height: "100%"}}>
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
                h={{base: "200px", sm: "400px", md: "560px"}}
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

      <Box
        bg="#b78f5d"
        pt={80}
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
            padding: "1.5rem",
            gap: 40,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {[
            {
              title: "Cumin",
              url: "/cumin.jpg",
              navigateTo: "cumin",
            },
            {
              title: "Turmeric",
              url: "/turmeric.jpeg",
              navigateTo: "turmeric",
            },
            {
              title: "Chilly",
              url: "/chilli.jpg",
              navigateTo: "chilly",
            },
            {
              title: "Ginger",
              url: "/ginger.jpg",
              navigateTo: "ginger",
            },
            {
              title: "Coriander",
              url: "/coriander.jpg",
              navigateTo: "coriander",
            },
            {
              title: "Green cardamom",
              url: "/green-cardamom.jpg",
              navigateTo: "green-cardamom",
            },
          ].map(({title, url, index}) => (
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
            >
              <Box
                sx={{
                  position: "relative",
                  height: "220px",
                  minWidth: "240px",
                  width: "100%",

                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  alt={title}
                  fit="contain"
                  fill
                  objectPosition="left center"
                  style={{
                    objectFit: "cover",
                    borderRadius: 20,
                  }}
                  src={
                    url ||
                    "https://cdn.fstoppers.com/styles/full/s3/media/2015/12/07/white_background_bag_after.jpg"
                  }
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

      <Box
        py={80}
        p="xl"
        sx={{
          maxWidth: "1064px",
          width: "100%",
          margin: "0 auto",
          background: "#F8F9FD",
        }}
      >
        <Flex gap={60} wrap="wrap" justify="space-between">
          <Box w={{base: "100%", sm: "100%", md: "100%", lg: "46%"}}>
            <Card p={0} radius={12} shadow="xl" bg="transparent">
              <Box
                sx={{
                  position: "relative",
                  minWidth: "300px",
                  width: "100%",
                }}
                h={{base: "400px", sm: "400px", md: "560px"}}
              >
                <Image
                  src="/wallpaper.webp"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Card>
          </Box>
          <Box
            w={{sm: "100%", md: "100%", lg: "46%"}}
            sx={{textAlign: "justify"}}
          >
            <Title lh={1}>About</Title>
            <Title lh={1}>Spice Dynasty</Title>
            <Text py={20} fz="xs">
              Welcome to our company, a seasoned exporter of spices from India
              with over 120 years of experience in the industry. Our legacy
              dates back to the early 1900s when our ancestors started trading
              in spices, and we have since established ourselves as a trusted
              supplier of high-quality spices to customers around the world.
            </Text>
            <Text fz="xs" pb={20}>
              We are committed to delivering the best spices to our clients,
              sourced directly from the farmers and processed using the latest
              technology to ensure their authenticity and flavor. Our vast
              network of suppliers and distributors allows us to cater to every
              corner of the globe and meet the diverse needs of our customers.
            </Text>
            <Text fz="xs" pb={20}>
              With a deep understanding of the spice market and a
              customer-centric approach, we have earned a reputation for
              excellence and reliability. Our team of experts is dedicated to
              providing exceptional service, ensuring timely deliveries, and
              maintaining consistent quality across all our products.
            </Text>
            <Text fz="xs" pb={20}>
              Whether you&apos;re a small business or a multinational
              corporation, we are committed to providing you with the best
              spices from India. Trust us to be your partner in all your spice
              needs and experience the quality and authenticity of our products.
            </Text>
          </Box>
        </Flex>
      </Box>
    </MainLayout>
  );
}
