import React from "react";

export interface RecordObj {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const ButtonCard: React.FC<any> = ({ img, title, desc, scrollTo }) => {
  return (
    <div
      onClick={() => scrollTo.current.scrollIntoView()}
      className="record-type-button">
      <div className="wrapper-img">
        <img src={img} alt="" />
      </div>
      <div className="wrapper-text w-100">
        <p>{title}</p>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default ButtonCard;
