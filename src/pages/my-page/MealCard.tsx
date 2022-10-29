import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

import "./styles.css";

export interface Meal {
  id: number;
  img: string;
  type: string;
  date: Date;
}

const MealCard: React.FC<Meal> = ({ type, img, date }) => {
  return (
    <Card className="meal-card">
      <div className="position-relative">
        <Card.Img variant="top" src={img} />
        <div className="badge-time">{`${moment(date).format(
          "MM.DD"
        )}.${type}`}</div>
      </div>
    </Card>
  );
};

export default MealCard;
