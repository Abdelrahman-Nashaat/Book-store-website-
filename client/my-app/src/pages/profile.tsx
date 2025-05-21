import { useState } from "react";

export default function Profile() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [favorites, setFavorites] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", image: "/book.jpg" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", image: "/book.jpg" },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho", image: "/book.jpg" },
    { id: 4, title: "The Alchemist", author: "Paulo Coelho", image: "/book.jpg" },
  ]);

  const handleRemove = (id) => {
    setFavorites(favorites.filter((book) => book.id !== id));
  };

  const handleSubmitPassword = () => {
    setShowPasswordForm(false);
  };

  return (
    <div className="flex bg-[#FAF3E0] min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-6 flex flex-col items-center">
        <h2 className="text-xl font-bold text-black mb-1">Hello Ahmed</h2>
        <p className="text-black mb-6 text-sm">e-mail: example.@gmail.com</p>

        <button
          onClick={() => setShowPasswordForm(!showPasswordForm)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded mb-6"
        >
          Change Password
        </button>

        {showPasswordForm && (
          <div className="w-full px-2">
            <h3 className="text-black font-bold text-center mb-2 text-sm">Change Password</h3>
            <input
              type="password"
              placeholder="Enter your current password"
              className="w-full p-2 mb-2 border rounded text-black text-sm"
            />
            <input
              type="password"
              placeholder="Enter your new password"
              className="w-full p-2 mb-2 border rounded text-black text-sm"
            />
            <button
              onClick={handleSubmitPassword}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded text-sm"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
          My favourite books ({favorites.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-60 w-auto cursor-pointer"
                onClick={() => alert(`Redirect to ${book.title} details`)}
              />
              <h3 className="font-bold text-black mt-2">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
                  download
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                  read
                </button>
              </div>
              <button
                onClick={() => handleRemove(book.id)}
                className="mt-3 border border-black text-black text-sm py-1 px-2 rounded hover:bg-gray-100"
              >
                Remove from favorites
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
