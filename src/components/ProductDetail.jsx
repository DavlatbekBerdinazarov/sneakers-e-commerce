import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(0)

  return (
    <div>
      <div>
        <p className="fw-bold" style={{ color: "#ff7e1b" }}>
          Sneaker Company
        </p>

        <h1 className="fw-bold" style={{ fontSize: "44px" }}>
          Fall Limited Edition Sneakers
        </h1>

        <p className=" my-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="my-3">
          <div className=" d-flex gap-2 align-items-center">
            <h1 className="fw-bold display-5">$125.00</h1>{" "}
            <span
              className="p-1 rounded fw-bolder"
              style={{
                background: "#FFEEE2",
                color: "#ff7e1b",
                height: "30px",
              }}
            >
              50%
            </span>
          </div>

          <h3 className=" fw-bold text-secondary text-decoration-line-through">
            $250.00
          </h3>
        </div>

        <div className=" d-flex gap-3 align-items-center">
          <div style={{ background:'#F6F8FD', height: '70px', width: '166px' }} class="btn-group-lg  d-flex align-items-center justify-content-center" role="group" aria-label="Basic example">
            <button onClick={() => setQuantity(prev => prev - 1)} type="button" class="btn fw-bold fs-3" style={{ color: '#FF7E1B'}}>
              -
            </button>
            <button type="button" class="btn fw-bold fs-4">
              { quantity }
            </button>
            <button onClick={() => setQuantity(prev => prev + 1)}  type="button" class="btn fw-bold fs-3" style={{ color: '#FF7E1B'}}>
              +
            </button>
          </div>

          <button className="addtocart border-0 text-white fs-4 rounded btn" style={{ background:'#FF7E1B', height: '70px', width: '266px' }}>
            <HiShoppingCart/> <span className="fs-5 fw-bolder ">Add to cart</span>
          </button> 
        </div>
      </div>
    </div>
  );
}
