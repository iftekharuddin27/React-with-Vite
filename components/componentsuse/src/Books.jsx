const books = [
    { title: "The Great Gatsby", price: "$10.99", author: "F. Scott Fitzgerald" },
    { title: "Biology", price: "$1.99", author: "A" },
    { title: "Physics", price: "$2.99", author: "B" },
    { title: "Chemistry", price: "$3.99", author: "C" }
]

export { books };

function Book({ title, price, author }) {
    return (
        <li>
            {title} — {price} — {author}
        </li>
    )
}

export default function Books() {
    return (
        <div>
            <h3>This is Book storehouse</h3>
            <p>books stored:</p>
            <ul>
                {books.map(book => (
                    <Book key={book.title} {...book} />
                ))}
            </ul>
        </div>
    )
}