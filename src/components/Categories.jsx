import { nanoid } from "nanoid";
import React, { useState } from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((val, index) => (
          <li
            className={active === index ? "active" : ""}
            key={nanoid()}
            onClick={() => handleClick(index)}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
