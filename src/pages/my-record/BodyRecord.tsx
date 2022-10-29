import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from "chart.js";

import { Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { getRandomNumber } from "../../utils/functions";
import { DAYS, WEEKS, MONTHS, YEARS } from "../../utils/contants";
import moment from "moment";
import {
  BodyRecordByDays,
  BodyRecordByWeeks,
  BodyRecordByMonths,
  BodyRecordByYears
} from "../../data/Record";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
      gridLines: {
        display: false
      }
    },
    y: {
      display: false
    }
  }
};

export default function BodyRecord() {
  const [filterBy, setFilterBy] = useState(DAYS);
  const [data, setData] = useState({
    labels: BodyRecordByDays,
    datasets: [
      {
        label: "",
        data: BodyRecordByDays.map(() => getRandomNumber(1, 100)),
        borderColor: "#FFCC21"
      },
      {
        label: "",
        data: BodyRecordByDays.map(() => getRandomNumber(1, 100)),
        borderColor: "#8FE9D0"
      }
    ]
  });

  const setDataChart = (data: any[]) => {
    setData({
      labels: data,
      datasets: [
        {
          label: "",
          data: data.map(() => getRandomNumber(1, 100)),
          borderColor: "#FFCC21"
        },
        {
          label: "",
          data: data.map(() => getRandomNumber(1, 100)),
          borderColor: "#8FE9D0"
        }
      ]
    });
  };

  useEffect(() => {
    if (filterBy === DAYS) {
      setDataChart(BodyRecordByDays);
    } else if (filterBy === WEEKS) {
      setDataChart(BodyRecordByWeeks);
    } else if (filterBy === MONTHS) {
      setDataChart(BodyRecordByMonths);
    } else setDataChart(BodyRecordByYears);
  }, [filterBy]);

  return (
    <div className="body-record-container">
      <div className="d-flex align-items-center">
        <label className="section-title">
          BODY
          <br />
          RECORD
        </label>
        <label className="section-date">
          {moment(new Date()).format("YYYY.MM.DD")}
        </label>
      </div>
      <div>
        <Line
          options={{ ...options, maintainAspectRatio: false }}
          data={data}
          width={"100%"}
          height={"304rem"}
        />
      </div>
      <div className="buttons-filter">
        <Button
          className={filterBy === DAYS ? "active" : ""}
          onClick={() => {
            setFilterBy(DAYS);
          }}>
          日
        </Button>
        <Button
          className={filterBy === WEEKS ? "active" : ""}
          onClick={() => {
            setFilterBy(WEEKS);
          }}>
          週
        </Button>
        <Button
          className={filterBy === MONTHS ? "active" : ""}
          onClick={() => {
            setFilterBy(MONTHS);
          }}>
          月
        </Button>
        <Button
          className={filterBy === YEARS ? "active" : ""}
          onClick={() => {
            setFilterBy(YEARS);
          }}>
          年
        </Button>
      </div>
    </div>
  );
}
