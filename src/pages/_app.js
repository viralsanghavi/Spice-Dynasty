import {MantineProvider} from "@mantine/core";
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
      {/* <Global
        styles={[
          {
            "@font-face": {
              fontFamily: "Agrandir",
              src: `url("../public/Agrandir-Regular-400.otf") format("opentype")`,
            },
          },
        ]}
      /> */}
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          transition: "all 0.3s ease 0s",
          fontFamily: "inherit",
        }}
      >
        {/* <MyGlobalStyles /> */}

        <Component {...pageProps} />
      </MantineProvider>
    </main>
  );
}
