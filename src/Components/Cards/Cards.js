import React from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const mydata = useSelector((state) => state.Reducer);
  console.log("mydat", mydata);

  return (
    <React.Fragment>
      <div className="card-main">
        <div class="card">
          <img src="" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
