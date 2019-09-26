import React from 'react';
import './App.css';
import Header from "./Header";
import Promo from "./Promo";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Promo image="img/slider_pic.jpg"/>
        <Footer/>
    </div>
  );
}

export default App;
