import React from "react";
import { useNavigate } from "react-router-dom";

const MostPopular = ({ blogs }) => {
  const navigate = useNavigate();
  let options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div>
      <div className="blog-heading text-start pt-3 mb-4">Популярное</div>
      {blogs?.map((item) => (
        <div
          className="row pb-3"
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <div className="col-5 align-self-center">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="most-popular-img"
            />
          </div>
          <div className="col-7 padding">
            <div className="text-start most-popular-font">{item.title}</div>
            <div className="text-start most-popular-font-meta">
              {item.timestamp.toDate().toLocaleString("ru-RU", options)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
