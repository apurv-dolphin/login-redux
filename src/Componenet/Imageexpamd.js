import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";

const useImageExapnd = () => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [click, setClick] = useState(false);
  const elementRef = useRef();

  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  useEffect(() => {
    const changeHandler = () => setFullscreen((mode) => !mode);

    document.addEventListener("fullscreenchange", changeHandler, false);

    return () => {
      document.removeEventListener("fullscreenchange", changeHandler);
    };
  }, []);

  const goFullscreen = () => {
    if (elementRef.current.requestFullscreen) {
      elementRef.current.requestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const liClass = isFullscreen ? " fullscreen" : "";

  const ToggleIcon = (
    <div className="buttoons" onClick={() => handleClick()}>
      <Button
        className="imagebtm"
        style={{ marginTop: "3px" }}
        icon={!isFullscreen ? "expand" : "compress"}
        onClick={() => (!isFullscreen ? goFullscreen() : exitFullScreen())}
      >
        {click ? "Normal Screen" : "Full Screeen"}
      </Button>
    </div>
  );
  return [elementRef, ToggleIcon , liClass]; //Icon, ref
};

export default useImageExapnd;
