import React from "react";
import moment from "moment";
import { Exercises } from "../../data/Exercies";

export default function MyExercise() {
  return (
    <div className="my-exercise-container">
      <div className="d-flex align-items-center">
        <label className="section-title">
          BODY
          <br />
          EXERCISE
        </label>
        <label className="section-date">
          {moment(new Date()).format("YYYY.MM.DD")}
        </label>
      </div>
      <div className="list-exericise-container">
        <ul className="list-exercise">
          {Exercises.map((exercise) => {
            const { title, energy, duration } = exercise;
            return (
              <li key={`ex-${exercise.id}`}>
                <div>
                  <p>{title}</p>
                  <span>{energy}kcal</span>
                </div>
                <div>
                  <span>{duration} min</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
