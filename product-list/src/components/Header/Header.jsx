import React from "react";
import "./Header.scss";
import { categories } from "../../helper/data";

const Header = () => {
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="buttons">
        {categories.map((category) => {
          return <button>{category.toUpperCase()}</button>;
        })}
      </div>
    </div>
  );
};

export default Header;
