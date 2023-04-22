import MainLayout from "@/layout/MainLayout";
import {UilAngleLeft, UilAngleRight} from "@iconscout/react-unicons";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import {useRouter} from "next/router";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const RenderInContainer = ({children}) => (
    <Container
      sx={{
        position: "relative",
      }}
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

      <Box
        py={80}
        p="xl"
        style={{
          ".controlDots?": {
            top: 0,
          },
        }}
      >
        <Carousel
          axis="horizontal"
          // autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={600}
          showThumbs={false}
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
              title: "Star Arinse",
              url: "https://media.istockphoto.com/id/1140288941/photo/organic-indian-spice-herb-star-anise-in-a-brown-bowl.jpg?s=612x612&w=0&k=20&c=dPcRb4maN-ABZC82B64zRYJpYvXLk3NMl7g0a53dxhk=",
            },
            {
              title: "Cumin",
              url: "/cumin.jpg",
            },
            {
              title: "Turmeric",
              url: "/turmeric.jpeg",
            },
            {
              title: "Chilly",
              url: "/chilli.jpg",
            },
            {
              title: "Ginger",
              url: "/ginger.jpeg",
            },
            {
              title: "Coriander",
              url: "/coriander.jpg",
            },
            {
              title: "Green cardamom",
              url: "/green-cardamom.jpg",
            },
          ].map(({title, url}) => (
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
                  Star arinse has been used in Asian Eurasian, cooking for many
                  many years. This old-age spice is not only known as culinary
                  expert, but is also famous fors its medicinal properties.
                </Text>
              </Box>
              <Box
                w={{sm: "100%", md: "100%", lg: "50%", xl: "50%"}}
                style={{
                  position: "relative",
                  height: "400px",
                  width: "50%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image alt="" fill src={url} style={{objectFit: "cover"}} />
              </Box>
            </RenderInContainer>
          ))}
        </Carousel>
      </Box>

      <Box
        bg="#b78f5d"
        p="xl"
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
            maxWidth: "1024px",
            margin: "0 auto",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {[
            {
              title: "Cumin",
              url: "/cumin.jpg",
            },
            {
              title: "Turmeric",
              url: "/turmeric.jpeg",
            },
            {
              title: "Chilly",
              url: "/chilli.jpg",
            },
            {
              title: "Ginger",
              url: "/ginger.jpeg",
            },
            {
              title: "Coriander",
              url: "/coriander.jpg",
            },
            {
              title: "Green cardamom",
              url: "/green-cardamom.jpg",
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
                  height: "200px",
                  width: "220px",
                  margin: "0 auto",
                }}
              >
                <Image
                  alt={title}
                  fit="contain"
                  fill
                  style={{
                    objectFit: "contain",
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
            onClick={() => router.push("all-products")}
          >
            View All Products
          </Text>
        </Button>
      </Box>

      <Box
        py={80}
        p="xl"
        sx={{
          background: "white",
          // "linear-gradient( to bottom, white 0%, white 70%,  #b78f5d 70%, #b78f5d 100%)",
        }}
      >
        <Flex gap="xl" px={{md: 20, lg: 80}} wrap="wrap">
          <Box w={{sm: "100%", md: "100%", lg: "48%"}}>
            <Card p={0} radius={12} shadow="xl">
              <Box
                sx={{
                  position: "relative",
                  height: "400px",
                }}
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0631/1647/6675/products/Nestroot_04.png?v=1675512303"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Card>
          </Box>
          <Box w={{sm: "100%", md: "100%", lg: "48%"}}>
            <Title lh={1}>About</Title>
            <Title lh={1}>Spice Dynasty</Title>
            <Text py={34} fz="xs">
              Welcome to our company, a seasoned exporter of spices from India
              with over 120 years of experience in the industry. Our legacy
              dates back to the early 1900s when our ancestors started trading
              in spices, and we have since established ourselves as a trusted
              supplier of high-quality spices to customers around the world.
            </Text>
            <Text fz="xs">
              We are committed to delivering the best spices to our clients,
              sourced directly from the farmers and processed using the latest
              technology to ensure their authenticity and flavor. Our vast
              network of suppliers and distributors allows us to cater to every
              corner of the globe and meet the diverse needs of our customers.
            </Text>
            <Text fz="xs">
              With a deep understanding of the spice market and a
              customer-centric approach, we have earned a reputation for
              excellence and reliability. Our team of experts is dedicated to
              providing exceptional service, ensuring timely deliveries, and
              maintaining consistent quality across all our products.
            </Text>
            <Text fz="xs">
              Whether you&apos;re a small business or a multinational
              corporation, we are committed to providing you with the best
              spices from India. Trust us to be your partner in all your spice
              needs and experience the quality and authenticity of our products.
            </Text>
            <Button
              bg="black"
              radius="xl"
              px={30}
              sx={{border: "1px solid white"}}
              fw="500"
              fz={12}
              mt={20}
            >
              KNOW MORE
            </Button>
          </Box>
        </Flex>
      </Box>
    </MainLayout>
  );
}
