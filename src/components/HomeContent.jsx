import React from "react";
import homeImage from "/hero.webp";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {

  const Navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-base-100 text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">AirdropFinder</h1>
          <p className="mb-5">
            All the Product in our shop, from commons to unique items that are
            no longer available on the average shop. As a bonus, you will get
            Discount for shipping around the world.
          </p>
          <button
            className="btn btn-active"
            onClick={() => Navigate("/product")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
