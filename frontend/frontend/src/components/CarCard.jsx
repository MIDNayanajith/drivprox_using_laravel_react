import React from "react";

const CarCard = () => {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src="/images/dream-car.png" alt="Mercedes-Benz W115" />
      </div>
      <div className="car-info">
        <h3>Mercedes-Benz W115, 1969</h3>
        <div className="car-details">
          <span className="mileage">300 kms</span>
          <span className="fuel">Auto</span>
          <span className="type">Electric</span>
        </div>
        <div className="car-price">
          <span className="price">LKR 4,900,000</span>
          <span className="monthly">300 kms Auto Electric</span>
        </div>
        <span className="posted-date">2023-05-27</span>
      </div>
    </div>
  );
};

export default CarCard;
