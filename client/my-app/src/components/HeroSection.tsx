import Image from "next/image";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="flex items-start justify-between px-16 py-20 gap-10">
      {/* النص + الأزرار */}
      <div className="flex flex-col justify-between max-w-lg h-[475px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-black leading-tight">
            Find your next <br />
            <span className="text-[#b68c61]">exciting </span> <span>book</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover hundreds of books based on your personal tastes.
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex justify-between w-full mt-10">
          <button
            className="bg-[#D97706] text-white px-8 py-3 rounded-full cursor-pointer text-lg font-semibold transition duration-300"
            onClick={() => router.push('/login')}
          >
            Sign In
          </button>
          <button
            className="border border-[#D97706] text-[#D97706] px-8 py-3 rounded-full hover:bg-[#D97706] hover:text-white cursor-pointer text-lg font-semibold transition duration-300"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* الصورة */}
      <div className="w-[400px] h-[475px] overflow-hidden rounded-lg">
        <Image
          src="/img1.jpg"
          alt="Book"
          width={400}
          height={475}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
