import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

import DateAchievement from "./DateAchievement";
import BodyWeight from "./BodyWeight";
import MealsOfDay from "./MealsOfDay";
import MealCard, { Meal as MealObj } from "./MealCard";
import { DateAchivement } from "../../data/DateAchievement";
import { Meals } from "../../data/MealsOfDay";
import arrowTop from "../../images/arrow-top.svg";

export default function MyPage() {
  const [mealsData, setMealsData] = useState<MealObj[]>([]);

  useEffect(() => setMealsData(Meals.slice(0, 8)), []);

  const loadMore = () => {
    const newMeals = Meals.slice(mealsData.length, mealsData.length + 8);
    setMealsData([...mealsData, ...newMeals]);
  };

  return (
    <div>
      <div className="my-page-top d-flex">
        <DateAchievement {...DateAchivement} />
        <BodyWeight />
      </div>
      <Container className="container-page">
        <div>
          <MealsOfDay />
        </div>
        <div className="d-flex align-items-center justify-content-between flex-wrap card-list">
          {mealsData.map((meal): any => (
            <MealCard key={`meal-card-${meal.id}`} {...meal} />
          ))}
        </div>
        {mealsData.length !== Meals.length && (
          <div className="d-flex align-items-center justify-content-center">
            <Button onClick={loadMore} className="btn-loadmore">
              コラムをもっと見る
            </Button>
          </div>
        )}
        <span onClick={() => window.scrollTo(0, 0)} className="goToTop">
          <img src={arrowTop} alt="" />
        </span>
      </Container>
    </div>
  );
}
