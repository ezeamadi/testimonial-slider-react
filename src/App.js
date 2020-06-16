import React, { Component } from "react";
import "./App.css";
import IconNext from "./images/icon-next.svg";
import IconPrevious from "./images/icon-prev.svg";
import Characters from "./characters"

class App extends Component {
  render() {
    return (
      Characters.map(character => (
      <div key = {character.id}>
        <div className="container flex col">
          <div className="card flex row" id="card-tanya">
            <div className="card__info flex col">
              <p className="card__desc" id="desc-tanya">
               {character.testimony}
              </p>
               <p className="card__desc" id="desc-tanya"><strong><em>
                  Hobbies: </em></strong>{character.hobbies}
              </p>
              <p className="card__details flex row">
                <span className="card__details__name" id="name-tanya">
                  {character.name}
                </span>
                <span className="card__details__position" id="pos-tanya">
                  {character.position}
                </span>
               
              </p>
             
            </div>
             
            <div className="card__imgs flex col">
              <div className="card__img">
                <img src={character.image} id="img-tanya" alt="people/tanya" />
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
    )
    ))
  }
}

export default App;
