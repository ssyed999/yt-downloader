import { useEffect, useState, useRef, useCallback } from "react";
import Typed from "typed.js";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from './footer/Footer'
import Logo from "../src/assets/Logo3.png";
export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [source, setSource] = useState("");
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const url = `https://convert2mp3s.com/api/widget?url=${videoUrl}`;
    setSource(url);
  }, [videoUrl]);

  useEffect(() => {
    const options = {
      strings: ["Youtube", "Instagram", "Facebook"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
      loopCount: Infinity,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setVideoUrl(value);
  };

  return (
    <div className="App container scrollbar scrollbar-primary">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        // options={{
        //   background: {
        //     color: {
        //       value: "#fffff",
        //       // value: "#90ee90",
        //     },
        //   },
        //   fpsLimit: 120,
        //   interactivity: {
        //     events: {
        //       onClick: {
        //         enable: true,
        //         mode: "push",
        //       },
        //       onHover: {
        //         enable: true,
        //         mode: "repulse",
        //       },
        //       resize: true,
        //     },
        //     modes: {
        //       push: {
        //         quantity: 4,
        //       },
        //       repulse: {
        //         distance: 200,
        //         duration: 0.4,
        //       },
        //     },
        //   },
        //   particles: {
        //     color: {
        //       value: "#ffffff",
        //     },
        //     links: {
        //       color: "#ffffff",
        //       distance: 150,
        //       enable: true,
        //       opacity: 0.5,
        //       width: 1,
        //     },
        //     collisions: {
        //       enable: true,
        //     },
        //     move: {
        //       directions: "none",
        //       enable: true,
        //       outModes: {
        //         default: "bounce",
        //       },
        //       random: false,
        //       speed: 6,
        //       straight: false,
        //     },
        //     number: {
        //       density: {
        //         enable: true,
        //         area: 800,
        //       },
        //       value: 80,
        //     },
        //     opacity: {
        //       value: 0.5,
        //     },
        //     shape: {
        //       type: "circle",
        //     },
        //     size: {
        //       value: { min: 1, max: 5 },
        //     },
        //   },
        //   detectRetina: true,
        // }}
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
              value: 30,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
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
            image: `url(${BackgroundImage})`,
          },
        }}
      />
      <div className="header d-flex align-items-center ">
        <img src={Logo} style={{ height: "74px" }} alt="icon"></img>
        <h3 className="align-self-center flex-grow-1">
          The best place to extract audio and download MP3 or Video you want
          from any website{" "}
        </h3>
      </div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">Download Video/Audio</li>
            <li className="nav-item">Extract audio from video link</li>
          </ul>
        </div>
      </nav> */}
      <BrowserRouter>
        {videoUrl === "" && (
          <div className="type-wrap">
            Download video/audio from :{" "}
            <span style={{ whiteSpace: "pre" }} ref={el} />
          </div>
        )}
        <input
          className="input"
          type="text"
          onChange={handleChange}
          placeholder="Enter Video Url"
        />
        {videoUrl ? (
          <iframe
            title="downloader"
            className="iframe"
            src={source}
            allowtransparency={true}
            scrolling={true}
          ></iframe>
        ) : (
          <div style={{ color: "white" }}>
            Wait while we are proccessing you request.
          </div>
        )}

        <Footer />
      </BrowserRouter>
    </div>
  );
}
