import MainLayout from "@/layout/MainLayout";
import {Carousel} from "@mantine/carousel";
import {Box, Card, Center, Container, Flex, Image} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Head from "next/head";
import {useRef, useState} from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [embla, setEmbla] = useState(null);

  const carouselList = [
    {title: "turmeric"},
    {title: "ginger"},
    {title: "Star Anise"},
    {title: "Cinnamon"},
    {title: "Asafoetida"},
    {title: "Nutmeg"},
    {title: "Cumin"},
    {title: "Black Pepper"},
    {title: "Garlic"},
    {title: "Clove"},
    {title: "Mustard Seeds"},
    {title: "Bay-Leaf"},
    {title: "Chilli-Pepper"},
    {title: "Coriander"},
    {title: "Saffron"},
    {title: "Carom Seeds / Thyme"},
    {title: "Mace"},
    {title: "Poppy Seed"},
    {title: "Green Cardamom"},
    {title: "Peppercorns"},
    {title: "Brown Cardamom"},
    {title: "Green Chilli Pepper"},
  ];
  const autoplay = useRef(Autoplay({delay: 2000}));

  return (
    <MainLayout>
      <Head>
        <title>Spice Dynasty</title>
        <meta name="description" content="Spice dynasty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Box>
          <h1>Indian Spices Exporter</h1>
          <Center>
            <Box
              sx={{
                border: "1px solid",
                width: "30%",
              }}
            />
          </Center>
        </Box>
      </Center>
      <Container>
        <Box
          as="p"
          sx={{
            textAlign: "justify",
            marginBottom: 20,
          }}
        >
          Spices are one of the most important ingredients in Indian dishes.
          Indian Spices have been popular across the world for their unique
          flavor, aroma, and beautiful texture. Thus, the export of spices from
          India has increased substantially. We, at Spice Dynasty Foods, believe
          that Indian culture and our unique spices in India should reach each
          corner of the world. Spice Dynasty is one of the leading export
          companies for the export of Indian spices. We, being whole spice
          exporters, export numerous spices including turmeric, ginger, Star
          anise, Cinnamon, Asafoetida, Nutmeg, cumin, black pepper, and many
          more.
        </Box>
        <Box
          as="p"
          sx={{
            textAlign: "justify",
            marginBottom: 20,
          }}
        >
          Spice Dynasty foods, one of the most recommended spices exporters in
          India, has a strong experience in the food industry, and we can get
          the best buyers for your products. Being one of the renowned exporters
          of Indian Masala we have connections across the globe. Through us, you
          can export Indian spices across any continent. We believe that the
          customer is our King and our process is perfectly transparent and
          reliable. The Head office located in the heart of Pune, we have
          trained executives who analyze the market so that we can give you the
          latest information available. If you are looking for spice exporters
          in India, we are here to serve you!
        </Box>
        <Flex
          direction={{base: "row", sm: "column", md: "row", lg: "row"}}
          justify="space-between"
        >
          <Box radius="md">
            <Carousel
              getEmblaApi={setEmbla}
              height={600}
              slideSize="100%"
              w="auto"
              m=" 0 30px 0 0"
              maw={{
                base: "60%",
                sm: "100%",
                md: "95%",
                lg: "95%",
              }}
              loop
              align="start"
              styles={{
                indicator: {
                  width: 12,
                  height: 4,
                  transition: "width 250ms ease",

                  "&[data-active]": {
                    width: 40,
                  },
                },
                control: {
                  display: "none",
                },
              }}
              onSlideChange={(number) => setActiveSlide(number)}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              {carouselList.map(({title}, index) => (
                <Carousel.Slide key={title + index + title}>
                  <Card shadow="sm" m={0} p={0} radius="md" withBorder>
                    <Image src={`https://picsum.photos/${600}`} />
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Box>
          <Box miw="200px">
            {carouselList.map(({title}, index) => (
              <Box
                key={title + index}
                as="p"
                onClick={() => embla.scrollTo(index)}
                sx={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                  textDecoration: index === activeSlide ? "underline" : "none",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {title}
              </Box>
            ))}
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
}
