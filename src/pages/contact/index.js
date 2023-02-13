import CInput from "@/components/CInput";
import MainLayout from "@/layout/MainLayout";
import {Box, Button, Container, Flex} from "@mantine/core";
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

  return (
    <MainLayout>
      <Container>
        {/* Registered Address */}
        <Flex wrap="wrap" justify="space-between">
          <Box
            sx={{
              maxWidth: "30%",
            }}
          >
            <b>Registered Address</b>
            {addressList.map(({icon, value}) => (
              <Flex sx={{}} gap="md" key={icon + value}>
                <p>{icon}</p>
                <p>{value}</p>
              </Flex>
            ))}
          </Box>
          <Box>
            <h3>WE WOULD LOVE TO HEAR FROM YOU.</h3>
            <b>Please complete the fields below.</b>
            <Flex gap="xl">
              <CInput label="Full Name" />
              <CInput label="Email" />
            </Flex>
            <CInput label="Mobile Number" />
            <CInput label="Company Name" />
            <CInput label="Message" />

            <Button>SEND ENQUIRY</Button>
          </Box>
        </Flex>
        {/* COnnect with us */}
      </Container>
    </MainLayout>
  );
};

export default Contact;
