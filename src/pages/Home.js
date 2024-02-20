import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from '../components/Carousal';

export default function () {

  // const [foodCat,setFoodCat] = useState([]);
  // const [foodItem, setFoodItem] = useState([]);

  // const loadData = async()=>{
  //   let response   = await fetch('ttp://localhost:3000/api/foodData')
  // }






  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Carousal/></div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
