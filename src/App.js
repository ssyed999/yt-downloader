import { useEffect, useState, useRef, useCallback } from "react";
import Typed from "typed.js";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./footer/Footer";
import Logo from "../src/assets/Logo3.png";
import background from "../src/assets/background.jpeg";

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [source, setSource] = useState("");
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Youtube", "Instagram", "Facebook"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      loopCount: Infinity,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setVideoUrl(value);
    if (value === "") {
      setSource("");
    }
  };

  const handleSearch = () => {
    if (videoUrl) {
      const url = `https://convert2mp3s.com/api/widget?url=${videoUrl}`;
      setSource(url);
    }
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 200,
              limit: 300,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "images/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 0,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: "#ffffff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 100,
                duration: 2,
                opacity: 1,
                speed: 2,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 0,
                  g: 0,
                  b: 0,
                },
              },
            },
          },
          retina_detect: true,
          fps_limit: 60,
          background: {
            image: `url(${background})`,
          },
        }}
      />
      <div className="App ">
        <div className="header d-flex align-items-center ">
          <img
            className="logo"
            src={Logo}
            style={{ height: "50px" }}
            alt="icon"
          ></img>
          <h3 className="align-self-center flex-grow-1">
            The best place to extract audio and download MP3 or Video you want
            from any website{" "}
          </h3>
        </div>
        <div style={{ width: "100%" }}>
          <div className="type-wrap">
            Download video/audio from :{" "}
            <span style={{ whiteSpace: "pre" }} ref={el} />
          </div>
          <input
            className="input"
            type="text"
            onChange={handleChange}
            placeholder="Enter Video Url"
          />
          <button className="search-btn" onClick={handleSearch}>
            Get Download Link
          </button>
          {source ? (
            <iframe
              title="downloader"
              className="iframe"
              src={source}
              allowtransparency={true}
              scrolling={true}
            ></iframe>
          ) : null}
        </div>
        <Footer />
      </div>
    </>
  );
}
