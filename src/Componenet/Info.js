import React from "react";
import { Accordion, Container, Image } from "react-bootstrap";
import Nevbar from "./nevbar";

export default function Info() {
  return (
    <>
      <Nevbar />
      <br />

      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>React JS</Accordion.Header>
            <Accordion.Body className="card">
              <div className="">
                <h3>React - The Missing Parts :-</h3>
                <ul>
                  <li>
                    Steven Wittens takes us on a trip to a parallel universe
                    where the React team made different decisions (with less
                    legacy constraints). What might this universe look like? For
                    starters:
                    <ul>
                      <p>
                        <Image
                          className="imgs"
                          src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
                        ></Image>
                      </p>
                      <li>No-hooks and Early Return</li>
                      <li>Component Morphing</li>
                      <li>useMemo vs useEffect + setState</li>
                      <li>and some wild Yeet-Reduce results</li>
                    </ul>
                  </li>
                  <li>
                    Remix is now open source
                    <ul>
                      <li>
                        Remix is a seamless server and browser runtime that
                        provides snappy page loads and instant transitions by
                        leveraging distributed systems and native browser
                        features instead of clunky static builds. Built on the
                        Web Fetch API (instead of Node) it can run anywhere. It
                        already runs natively on Cloudflare Workers, and of
                        course supports serverless and traditional Node.js
                        environments, so you can come as you are.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>JavaScript</Accordion.Header>
            <Accordion.Body className="card">
              <ul>
                <p>
                  <Image
                    className="imgs"
                    src="https://www.w3docs.com/uploads/media/default/0001/05/4482fe09d95a0be765154b9cefff5e07f7fc32ff.png"
                  ></Image>
                </p>
                <li>
                  JavaScript (JS) is a lightweight, interpreted, or just-in-time
                  compiled programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat.
                </li>
                <li>
                  JavaScript is a prototype-based, multi-paradigm,
                  single-threaded, dynamic language, supporting object-oriented,
                  imperative, and declarative (e.g. functional programming)
                  styles. Read more about JavaScript. This section is dedicated
                  to the JavaScript language itself, and not the parts that are
                  specific to Web pages or other host environments. For
                  information about APIs that are specific to Web pages, please
                  see Web APIs and DOM. The standards for JavaScript are the
                  ECMAScript Language Specification (ECMA-262) and the
                  ECMAScript Internationalization API specification (ECMA-402).{" "}
                </li>
                <li>
                  The JavaScript documentation throughout MDN is based on the
                  latest draft versions of ECMA-262 and ECMA-402. And in cases
                  where some proposals for new ECMAScript features have already
                  been implemented in browsers, documentation and examples in
                  MDN articles may use some of those new features.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>HTML</Accordion.Header>
            <Accordion.Body className="card">
              <ul>
                <h3>HTML History and Development :-</h3>
                <p>
                  <Image
                    className="imgs"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSI2uT24nyBpYVrier0n9_KxIHL6NGdrEfQ&usqp=CAU"
                  ></Image>
                </p>
                <li>
                  HTML has been around for a long time. Its roots go back to at
                  least 1980, with Tim Berners-Lee‘s project ENQUIRE. And
                  actually, the concept of hypertext goes back even further than
                  that. The concept first appeared in the early 1940s, and was
                  named and demonstrated in the 1960s.
                </li>
                <li>
                  The language has evolved over all this time because web
                  development has changed. We do things with web pages and HTML
                  today that were never dreamt of by the early developers and
                  implementers of the language. A web page is no longer just a
                  document; it is likely to be a full-scale web application. And
                  even when it is “just a document,” we want search engines and
                  other tools to understand the content of the website. We
                  aren’t just creating pages for human readers anymore, but for
                  artificially-intelligent systems that collect and manipulate
                  information.
                </li>
              </ul>
              <ul>
                <h3>What is HTML5?</h3>
                <li>
                  HTML5 is the latest specification of the HTML language, and
                  represented a major break with previous markup practices. The
                  purpose of the profound changes to the language was to
                  standardize the many new ways in which developers were using
                  it, as well as to encourage a single set of best practices
                  with regards to web development.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>CSS</Accordion.Header>
            <Accordion.Body className="card">
              <ul>
                <h3>New CSS Features In 2022:-</h3>
                <p>
                  <Image
                    className="imgs"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-eGdJ5tVqO77io5XwkCVM2lVrWrSSoQVcA&usqp=CAU"
                  ></Image>
                </p>
                <li>
                  2022 is shaping up to be a pretty great year for CSS, with a
                  plethora of new features on the horizon. Some are already
                  starting to land in browsers, others are likely to gain
                  widespread browser support in 2022, while for one or two the
                  process may be a little longer. In this article we’ll take a
                  look at a few of them.
                </li>
                <li>
                  Container queries enable us to style an element depending on
                  the size of its parent — a crucial difference from media
                  queries, which only query the viewport. This has long been a
                  problem for responsive design, as often we want a component to
                  adapt to its context.
                </li>
              </ul>
              <ul>
                <h3>CAN I USE THEM?</h3>
                <li>
                  Chrome claims to support container queries behind a flag, but
                  the working implementation doesn’t appear to be consistent
                  with the current spec. There’s a polyfill, but it doesn’t work
                  with the latest syntax. So the short answer is “no”, I would
                  definitely urge you to wait a while before using them in
                  production. But there’s a lot of momentum behind container
                  queries, so I would expect more general support soon.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
