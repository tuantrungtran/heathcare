import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { RecommendTypes } from "../../data/RecommendTypes";
import { Columns } from "../../data/Columns";
import RecommendCard from "./RecommendCard";
import ColumnCard, { Column as ColumnObj } from "./ColumnCard";
import arrowTop from "../../images/arrow-top.svg";
import "./styles.css";

export default function Column() {
  const [columnsData, setColumnsData] = useState<ColumnObj[]>([]);

  useEffect(() => setColumnsData(Columns.slice(0, 8)), []);

  const loadMore = () => {
    const newColumns = Columns.slice(
      columnsData.length,
      columnsData.length + 8
    );
    setColumnsData([...columnsData, ...newColumns]);
  };

  return (
    <Container className="column-page container-page">
      <div className="d-flex align-items-center justify-content-between">
        {RecommendTypes.map((item): any => (
          <RecommendCard key={`recommned-card-${item.id}`} {...item} />
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between flex-wrap card-list">
        {columnsData.map((col): any => (
          <ColumnCard key={`col-card-${col.id}`} {...col} />
        ))}
      </div>
      {columnsData.length !== Columns.length && (
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
  );
}
