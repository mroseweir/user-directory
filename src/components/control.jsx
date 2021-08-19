import React from "react";

function Buttons(props) {
  return (
    <div className="btnContainer">
      <button className="indBtn" onClick={props.prevSlide}>
        &#8592; Previous
      </button>
      <button className="midBtn">Edit</button>
      <button className="midBtn" onClick={props.cardDelete}>
        Delete
      </button>
      <button className="midBtn">New</button>
      <button className="indBtn" onClick={props.nextSlide}>
        Next &#8594;
      </button>
    </div>
  );
}

export default Buttons;
