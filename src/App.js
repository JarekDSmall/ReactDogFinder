import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import whiskeyImg from './whiskey.jpg';
import dukeImg from './duke.jpg';
import perryImg from './perry.jpg';
import tubbyImg from './tubby.jpg';


function App(props) {
  const { dogs } = props;

  return (
    <Router>
      <div>
        <Nav dogs={dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </Router>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskeyImg,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: dukeImg,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perryImg,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubbyImg,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};


export default App;
