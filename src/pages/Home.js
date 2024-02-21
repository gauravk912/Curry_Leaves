import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from '../components/Carousal';

export default function () {

  const [foodCat,setFoodCat] = useState([]);
  const [foodItems, setFoodItem] = useState([]);
  const [search, setSearch] = useState('')

  const loadData = async()=>{
    let response   = await fetch('http://localhost:4000/api/foodData',{
      method:"POST",
      header: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1])
    // console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Carousal/></div>
      <div className='container'> 
        {
          foodCat != []
            ? foodCat.map((data) => {
              return (
                console.log(data),
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems != [] ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) 
                    : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
