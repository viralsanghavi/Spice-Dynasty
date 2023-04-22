import {
  UilFacebookF,
  UilLinkedinAlt,
  UilPlay,
  UilSearch,
  UilTwitter,
  UilBars,
} from "@iconscout/react-unicons";
import {
  ActionIcon,
  Box,
  Image,
  Container,
  Header as Heading,
} from "@mantine/core";
import {useRouter} from "next/router";
import {Drawer} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import React from "react";

const Header = () => {
  const [opened, {open, close}] = useDisclosure(false);
  const RightDrawer = () => {
    return (
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
        title={
          <ActionIcon w={100} h={100} m={10}>
            <Image src="https://images-platform.99static.com//DsfkxNyI7VYD-WNNx3PGjGOY-YA=/197x125:801x729/fit-in/500x500/99designs-contests-attachments/118/118769/attachment_118769905" />
          </ActionIcon>
        }
        sx={{
          zIndex: 30232,
        }}
      >
        <Box
          p="xl"
          display="flex"
          sx={{flexDirection: "column", justifyContent: "space-between"}}
        >
          <Box>
            {headers.map(({title, path}, key) => (
              <Box
                as="button"
                sx={{
                  cursor: "pointer",
                  fontWeight: 800,
                  color: pathname === path ? "#b78f5e" : "initial",
                  borderBottom:
                    pathname === path ? "2.7px solid #b78f5e" : "none",
                  ":hover": {
                    color: "#b78f5e",
                  },
                  lineHeight: "28px",
                }}
                w="fit-content"
                key={title + key}
                onClick={() => router.push(path)}
              >
                {title}
              </Box>
            ))}
          </Box>

          <Box
            pt="xl"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1.8rem",
            }}
          >
            {mediaList.map(({Icon}, index) => (
              <ActionIcon
                key={index}
                radius="xl"
                variant="transparent"
                sx={{
                  color: index === mediaList.length - 1 ? "#b78f5e" : "#292929",
                  ":hover": {
                    color: "#b78f5e",
                  },
                }}
              >
                {Icon}
              </ActionIcon>
            ))}
          </Box>
        </Box>
      </Drawer>
    );
  };
  const router = useRouter();
  const headers = [
    {title: "Home", path: "/"},
    {title: "Contact Us", path: "/contact"},
  ];
  const mediaList = [
    {Icon: <UilFacebookF />},
    {Icon: <UilTwitter />},
    {Icon: <UilLinkedinAlt />},
    {Icon: <UilPlay />},
  ];
  const {pathname} = router;
  return (
    <Heading
      p="xs"
      w="100%"
      sx={{
        background: "transparent",
        border: "none",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
        justify={{
          sm: "flex-start",
          md: "flex-start",
          lg: "space-between",
        }}
      >
        <ActionIcon
          onClick={open}
          display={{
            sm: "block",
            md: "block",
            lg: "none",
          }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UilBars />
        </ActionIcon>
        <RightDrawer />
        <Box
          sx={{
            alignItems: "center",
            gap: "3rem",
          }}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
          }}
        >
          {headers.map(({title, path}, key) => (
            <Box
              as="button"
              sx={{
                cursor: "pointer",
                fontWeight: 800,
                color: pathname === path ? "#b78f5e" : "initial",
                borderBottom:
                  pathname === path ? "2.7px solid #b78f5e" : "none",
                ":hover": {
                  color: "#b78f5e",
                },
                lineHeight: "28px",
              }}
              key={title + key}
              onClick={() => router.push(path)}
            >
              {title}
            </Box>
          ))}
        </Box>
        <Image
          src="https://images-platform.99static.com//DsfkxNyI7VYD-WNNx3PGjGOY-YA=/197x125:801x729/fit-in/500x500/99designs-contests-attachments/118/118769/attachment_118769905"
          height={80}
          width={80}
          style={{
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.8rem",
          }}
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
          }}
        >
          {mediaList.map(({Icon}, index) => (
            <ActionIcon
              key={index}
              radius="xl"
              variant="transparent"
              sx={{
                color: index === mediaList.length - 1 ? "#b78f5e" : "#292929",
                ":hover": {
                  color: "#b78f5e",
                },
              }}
            >
              {Icon}
            </ActionIcon>
          ))}
        </Box>
      </Container>
    </Heading>
  );
};

export default Header;
