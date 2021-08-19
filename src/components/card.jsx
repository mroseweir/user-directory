import React, { useState } from "react";
import Buttons from "./control";
// import { Buttons, prevSlide, nextSlide } from "./control";

import data from "../data";

export default function Card(props) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    if (slide !== data.length - 1) {
      setSlide(slide + 1);
    }
  }

  function prevSlide() {
    if (slide !== 0) {
      setSlide(slide - 1);
    }
  }

  function cardDelete() {
    data.splice(slide, 1);
    if (slide >= 0) {
      setSlide(slide + 1);
    }
    if (slide - 1 === data.length) {
      setSlide(slide - 1);
    }
  }

  return (
    <div className="card">
      <div className="nameContainer">
        <h1 className="name">
          {data[slide].name.first} {data[slide].name.last}
        </h1>
        <h1 className="slideCounter">
          {data[slide].id}/{data.length}
        </h1>
      </div>
      <div className="infoContainer">
        <h2 className="infoTitle">
          From: {data[slide].city} {data[slide].country}
        </h2>
        <h2>Job Title: {data[slide].title}</h2>
        <h2>Exployer: {data[slide].employer}</h2>
      </div>
      <Buttons
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        cardDelete={cardDelete}
      />
    </div>
  );
}
