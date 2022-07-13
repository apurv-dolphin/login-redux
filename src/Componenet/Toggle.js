import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function SwitchExample() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);
  return (
    <>
      <label className="lbl">{mode === "dark" ? "Light" : "Dark"} Mod</label>
      <Form.Check
        className="check"
        type="switch"
        id="custom-switch"
        onChange={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
        checked={mode === "dark"}
      ></Form.Check>
    </>
  );
}

export default SwitchExample;
