import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import "./styles.css";

export interface Column {
  id: number;
  img: string;
  title: string;
  dateTime: Date;
  tags: Array<string>;
}

const ColumnCard: React.FC<Column> = ({ id, title, img, dateTime, tags }) => {
  return (
    <Card className="column-card">
      <div className="position-relative">
        <Card.Img variant="top" src={img} />
        <div className="badge-time">
          {moment(dateTime).format("YYYY.MM.DD HH:mm")}
        </div>
      </div>
      <Card.Body>
        <Card.Title className="column-card-title">{title}</Card.Title>
        <ul className="tag-list p-0">
          {tags.map((tag) => (
            <li key={`tags-col-${id}-${tag}`} className="tag-item">
              #{tag}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default ColumnCard;
