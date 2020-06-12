import React, { Component } from "react";
import "./App.css";
import Tanya from "./images/image-tanya.jpg";
import IconNext from "./images/icon-next.svg";
import IconPrevious from "./images/icon-prev.svg";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container flex col">
          <div className="card flex row" id="card-tanya">
            <div className="card__info flex col">
              <p className="card__desc" id="desc-tanya">
                “I’ve been interested in coding for a while but never taken the
                jump, until now. I couldn’t recommend this course enough. I’m
                now in the job of my dreams and so excited about the future.”
              </p>
              <p className="card__details flex row">
                <span className="card__details__name" id="name-tanya">
                  Tanya Sinclair
                </span>
                <span className="card__details__position" id="pos-tanya">
                  UX Engineer
                </span>
              </p>
            </div>
            <div className="card__imgs flex col">
              <div className="card__img">
                <img src={Tanya} id="img-tanya" alt="People/Tanya" />
              </div>
              <div className="card__btns flex">
                <button
                  className="card__btn card__btn--prev"
                  aria-label="previous button"
                >
                  <img src={IconPrevious} alt="" />
                </button>
                <button
                  className=" card__btn card__btn--next"
                  aria-label="next button"
                >
                  <img src={IconNext} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
