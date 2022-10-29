import MyRecommend1 from "../images/MyRecommend-1.jpg";
import MyRecommend2 from "../images/MyRecommend-2.jpg";
import MyRecommend3 from "../images/MyRecommend-3.jpg";
import { RECORD, EXERCISE, DIARY } from "../utils/contants";

export const RecordTypes = [
  {
    id: 1,
    img: MyRecommend1,
    title: "BODY RECORD",
    desc: "自分のカラダの記録",
    target: RECORD
  },
  {
    id: 2,
    img: MyRecommend2,
    title: "MY EXERCISE",
    desc: "自分の運動の記録",
    target: EXERCISE
  },
  {
    id: 3,
    img: MyRecommend3,
    title: "MY DIARY",
    desc: "自分の日記",
    target: DIARY
  }
];

export const BodyRecordByDays = [
  "1日",
  "2日",
  "3日",
  "4日",
  "5日",
  "6日",
  "7日",
  "8日",
  "9日",
  "10日",
  "11日",
  "12日",
  "13日",
  "14日",
  "15日",
  "16日",
  "17日",
  "18日",
  "19日",
  "20日"
];
export const BodyRecordByWeeks = [
  "1週",
  "2週",
  "3週",
  "4週",
  "5週",
  "6週",
  "7週",
  "8週",
  "9週",
  "10週"
];
export const BodyRecordByMonths = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月"
];
export const BodyRecordByYears = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022"
];
