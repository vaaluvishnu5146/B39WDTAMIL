import React from "react";

export default function RestaurantsCard({
  data = {},
  handleClick = (e) => {},
}) {
  return (
    <div className="card">
      <div className="card-content">
        <img
          src={data.imageUrl}
          width={"80px"}
          height={"80px"}
          alt="restaurant-image"
        />
        <div className="content-details">
          <div className="details">
            <h2>{data.name || "Restaurant Name"}</h2>
            <h5>{data.place || "Place"}</h5>
          </div>
          <div className="endEnhancer">
            <button className="cta" onClick={handleClick}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
