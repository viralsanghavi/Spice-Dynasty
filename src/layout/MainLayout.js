import Header from "@/components/header";
import {Button} from "@mantine/core";
import {useScrollIntoView} from "@mantine/hooks";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import {useEffect} from "react";

const MainLayout = ({children, noBanner}) => {
  const {scrollIntoView, targetRef} = useScrollIntoView({offset: 60});

  function toggle(display) {
    let button = document.getElementById("scrollButton");
    button.style.display = display;
  }
  useEffect(() => {
    const nav = document.getElementById("childContainer");
    const scroll = (e) => {
      let navHeight = nav.offsetTop;
      let scrollHeight = window.scrollY;

      scrollHeight >= navHeight ? toggle("block") : toggle("none");
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <motion.main
      initial={{opacity: 0, y: 50, x: 0}}
      animate={{opacity: 1, y: 0, x: 0}}
      exit={{opacity: 0, y: -50}}
      transition={{duration: 0.3}}
      style={{width: "100%"}}
      ref={targetRef}
    >
      <Header />
      <div>
        <div id="childContainer">{children}</div>
        <Button
          onClick={() => scrollIntoView({alignment: "center"})}
          id="scrollButton"
          sx={{
            background: "#b78f5e",
            height: "fit-content",
            position: "fixed",
            bottom: 0,
            right: 0,
            borderRadius: "100px 0px 0px",
            justifyContent: "unset",
            padding: "18px 4px 4px 18px",
            ":hover": {
              background: "#000000",
            },
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
    </motion.main>
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
