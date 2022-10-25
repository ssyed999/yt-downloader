import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import "./App.css";

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [source, setSource] = useState("");
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
    <div className="App">
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
      {videoUrl ? (
        <iframe
          title="downloader"
          className="iframe"
          src={source}
          allowtransparency={true}
          scrolling={true}
        ></iframe>
      ) : null}
    </div>
  );
}
