import React from "react";
import Food from "../components/Food";
import foods from "../foodsdata";

export default function Homepage() {
  return (
    <div className="container">
      <div className="row">
        {foods.map((food) => {
          return (
            <div className="col-lg-4">
              <div>
                <Food food={food} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
