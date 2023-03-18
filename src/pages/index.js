import MainLayout from "@/layout/MainLayout";
import {UilAngleLeft, UilAngleRight} from "@iconscout/react-unicons";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import {Carousel} from "react-responsive-carousel";
import {UilPlus} from "@iconscout/react-unicons";

export default function Home() {
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

      <Box py={80} p="xl">
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
                backgroundColor: "#dcd3cd",
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
                backgroundColor: "#dcd3cd",
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
          {[1, 2, 3].map((item) => (
            <RenderInContainer key={item} style={{height: "100%"}}>
              <Box
                w={{sm: "100%", md: "50%", lg: "50%", xl: "50%"}}
                sx={{
                  textAlign: "left",
                  h: "100%",
                }}
              >
                <Text fz="xl">Spice Dynasty</Text>
                <Title fz="xxxl" lh={0.85}>
                  STAR ARINSE
                </Title>
                <Text fz="xs" mt={20}>
                  Star arinse has been used in Asian Eurasian, cooking for many
                  many years. This old-age spice is not only known as culinary
                  expert, but is also famous fors its medicinal properties.
                </Text>
              </Box>
              <Box w={{sm: "100%", md: "50%", lg: "50%", xl: "50%"}}>
                <img alt="" src="https://picsum.photos/1080" />
              </Box>
            </RenderInContainer>
          ))}
        </Carousel>
      </Box>

      <Box
        bg="#b78f5d"
        p="xl"
        py={80}
        display="flex"
        sx={{
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Flex
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            // height: "100%",
            width: "100%",
          }}
          gap={50}
        >
          {[1, 2, 3, 4, 5, 6].map(({item, index}) => (
            <Card
              key={item}
              pos="relative"
              p={40}
              sx={{flex: "1 1 100%"}}
              maw={{
                sm: "100%",
                md: "47%",
                lg: "30%",
                xl: 480,
              }}
              radius={16}
              h="100%"
              shadow="xl"
            >
              <Image
                alt=""
                src="https://cdn.fstoppers.com/styles/full/s3/media/2015/12/07/white_background_bag_after.jpg"
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "self-end",
                  height: "100%",
                }}
              >
                <Box>
                  <Text size="lg" fw="bold">
                    Black pepper
                  </Text>
                  <Text size="xs" color="#b78f5d" fw="lighter">
                    Item Code: AkKEP2
                  </Text>
                </Box>
              </Box>
              <Box
                pos="absolute"
                bg="#b78f5d"
                right={0}
                bottom={30}
                p={20}
                pl={30}
                w="100px"
                sx={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  textAlign: "center",
                }}
              >
                <Text color="white">₹ 250</Text>
              </Box>
            </Card>
          ))}
        </Flex>
        <Button
          radius="28px"
          variant="outline"
          sx={{
            borderColor: "white",
            color: "white",
            textAlign: "center",
            margin: "0 auto",
            height: "auto",
          }}
        >
          <Text color="white" p={12} tt="uppercase" lts={1.5} fw="normal">
            View All Products
          </Text>
        </Button>
      </Box>

      <Box
        py={80}
        p="xl"
        sx={{
          background:
            "linear-gradient( to bottom, white 0%, white 70%,  #b78f5d 70%, #b78f5d 100%)",
        }}
      >
        <Flex gap="xl" px={{md: 20, lg: 80}} wrap="wrap">
          <Box w={{sm: "100%", md: "100%", lg: "48%"}}>
            <Card p={0} radius={12} shadow="xl">
              <Image src="https://cdn.shopify.com/s/files/1/0631/1647/6675/products/Nestroot_04.png?v=1675512303" />
            </Card>
          </Box>
          <Box w={{sm: "100%", md: "100%", lg: "48%"}}>
            <Title lh={1}>About</Title>
            <Title lh={1}>Spice Dynasty</Title>
            <Text py={34} fz="xs">
              Spice dynastys spices are top grade. hand picked by experts and
              processed under strict hygenic condition and careful supervision
              which leads to unequalled savoury goodness to your cooking.
            </Text>
            <Text fz="xs">
              Though it is one mission but not adopted like business. the
              product is entirety pure with is quality control and is under the
              Strict supervision Of family. This is the reason that no other
              products of the same type could take the place of this.
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
