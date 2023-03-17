import Banner from "@/components/Banner";
import Header from "@/components/header";
import {Box, Button, Center} from "@mantine/core";
import {useScrollIntoView} from "@mantine/hooks";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const MainLayout = ({children, noBanner}) => {
  const {scrollIntoView, targetRef} = useScrollIntoView({offset: 60});

  return (
    <main
      ref={targetRef}
      style={{
        width: "100%",
      }}
    >
      <Header />
      <div>
        <div>{children}</div>
        <Button
          onClick={() => scrollIntoView({alignment: "center"})}
          sx={{
            background: "#4952f4",
            height: "fit-content",
            position: "fixed",
            bottom: 0,
            right: 0,
            borderRadius: "100px 0px 0px",
            justifyContent: "unset",
            padding: "18px 4px 4px 18px",
          }}
        >
          <div>
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "31.5px",
                height: "31.5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                transition: "all 0.3s ease 0s",
                fill: "rgb(255, 255, 255)",
              }}
            >
              <path d="M7.997 10l3.515-3.79a.672.672 0 0 1 .89-.076l.086.075L16 10 13 10.001V18h-2v-7.999L7.997 10z"></path>
            </svg>
          </div>
        </Button>
      </div>
    </main>
  );
};

MainLayout.defaultProps = {
  noBanner: false,
  children: <></>,
};
MainLayout.prototype = {
  noBanner: PropTypes.bool,
  children: PropTypes.node,
};

export default MainLayout;
