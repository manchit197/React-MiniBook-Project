import React from "react";
import Book from "./Book";
import books from "../books";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book {...book} key={book.id}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod est velit incidunt dolor magnam,
              cupiditate quaerat doloremque harum doloribus fuga voluptates eligendi cum ipsum enim! Accusantium
              doloremque commodi quae?
            </p>
          </Book>
        );
      })}
    </section>
  );
};

export default BookList;
