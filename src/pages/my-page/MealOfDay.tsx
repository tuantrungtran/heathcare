import "./styles.css";
import { MealOfDayObj } from "./MealsOfDay";

const MealOfDay: React.FC<MealOfDayObj> = ({ img, type }) => {
  return (
    <div className="hexagon">
      <img src={img} alt="" />
      <p>{type}</p>
    </div>
  );
};

export default MealOfDay;
