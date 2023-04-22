import CInput from "@/components/CInput";
import MainLayout from "@/layout/MainLayout";
import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import {useId} from "react";

const Contact = () => {
  const addressList = [
    {
      icon: "Address",
      value:
        "1/3, Random Bunglow, Opp. Random College, Random Road, Mumbai 400014 India",
    },
    {
      icon: "mail",
      value: "enquiry@spicedynasty.com",
    },
    {
      icon: "phone",
      value: "9999999999 / 9999999999",
    },
  ];
  const id = useId();
  const largeScreen = useMediaQuery("(min-width: 900px)");

  return (
    <MainLayout noBanner>
      <Flex
        direction={{base: "column-reverse", xs: "column-reverse", md: "row"}}
      >
        <Box
          mih={{
            base: "50vh",
            sm: "50vh",
            md: "90vh",
          }}
          sx={{
            width: "100%",
            flex: 0.5,
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/6298b34b57c18a509ebe1211/6321c4686667e7bd17417c49_DSC01486.webp)",
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box
          sx={{
            flex: 0.5,
            maxHeight: "90vh",
            margin: "20px 0",
          }}
          px="md"
        >
          <Flex direction="column" gap={20} flex={1} h="80%">
            <Text
              sx={{
                fontWeight: "lighter",
                fontSize: "0.85rem",
                width: "fit-content",
              }}
            >
              Hi there!
            </Text>
            <Box>
              <Anchor
                variant="default"
                sx={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "transparent",
                  border: "none",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                  overflowWrap: "break-word",
                }}
                href="mailto:vsanghavi3@gmail.com"
              >
                <Text
                  size={{
                    base: 20,
                    sm: 20,
                  }}
                  sx={{
                    fontWeight: 400,
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    width: "fit-content",
                    letterSpacing: "1px",
                    overflowWrap: "break-word",
                    fontSize: largeScreen ? "2.5rem" : "1.5rem",
                  }}
                >
                  hi@spicedynasty.co.in
                </Text>
              </Anchor>
              <Anchor
                variant="default"
                sx={{
                  height: "auto",
                  width: "auto",
                  backgroundColor: "transparent",
                  border: "none",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
                href="phone:+918369791656"
              >
                <Text
                  my={18}
                  sx={{
                    fontSize: "1.2rem",
                    letterSpacing: "2px",
                    fontWeight: 400,
                    width: "fit-content",
                  }}
                >
                  +91 83697 91656
                </Text>
              </Anchor>
            </Box>
            <Box>
              <Text
                sx={{
                  fontWeight: 600,
                }}
              >
                You have a query? Why not click the email address or the Contact
                number
              </Text>
              <Text
                sx={{
                  fontWeight: 600,
                }}
              >
                We are here to help you find the finest Spices ever found
              </Text>
            </Box>

            <Box
              sx={{
                marginTop: "auto",
              }}
            >
              <Text>Navi Mumbai</Text>
              <Text>255G 9000 Ghent</Text>
              <Text>Navi Mumbai BE 0838.495.021</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </MainLayout>
  );
};

export default Contact;
