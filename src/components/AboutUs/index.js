import {Box, Button, Card, Flex, Text, Title} from "@mantine/core";
import Image from "next/image";
import {useRouter} from "next/router";

const AboutUs = () => {
  const router = useRouter();

  return (
    <Box
      px={{base: "xl", sm: "xl", md: "xl", lg: 0}}
      py={50}
      sx={{
        maxWidth: "1064px",
        width: "100%",
        margin: "0 auto",
        background: "#F8F9FD",
      }}
    >
      <Flex gap={40} wrap="wrap" justify="space-between">
        <Box w={{base: "100%", sm: "100%", md: "100%", lg: "48%"}}>
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
            with over 120 years of experience in the industry. Our legacy dates
            back to the early 1900s when our ancestors started trading in
            spices, and we have since established ourselves as a trusted
            supplier of high-quality spices to customers around the world.
          </Text>
          <Text fz="xs" pb={20}>
            We are committed to delivering the best spices to our clients,
            sourced directly from the farmers and processed using the latest
            technology to ensure their authenticity and flavor. Our vast network
            of suppliers and distributors allows us to cater to every corner of
            the globe and meet the diverse needs of our customers.
          </Text>
          <Text fz="xs" pb={20}>
            With a deep understanding of the spice market and a customer-centric
            approach, we have earned a reputation for excellence and
            reliability. Our team of experts is dedicated to providing
            exceptional service, ensuring timely deliveries, and maintaining
            consistent quality across all our products.
          </Text>
          <Text fz="xs" pb={20}>
            Whether you&apos;re a small business or a multinational corporation,
            we are committed to providing you with the best spices from India.
            Trust us to be your partner in all your spice needs and experience
            the quality and authenticity of our products.
            <Button
              variant="subtle"
              sx={{
                color: "#b78f5e",
                margin: 0,
                height: "auto",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
              fz={"xs"}
              onClick={() => router.push("about")}
            >
              Read more
            </Button>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;
