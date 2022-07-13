import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Nevbar from "./nevbar";
import "./home.css";
import { useNavigate } from "react-router-dom";
import useImageExapnd from "./Imageexpamd";

// import { Link } from "react-router-dom";

export default function Home() {
  const [elementRef, ToggleButton] = useImageExapnd();
  let navigate = useNavigate();
  const singleName = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (singleName === null) {
      console.log("__DP");
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleName]);

  return (
    <div>
      {singleName !== null && (
        <>
          <Nevbar />
          <Container className="moder" ref={elementRef}>
            <h1 style={{ textAlign: "center" }}>
              Welcome to Site{" "}
              {singleName.name.charAt(0).toUpperCase() +
                singleName.name.slice(1)}{" "}
              {ToggleButton}
            </h1>
            <div>
              <img
                src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2019/04/2.-A-by-Nick-Matey.jpg"
                width="300"
                height="300"
                style={{
                  float: "right",
                  margin: "15px",
                  border: "1px solid #0f5a96",
                }}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <ul>
                <li className="space">
                  Try React React has been designed from the start for gradual
                  adoption, and you can use as little or as much React as you
                  need. Whether you want to get a taste of React, add some
                  interactivity to a simple HTML page or start a complex
                  React-powered app, the links in this section will help you get
                  started.
                </li>
                <li className="space">
                  Online Playgrounds If you’re interested in playing around with
                  React, you can use an online code playground. Try a Hello
                  World template on CodePen, CodeSandbox, or Stackblitz.
                </li>
                <li className="space">
                  If you prefer to use your own text editor, you can also
                  download this HTML file, edit it, and open it from the local
                  filesystem in your browser.
                </li>
                <li className="space">
                  It does a slow runtime code transformation, so we’d only
                  recommend using this for simple demos. Add React to a Website
                  You can add React to an HTML page in one minute. You can then
                  either gradually expand its presence, or keep it contained to
                  a few dynamic widgets. Create a New React App When starting a
                  React project, a simple HTML page with script tags might still
                  be the best option.
                </li>
                <li className="space">
                  It only takes a minute to set up! As your application grows,
                  you might want to consider a more integrated setup. There are
                  several JavaScript toolchains we recommend for larger
                  applications. Each of them can work with little to no
                  configuration and lets you take full advantage of the rich
                  React ecosystem. Learn how. Learn React People come to React
                  from different backgrounds and with different learning styles.
                  Whether you prefer a more theoretical or a practical approach,
                  we hope you’ll find this section helpful.
                </li>
                <li className="space">
                  If you prefer to learn by doing, start with our practical
                  tutorial. If you prefer to learn concepts step by step, start
                  with our guide to main concepts. Like any unfamiliar
                  technology, React does have a learning curve. With practice
                  and some patience, you will get the hang of it. First Examples
                  The React homepage contains a few small React examples with a
                  live editor. Even if you don’t know anything about React yet,
                  try changing their code and see how it affects the result.
                  React for Beginners If you feel that the React documentation
                  goes at a faster pace than you’re comfortable with, check out
                  this overview of React by Tania Rascia. It introduces the most
                  important React concepts in a detailed, beginner-friendly way.
                  Once you’re done, give the documentation another try! React
                  for Designers If you’re coming from a design background, these
                  resources are a great place to get started. JavaScript
                  Resources The React documentation assumes some familiarity
                  with programming in the JavaScript language. You don’t have to
                  be an expert, but it’s harder to learn both React and
                  JavaScript at the same time.
                </li>
                <li className="space">
                  We recommend going through this JavaScript overview to check
                  your knowledge level. It will take you between 30 minutes and
                  an hour but you will feel more confident learning React.
                </li>
                <h2 className="space">
                  <u>Road map for React js</u> :-
                </h2>
                <ul>
                  <li className="space">
                    for Reference of HTML tutorials :-
                    <a href="https://www.w3schools.com/html/default.asp">
                      https://www.w3schools.com/html/default.asp
                    </a>
                  </li>
                  <li className="space">
                    for Reference of CSS tutorials :-
                    <a href="https://www.w3schools.com/css/default.asp">
                      https://www.w3schools.com/css/default.asp
                    </a>
                  </li>
                  <li className="space">
                    for Reference of JavaScript tutorials :-
                    <a href="https://www.w3schools.com/js/default.asp">
                      https://www.w3schools.com/js/default.asp
                    </a>
                  </li>
                  <li className="space">
                    for Reference of ReactJs tutorials :-
                    <a href="https://www.w3schools.com/react/default.asp">
                      https://www.w3schools.com/react/default.asp
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </Container>
        </>
      )}
    </div>
  );
}
