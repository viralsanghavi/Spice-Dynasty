import MainLayout from "@/layout/MainLayout";
import {
  Accordion,
  Box,
  Container,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {database} from "firebaseConfig";
import Head from "next/head";

const About = ({valuesData, planData}) => {
  const addDataToDb = async () => {
    [
      {
        title: "Expand our market reach",
        description:
          "One of our primary goals for the next five years is to expand our market reach and increase our customer base in new and existing markets. This could include developing new distribution channels, expanding our online presence, and partnering with retailers and wholesalers in new regions.",
      },

      {
        title: "Increase product offerings",
        description:
          "We aim to expand our product offerings beyond spices to include related products such as spice blends, sauces, and condiments. We could also explore offering specialty and organic products.",
      },
      {
        title: "Develop sustainable sourcing practices",
        description:
          "As a company committed to sustainability, we plan to develop sustainable sourcing practices that support local communities and protect the environment. This could include sourcing from small-scale farmers and using eco-friendly packaging materials.",
      },
      {
        title: "Invest in technology",
        description:
          "To stay competitive and streamline our operations, we plan to invest in technology such as inventory management software, supply chain management tools, and e-commerce platforms.",
      },
      {
        title: "Enhance customer experience",
        description:
          "We plan to enhance the customer experience by providing more personalized and responsive customer service, improving our website's usability and functionality, and creating more engaging marketing campaigns.",
      },
    ].map(
      async ({title, description}) =>
        await addDoc(collection(database, "plan"), {
          title,
          description,
        })
    );
  };
  return (
    <MainLayout noBanner>
      <Head>
        <title>Spice Dynasty</title>
        <meta name="description" content="Spice dynasty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container py={50}>
        <Space w="xl" />
        <Text
          component="h1"
          tt="uppercase"
          c="black"
          mt="xl"
          sx={{
            fontWeight: "500",
            lineHeight: 0.9454545454545454,
            fontSize: "max(3.25rem,min(9vw,9.375rem))",
          }}
        >
          Mission
        </Text>
        <Text
          component="h1"
          tt="uppercase"
          c="black"
          mt="xl"
          ml="20%"
          sx={{
            fontWeight: "500",
            lineHeight: 0.9454545454545454,
            fontSize: "max(3.25rem,min(9vw,9.375rem))",
          }}
        >
          & Vision
        </Text>

        <Box
          mt={40}
          sx={{
            padding: 0,
            fontWeight: 400,
            fontSize: "max(1.75rem,min(2vw,3.5rem))",

            textAlign: "justify",
          }}
        >
          At Spice Dynasty, we are committed to providing our customers with the
          best selection of premium Indian spices, sourced from trusted
          suppliers and produced using traditional methods. We strive to
          maintain the highest standards of quality, consistency, and
          authenticity in all our products, while ensuring fair compensation and
          safe working conditions for our employees and partners.
        </Box>
        <blockquote
          style={{
            marginTop: 40,
            fontSize: "max(1.75rem,min(2vw,3.5rem))",
            textAlign: "justify",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat",
              fontWeight: 800,
            }}
          >
            “{" "}
          </span>
          Our Vision is to be the leading supplier of high-quality, authentic
          Indian spices to customers around the world, while promoting
          sustainable and fair trade practices.
        </blockquote>

        <Space h="xl" />
        <Text
          component="h2"
          sx={{
            fontSize: "max(3.25rem,min(2.7vw,6.3125rem))",
            fontWeight: 400,
          }}
        >
          Our Values
        </Text>
        <Space h="xl" />
        <Accordion
          variant="contained"
          radius="lg"
          chevronPosition="left"
          defaultValue="Quality"
        >
          {valuesData?.map(({title, description}) => (
            <Accordion.Item key={title} value={title}>
              <Accordion.Control>{title}</Accordion.Control>
              <Accordion.Panel>{description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        <Space h="xl" />

        <Text
          component="h2"
          sx={{
            fontSize: "max(3.25rem,min(2.7vw,6.3125rem))",
            fontWeight: 400,
          }}
        >
          Plan ahead of us
        </Text>
        <Space h="xl" />
        <SimpleGrid
          cols={2}
          breakpoints={[
            {maxWidth: "62rem", cols: 2, spacing: "md"},
            {maxWidth: "48rem", cols: 2, spacing: "sm"},
            {maxWidth: "36rem", cols: 1, spacing: "sm"},
          ]}
        >
          {planData?.map(({title, description}) => (
            <Box p="md" key={title}>
              <Text
                component="h2"
                sx={{
                  fontSize: "max(1.5rem,min(2.2vw,2rem))",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                {title}
              </Text>
              <Text py="sm" ta="justify">
                {description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </MainLayout>
  );
};

export default About;

export async function getStaticProps() {
  const valuesQuerySnapshot = await getDocs(collection(database, "values"));
  const planQuerySnapshot = await getDocs(collection(database, "plan"));
  let valuesData = [];
  let planData = [];

  valuesQuerySnapshot.forEach(async (doc) => {
    valuesData = [...valuesData, {id: doc.id, ...doc.data()}];
  });
  planQuerySnapshot.forEach(async (doc) => {
    planData = [...planData, {id: doc.id, ...doc.data()}];
  });

  return {
    props: {
      valuesData,
      planData,
    },
  };
}
