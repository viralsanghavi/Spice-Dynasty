import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "src/styles/globals.css";
import {Global, MantineProvider} from "@mantine/core";
import Head from "next/head";
import {Poppins} from "@next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});
export default function App(props) {
  const {Component, pageProps} = props;
  return (
    <main className={poppins.className}>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          // colorScheme: "dark",
          transition: "all 0.3s ease 0s",
          fontFamily: "inherit",
          colors: {
            text: [
              "#292929",
              "#333",
              "#333",
              "#333",
              "#333",
              "#333",
              "#333",
              "#333",
            ],
          },
          // fontSizes: {
          //   xs: 10,
          //   sm: 12,
          //   md: 14,
          //   lg: 16,
          //   xl: 20,
          // },

          fontSizes: {
            xs: "14px",
            sm: "16px",
            md: "18px",
            lg: "24px",
            xl: "28px",
            xxl: "36px",
            xxxl: "45px",
            vxl: "48px",
          },
          spacing: {},
          components: {
            Text: {
              defaultProps: {
                color: "#292929",
                overflowWrap: "break-word",
              },
            },
          },
        }}
      >
        {/* <MyGlobalStyles /> */}
        <Global
          styles={(theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
              transition: "all .12s ease-in-out",
            },

            body: {
              ...theme.fn.fontStyles(),
              // backgroundColor:
              //   theme.colorScheme === "dark" ? theme.colors.dark[7] : "#262626",
              // color:
              // background: "linear-gradient(to right, #FFF,#F8F9FD, #e7e8ed)",
              background: "#F8F9FD",
              //   theme.colorScheme === "dark"
              //     ? theme.colors.dark[0]
              //     : theme.black,
              lineHeight: theme.lineHeight,
            },
          })}
        />

        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}
