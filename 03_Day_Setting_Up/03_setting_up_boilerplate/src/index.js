// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document
import asabenehImage from "./images/asabeneh.jpg";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import reactLogo from "./images/react_logo.png";
const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px",
};
const greyBackground = {
  ...boxStyle,
  background: "#ddd",
};
const blueground = {
  textAlign: "center",
  background: "blue",
  color: "#fff",
};
const renderImages = (
  <div style={greyBackground}>
    <img src={htmlLogo} style={{ width: "180px" }} />
    <img src={cssLogo} style={{ width: "180px" }} />
    <img src={reactLogo} style={{ width: "180px" }} />
  </div>
);
const formSubscription = (
  <div style={blueground}>
    <h1>Subscribe</h1>
    <p>Sign Up with your email address to recive news and updates</p>
    <div>
      <input
        type="text"
        name="firstname"
        placeholder ="First name"
        style={{ height: "30px", margin: "10px" }}
      />
      <input
        type="text"
        name="lastname"
        placeholder ="Last name"
        style={{ height: "30px", margin: "10px" }}
      />
      <input
        type="text"
        name="email"
        placeholder ="Email"
        style={{ height: "30px", margin: "10px" }}
      />
    </div>
    <button
      style={{
        height: "30px",
        width: "120px",
        background: "orange",
        margin: "10px",
      }}
    >
      Subscribe
    </button>
  </div>
);

const skillSet = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Angular",
  "C#",
  "Node",
  "Azure",
  "Github",
  "Phython",
  "AI",
  "Data Science",
];

const cardSection = (
  <div>
    <img src={asabenehImage} style={{ width: "180px", borderRadius: "50%" }} />
    <h2>Abhisk</h2>
    <small>Senior Developer</small>
    <h2>Skills</h2>
    <div style={{ padding: "20px" }}>
      {skillSet.map((item) => {
       return( <span
          style={{
            padding: "10px",
            background: "pink",
            color: "#fff",
            margin: "10px",
          }}
        >
          {item}
        </span>)
      })}
    </div>
    <span>Joined  on 29-October-2020 </span>
  </div>
);
// JSX element, app
const app = (
  <div className="app">
    {renderImages}
    <br></br>
    {formSubscription}
    <br></br>
    {cardSection}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
