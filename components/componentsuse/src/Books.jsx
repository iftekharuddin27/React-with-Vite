import React from "react";

const books = [
  { title: "The Great Gatsby", price: "$10.99", author: "F. Scott Fitzgerald" },
  { title: "Biology", price: "$1.99", author: "A" },
  { title: "Physics", price: "$2.99", author: "B" },
  { title: "Chemistry", price: "$3.99", author: "C" }
];

export { books };

function Book({ title, price, author, onBuy }) {
  function handleLocalClick() {
    alert(`Local handler clicked: ${title}`);
  }

  return (
    <li style={{ marginBottom: 8 }}>
      {title} — {price} — {author}
      {" "}
      <button
        onClick={() => alert(`Inline click: ${title}`)}
        style={{ marginLeft: 8 }}
      >
        Inline
      </button>

      <button onClick={handleLocalClick} style={{ marginLeft: 8 }}>
        Local Handler
      </button>

      <button onClick={onBuy.bind(null, title)} style={{ marginLeft: 8 }}>
        Parent (bind)
      </button>
    </li>
  );
}

export default function Books() {
  function handleBuyFromParent(title) {
    alert(`Parent handler received: ${title}`);
  }

  return (
    <div>
      <h3>This is Book storehouse</h3>
      <p>books stored:</p>
      <ul>
        {books.map((book) => (
          <Book key={book.title} {...book} onBuy={handleBuyFromParent} />
        ))}
      </ul>
    </div>
  );
}