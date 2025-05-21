import { useRouter } from "next/router";

export default function Header({ showSearch = true }: { showSearch?: boolean }) {
  const router = useRouter();

  return (
    <div className="bg-[#D4A373] px-8 py-3">
      {/* الصف الأول: BookZone - Navigation - فراغ يمين */}
      <div className="flex items-center justify-between">
        {/* BookZone (يسار) */}
        <div className="text-2xl font-bold text-black">
          <span>B</span>
          <span className="text-[#8B4513]">oo</span>
          k Zone
        </div>

        {/* Navigation buttons (وسط) */}
        <div className="flex gap-10">
          <button
            className="text-lg font-semibold cursor-pointer"
            onClick={() => router.push("/home")}
          >
            Home Page
          </button>
          <button
            className="text-lg font-semibold cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            My Profile
          </button>
        </div>

        {/* فراغ (يمين) */}
        <div className="w-[100px]">{/* Spacer */}</div>
      </div>

      {/* الصف الثاني: Search */}
      {showSearch && (
        <div className="flex justify-center items-center gap-2 mt-2">
          <label htmlFor="searchInput" className="text-black font-medium">
            Search:
          </label>
          <input
            id="searchInput"
            type="text"
            className="px-4 py-1.5 rounded-full bg-gray-200 outline-none w-64 text-center text-black"
          />
        </div>
      )}
    </div>
  );
}
