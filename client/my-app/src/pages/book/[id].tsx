import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/components/header";

export default function BookDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => console.error("Error loading book", err));
    }
  }, [id]);

  if (!book) return <div className="p-10 text-white">Book not found</div>;

  return (
    <div className="bg-[#FAF3E0] min-h-screen">
      <Header showSearch={false} />

      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
        {/* وصف الكتاب */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">About this book</h2>
          <p className="bg-[#e0dcd6] p-4 rounded-lg whitespace-pre-wrap text-sm">
            {book.description}
          </p>
        </div>

        {/* صورة الكتاب */}
        <div className="flex justify-center items-start md:col-span-1">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-[220px] rounded-lg shadow"
          />
        </div>

        {/* بيانات الكاتب وأزرار التحميل */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-lg text-gray-700">By {book.author}</p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:opacity-90">
              Download
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:opacity-90">
              Read
            </button>
          </div>

          <button className="border border-black text-black px-4 py-2 rounded-full w-fit hover:bg-red-500 hover:text-white transition">
            Add to favorites
          </button>

          {/* ⭐ التقييم التفاعلي */}
          <div>
            <p className="mt-4 text-sm font-medium">Rating:</p>
            <div className="flex text-3xl cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={star <= rating ? "text-yellow-400" : "text-gray-400"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
