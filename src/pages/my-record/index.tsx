import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./styles.css";
import ButtonCard from "./ButtonCard";
import BodyRecord from "./BodyRecord";
import MyExercise from "./MyExercise";
import MyDiary from "./MyDiary";
import { RecordTypes } from "../../data/Record";
import { RECORD, EXERCISE } from "../../utils/contants";
import arrowTop from "../../images/arrow-top.svg";

export default function MyPage() {
  const [recordTypes, setRecordTypes] = useState<any[]>([]);
  const recordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const exerciseRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const diaryRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => setRecordTypes(RecordTypes), []);

  return (
    <Container className="container-page">
      <div className="d-flex align-items-center justify-content-between flex-wrap section">
        {recordTypes.map((record) => {
          const { target } = record;
          let scrollTo = diaryRef;
          switch (target) {
            case RECORD:
              scrollTo = recordRef;
              break;
            case EXERCISE:
              scrollTo = exerciseRef;
              break;
            default:
              break;
          }
          return (
            <ButtonCard
              key={`record-${record.id}`}
              {...record}
              scrollTo={scrollTo}
            />
          );
        })}
      </div>
      <div ref={recordRef} className="section">
        <BodyRecord />
      </div>
      <div ref={exerciseRef} className="section">
        <MyExercise />
      </div>
      <div ref={diaryRef} className="section">
        <MyDiary />
      </div>
      <span onClick={() => window.scrollTo(0, 0)} className="goToTop">
        <img src={arrowTop} alt="" />
      </span>
    </Container>
  );
}
