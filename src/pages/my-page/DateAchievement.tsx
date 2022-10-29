import d01 from "../../images/d01.jpg";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from "moment";
import "./styles.css";

export interface DateAchievementType {
  value: number;
  date: Date;
}

const DateAchievement: React.FC<DateAchievementType> = ({ date, value }) => {
  return (
    <div className="date-achievement">
      <img src={d01} alt="" />{" "}
      <div className="progressbar">
        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={1}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            textSize: "2.5rem"
          })}>
          <div>
            <span className="textProgess text-date">
              {moment(date).format("MM/DD")}
            </span>
            <span className="textProgess text-value">{value}%</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default DateAchievement;
