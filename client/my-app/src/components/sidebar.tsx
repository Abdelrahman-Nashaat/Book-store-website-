import { useState } from "react";

const categories = [
  "History",
  "Science",
  "Fiction",
  "Programming",
  "Business",
  "Philosophy",
  "Self-help",
  "Science Fiction",
  "Productivity",
];

const pageRanges = [
  "less than 100",
  "100 - 200",
  "200 - 300",
  "300 - 400",
  "more than 400"
];

const ratings = [1, 2, 3, 4, 5];

export default function Sidebar({ onSubmit }: { onSubmit: (filters: any) => void }) {
  const [selectedCategory, setSelectedCategory] = useState("History");
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [selectedRate, setSelectedRate] = useState<number | null>(null);

  const handlePageChange = (value: string) => {
    setSelectedPage((prev) => (prev === value ? null : value));
  };

  const handleRateClick = (rate: number) => {
    setSelectedRate(rate === selectedRate ? null : rate);
  };

  const handleClear = () => {
    setSelectedPage(null);
    setSelectedRate(null);
  };

  const handleSubmit = () => {
    onSubmit({
      category: selectedCategory,
      pages: selectedPage,
      rate: selectedRate,
    });
  };

  const handleShowAll = () => {
    // ترجع كل الكتب بدون فلترة
    onSubmit({});
    // رجّع الحالة الافتراضية للفلتر (اختياري)
    setSelectedCategory("History");
    setSelectedPage(null);
    setSelectedRate(null);
  };

  return (
    <div className="bg-[#eee] p-4 w-[250px] min-h-screen sticky top-0 h-fit text-black">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <div className="border border-gray-400 rounded mb-6">
        <select
          className="w-full p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-lg font-bold mb-2">Number of pages</h2>
      <div className="mb-6">
        {pageRanges.map((range) => (
          <label key={range} className="block text-sm mb-1">
            <input
              type="radio"
              name="pageRange"
              checked={selectedPage === range}
              onChange={() => handlePageChange(range)}
              className="mr-2"
            />
            {range}
          </label>
        ))}
      </div>

      <h2 className="text-lg font-bold mb-2">Rates</h2>
      <div className="flex flex-col gap-1 mb-4">
        {ratings.map((rate) => (
          <button
            key={rate}
            onClick={() => handleRateClick(rate)}
            className={`text-yellow-400 text-xl px-2 py-1 rounded text-left ${
              selectedRate === rate ? "bg-[#D4A373]" : "bg-transparent"
            }`}
          >
            {"★".repeat(rate)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:opacity-90"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100"
        >
          Clear
        </button>
        <button
          onClick={handleShowAll}
          className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
}
