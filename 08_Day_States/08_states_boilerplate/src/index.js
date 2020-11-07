// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      styles,
    } = this.props.data;

    return (
      <header style={styles}>
        <div style={styles}>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text="+1" onClick={addOne} style={buttonStyles} />
      <Button text="-1" onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
);

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
      styles,
    } = this.props;
    return (
      <main style={styles}>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { date, styles } = this.props;
    return (
      <footer style={styles}>
        <div className="footer-wrapper">
          <p>Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}
const CardCountry = ({ country }) => (
  <section>
    <span>{country.currency}</span>
    {/* <div>
      <img src={country.flag} width="100px" height="100px"/>
      <h5>{country.name}</h5>
  </div>

  <div>
    <b>Capital : </b> { country.capital}    
  </div>
  <div>
    <b>Language : </b> { country.language}    
  </div>
  <div>
    <b>Population : </b> { country.population}    
  </div>
  <div>
    <b>Currency : </b> { country.currency}    
  </div> */}
  </section>
);

const CountryList = [
  {
    name: "India",
    capital: "Delhi",
    language: "Hindi",
    population: "135.26 crores",
    currency: "Rs",
    flag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  },
  {
    name: "America",
    capital: "Califorinia",
    language: "English",
    currency: "Dollar",
    population: "32.82 crores ",
    flag:
      "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    language: "English",
    currency: "Dollar",
    population: "3.76 crores ",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png",
  },
  {
    name: "England",
    capital: "London",
    language: "English",
    currency: "Pond",
    population: "5.6 crores ",
    flag:
      "https://images-na.ssl-images-amazon.com/images/I/2102hNwuHyL._AC_.jpg",
  },
  {
    name: "Austrialia",
    capital: "Canberra",
    language: "English",
    currency: "Dollar",
    population: "2.5 crores ",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
  },
];
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Country extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    country: {},
  };
  intervalSet = setInterval(() => {
    const randomId = randomInteger(0, 4);
    const newArr = CountryList[randomId];
    console.log(newArr);
    this.setState({ country: newArr });
    // =>{
    //   let country = Object.assign({}, state.country); // creating copy of state variable jasper
    //   country = CountryList[randomId]
    //   // callback();
    //   return {country};
    // };
  }, 500);

  selectCountry = () => {
    clearInterval(this.intervalSet);
  };
  render() {
    return (
      <div style={{ margin:'30px auto'}}>
      <section style={{ width: '400px',height:'400px',boxShadow:'0 0 10px #ddd' , margin:'0 auto',textAlign:'center'}}>
        <div>
          <img src={this.state.country.flag} width="200px" height="200px" />
          <h5>{this.state.country.name}</h5>
        </div>
        <br/>
        <div>
          <b>Capital : </b> {this.state.country.capital}
        </div>
        <div>
          <b>Language : </b> {this.state.country.language}
        </div>
        <div>
          <b>Population : </b> {this.state.country.population}
        </div>
        <div>
          <b>Currency : </b> {this.state.country.currency}
        </div>
        
      </section>
      <div style={{textAlign:'center'}}><br></br>
      <Button text="Select Country" onClick={this.selectCountry} style={buttonStyles} />
      </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: "",
      color: "",
    },
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  changeBackground = () => {
    this.setState((prevState) => {
      let styles = Object.assign({}, prevState.styles); // creating copy of state variable jasper

      styles.backgroundColor =
        styles.backgroundColor === "#044d60" ? "" : "#044d60";
      styles.color = styles.color === "white" ? "" : "white"; // update the name property, assign a new value
      return { styles }; // return new object jasper object
    });
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
      styles: this.state.styles,
    };
    const techs = ["HTML", "CSS", "JavaScript"];
    const date = new Date();
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
          styles={this.state.styles}
        />
        <Footer date={new Date()} styles={this.state.styles} />
        <br></br>
        <div>
          <Header data={data} />
          <Country></Country>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
