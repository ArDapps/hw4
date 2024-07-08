//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/js/bootstrap"; // Example import path

import Navbar from "./Navbar.js";

import Posts from "./Employees.js";

function App() {
  const thename = "Mutaher";
  const theage = 45;

  return (
    <div className="App">
      <Navbar />
      <Posts />
      {/*    <Navbar />  
      <Home />
      <h1> {thename} </h1>
      <h3> {theage} </h3>
      <About />
    */}
    </div>
  );
}

export default App;
