// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const bgColor = hexaColor();
  const styles = {
    height: "100px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "75%",
    border: "2px solid black",
  };
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
};

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={asabenehImage} alt="asabeneh image" />
    <h2>Asabeneh Yetayeh</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};
const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: 5,
};

const Button = () => <button style={buttonStyles}> action </button>;

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);
const blueBackground = {
  textAlign: "center",
  background: "blue",
  color: "#fff",
};
const Frontend = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      background: "#ddd",
    }}
  >
    <img src={htmlLogo} style={{ width: "200px", margin: "10px" }} />
    <img src={cssLogo} style={{ width: "200px", margin: "10px" }} />
    <img src={jsLogo} style={{ width: "200px", margin: "10px" }} />
    <img src={reactLogo} style={{ width: "200px", margin: "10px" }} />
  </div>
);
const InputComponent = (props) => (
  <input
    type="text"
    name={props.nameText}
    placeholder={props.placeholderText}
    style={{ height: "30px", margin: "10px" }}
  />
);
const Subscription = () => (
  <div style={blueBackground}>
    <h1>Subscribe</h1>
    <p>Sign Up with your email address to recive news and updates</p>
    <div>
      <InputComponent nameText="firstname" placeholderText="First Name" />
      <InputComponent nameText="lastname" placeholderText="Last Name" />
      <InputComponent nameText="email" placeholderText="Email" />
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

const HexaTemplate = () => (
  <div>
    <div style={{ margin: "1px", height: "50px", background: hexaColor() }}>
      {hexaColor()}
    </div>
    <div style={{ margin: "1px", height: "50px", background: hexaColor() }}>
      {hexaColor()}
    </div>
    <div style={{ margin: "1px", height: "50px", background: hexaColor() }}>
      {hexaColor()}
    </div>
    <div style={{ margin: "1px", height: "50px", background: hexaColor() }}>
      {hexaColor()}
    </div>
    <div style={{ margin: "1px", height: "50px", background: hexaColor() }}>
      {hexaColor()}
    </div>
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
const CardSection = () => (
  <div>
    <img src={asabenehImage} style={{ width: "180px", borderRadius: "50%" }} />
    <h2>Abhisk</h2>
    <small>Senior Developer</small>
    <h2>Skills</h2>
    <div style={{ padding: "20px" }}>
      {skillSet.map((item) => {
        return (
          <span
            style={{
              padding: "10px",
              background: "pink",
              color: "#fff",
              margin: "10px",
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
    <span>Joined on 29-October-2020 </span>
  </div>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Frontend />
    <Subscription />
    <HexaTemplate />
    <CardSection />
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
