import { logDOM } from "@testing-library/react";
import React from "react";

const Book = ({ title, img, author, children }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt={title} />
      <h1 onClick={clickHandler}>{title}</h1>
      <h4>{author}</h4>
      {children}
      <button className="button" type="button" onClick={clickHandler}>
        Lorem ipsum
      </button>

      <button className="button" type="button" onClick={clickHandler}>
        Lorem ipsum
      </button>
    </article>
  );
};

export default Book;
