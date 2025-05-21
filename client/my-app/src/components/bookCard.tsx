import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BookCard({
  id,
  title,
  author,
  image,
}: {
  id: string;
  title: string;
  author: string;
  image: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-56 h-[420px] flex flex-col justify-between items-center">
      {/* صورة الكتاب */}
      <Link href={`/book/${id}`} className="block">
        <Image
          src={image}
          alt={title}
          width={160}
          height={220}
          className="rounded-md object-contain mx-auto cursor-pointer"
        />
      </Link>

      {/* العنوان والمؤلف */}
      <div className="text-center mt-2">
        <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{author}</p>
      </div>

      {/* الأزرار */}
      <div className="mt-2 flex flex-col gap-2 items-center w-full">
        <div className="flex justify-center gap-2 w-full">
          <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm w-full">
            Download
          </button>
          <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm w-full">
            Read
          </button>
        </div>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`text-xs px-3 py-1 rounded-full border transition w-full ${
            isFavorite
              ? "bg-red-500 text-white border-red-500"
              : "text-black border-black"
          }`}
        >
          Add to favorites
        </button>
      </div>
    </div>
  );
}
