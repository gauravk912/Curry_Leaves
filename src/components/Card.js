import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart= () =>{
    console.log("test");
  }

  return (
    <div>
      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img
          src={props.ImgSrc}
          className="card-img-top"
          alt="..."
          style={{ height: "180px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>

          <div className="container w-100 p-0" style={{ height: "40px" }}>
            <select
              className="m-2 h-100 w-20 bg-success text-black rounded"
              style={{ select: "#FF0000" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="card-text m-2 w-50 h-100 bg-success rounded">
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {" "}
                    {data}{" "}
                  </option>
                );
              })}
              <div className="d-inline fs-5">Total Price</div>
            </select>
          </div>
          <hr></hr>
          <button
            className={`btn btn-success justify-center ms-2`}
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
