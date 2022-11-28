import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Detail2.css"

export default function DetailSearch() {

  const [data, setData] = useState();
  const { color } = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/marifrazmi/SayangAnakdb/toys?color=${color}`
    )
      .then((res) => res.json())
      .then((cats) => {
        setData(cats[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [color]);
  console.log(data);

  return (
      <div className="distance">
        {data === undefined ? (<div className="loading-state">Loading...</div>)
         : (
          <div class="detail">
            <div class="main_content">
            <img className="img" src={data.image1} alt="detail-img" />
            <img className="img" src={data.image2} alt="detail-img" />
            </div>
            <div class="main_detail">
              <p className="infoname">{data.name}</p>
              <hr></hr>
              <br></br>
              <span class="pricy"> {data.price}</span>
              <br></br>
              <span class="diskon"> {data.diskon}</span>
              <span class="lprice"> {data.lprice}</span>
              <br></br>
              <br></br>
              <p><span class="title">Brand</span>{data.brand}</p>
              <p><span class="title">Theme</span>{data.theme}</p>           
              <p><span class="title">Material</span>{data.material}</p>
              <p><span class="title">Color</span>{data.color}</p>
              <p><span class="title">Type</span>{data.type}</p>
              <hr></hr>
              <br></br>
              <span class="bold">About this item</span> 
              <p> {data.desc}</p>
            </div>
          </div>
        )}
      </div>
    );
}