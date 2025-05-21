// pages/home.tsx
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import BookCard from "@/components/bookCard";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  const filterBooks = (books, filters) => {
    const { category, pages, rate } = filters;

    return books.filter((book) => {
      const matchCategory = category ? book.category === category : true;

      const pageCount = book.pages;
      let matchPages = true;
      if (pages) {
        switch (pages) {
          case "less than 100":
            matchPages = pageCount < 100;
            break;
          case "100 - 200":
            matchPages = pageCount >= 100 && pageCount <= 200;
            break;
          case "200 - 300":
            matchPages = pageCount > 200 && pageCount <= 300;
            break;
          case "300 - 400":
            matchPages = pageCount > 300 && pageCount <= 400;
            break;
          case "more than 400":
            matchPages = pageCount > 400;
            break;
        }
      }

      const matchRate = rate ? book.rate === rate : true;

      return matchCategory && matchPages && matchRate;
    });
  };

  const handleFilter = (filters) => {
    const result = filterBooks(books, filters);
    setFilteredBooks(result);
  };

  return (
    <div className="bg-[#FAF3E0] min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar onSubmit={handleFilter} />
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {filteredBooks.map((book) => (
            <BookCard
              key={book._id}
              id={book._id}
              title={book.title}
              author={book.author}
              image={book.coverUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
