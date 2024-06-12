import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Nav() {
  const [activate, setActivate] = useState(2)
  const nav = [
    {
      id: 1,
      name: "Collection",
    },
    {
      id: 2,
      name: "Men",
    },
    {
      id: 3,
      name: "Women",
    },
    {
      id: 4,
      name: "About",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];

  const handleActivate = (id) => {
    console.log("clicked");
  }

  return (
    <div
      className=" d-flex justify-content-between align-items-center"
      style={{ minHeight: "70px", borderBottom: "1px solid black" }}
    >
      <div className=" d-flex" style={{ gap: "80px" }}>
        <div>
          <img src="/sneakers.png" alt="logo" />
        </div>

        <ul
          className=" list-unstyled d-flex gap-3 align-items-center"
          style={{ position: "relative", top: "4px" }}
        >
          {nav.map((navitem) => {
            return (
              <li className=" position-relative text-center" key={navitem.id}>
                <span onClick={() => setActivate(navitem.id)} className="navlink">{navitem.name}</span>
                { navitem.id == activate && <span className="line"></span>}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className=" d-flex align-items-center gap-5 px-3 justify-content-evenly"
        style={{ minWidth: "100px" }}
      >
        <FiShoppingCart className=" fs-5" />

        <div>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            style={{ width: "40px" }}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}
