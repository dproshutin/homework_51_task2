import React from 'react';
import './App.css';
import Header from "./Header";
import Promo from "./Promo";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Promo image="uploads/img/slider_pic.jpg"/>
        <Team image="uploads/img/employee1_pic.jpg" name="Craig Garner" position="Ceo" />
        <Team image="uploads/img/employee2_pic.jpg" name="Bridge Roberts" position="Creative Genius" />
        <Team image="uploads/img/employee3_pic.jpg" name="Malade Garner" position="Chef de projet" />
        <Footer/>
    </div>
  );
}

export default App;
