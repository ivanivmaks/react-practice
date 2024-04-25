import "./App.css";
// import Product from "./Product.jsx";
import BookList from "./Mail.jsx";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
];

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks}/>
    </>
  );
}
