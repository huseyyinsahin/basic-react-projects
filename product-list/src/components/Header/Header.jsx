import "./Header.scss";

const Header = ({ categories }) => {
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
