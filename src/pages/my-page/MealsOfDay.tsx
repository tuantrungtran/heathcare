import React, { useState, useEffect } from "react";
import "./styles.css";
import MealOfDay from "./MealOfDay";
import { MealsOfDay as MealsOfDayData } from "../../data/MealsOfDay";

export interface MealOfDayObj {
  id: number;
  img: string;
  type: string;
}

const MealsOfDay = () => {
  const [columnsData, setColumnsData] = useState<MealOfDayObj[]>([]);

  useEffect(() => {
    setColumnsData([...MealsOfDayData]);
  }, []);

  return (
    <div className="meals-of-day">
      {columnsData.map((meal) => (
        <MealOfDay key={`meal-${meal.id}`} {...meal} />
      ))}
    </div>
  );
};

export default MealsOfDay;
