import {
  UilFacebookF,
  UilLinkedinAlt,
  UilPlay,
  UilSearch,
  UilTwitter,
} from "@iconscout/react-unicons";
import {ActionIcon, Box, Container, Header as Heading} from "@mantine/core";
import Image from "next/image";
import {useRouter} from "next/router";

const Header = () => {
  const router = useRouter();
  const headers = [
    {title: "Home", path: "/"},
    {title: "About", path: "/about"},
    {title: "Contact Us", path: "/contact"},
  ];
  const mediaList = [
    {Icon: <UilFacebookF />},
    {Icon: <UilTwitter />},
    {Icon: <UilLinkedinAlt />},
    {Icon: <UilPlay />},
    {Icon: <UilSearch />},
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
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
          src="https://scontent.fbom3-1.fna.fbcdn.net/v/t39.30808-6/302181945_462554999217997_6411569214841817724_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_oe_YarE7mYAX95ppsV&_nc_ht=scontent.fbom3-1.fna&oh=00_AfBLKHXrUl5pAh4I8eF2DnxAXA9iqqiw-MNPkp1MWHwlVw&oe=6410D047"
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
