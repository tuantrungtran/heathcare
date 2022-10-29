import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Diaries } from "../../data/Diary";

export interface DiaryObj {
  id: number;
  dateTime: Date;
  content: string;
}

const Diary: React.FC<DiaryObj> = ({ dateTime, content }) => {
  return (
    <div className="diary-card">
      <p>{moment(dateTime).format("YYYY.MM.DD")}</p>
      <p className="diary-time">{moment(dateTime).format("HH:mm")}</p>
      <p className="diary-content">{content}</p>
    </div>
  );
};

export default function MyDiary() {
  const [diaries, setDiaries] = useState<DiaryObj[]>([]);

  useEffect(() => setDiaries(Diaries.slice(0, 8)), []);

  const loadMore = () => {
    const newDiaries = Diaries.slice(diaries.length, diaries.length + 8);
    setDiaries([...diaries, ...newDiaries]);
  };

  return (
    <>
      <label className="title-diary-section">MY DIARY</label>
      <div className="d-flex align-items-center flex-wrap">
        {diaries.map((diary) => (
          <Diary key={`diary-${diary.id}`} {...diary} />
        ))}
      </div>
      {diaries.length !== Diaries.length && (
        <div className="d-flex align-items-center justify-content-center">
          <Button onClick={loadMore} className="btn-loadmore">
            コラムをもっと見る
          </Button>
        </div>
      )}
    </>
  );
}
