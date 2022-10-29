import React from "react";
import "./styles.css";

interface Props {
  title: string;
  desc: string;
}

const RecommendCard: React.FC<Props> = ({ title, desc }) => {
  return (
    <div className="recommend-card">
      <p className="title">{title}</p>
      <hr />
      <p className="desc">{desc}</p>
    </div>
  );
};

export default RecommendCard;
