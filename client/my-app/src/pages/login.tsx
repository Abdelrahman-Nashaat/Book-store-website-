import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // ← الخطوة 1

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6ee]">
      <div className="bg-[#D4A373] p-10 rounded-lg shadow-md w-[90%] max-w-md border border-blue-400">
        {/* Logo & Title */}
        <div className="text-center mb-8 text-black">
          <h1 className="text-3xl font-bold">
            <span>B</span><span className="text-[#8B4513]">oo</span>k Zone
          </h1>
          <p className="text-sm text-gray-700">Read More, Grow More</p>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="example.@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="***************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
          />
        </div>

        {/* Sign In Button */}
        <button
          className="w-full py-2 text-lg font-semibold border border-black rounded-full hover:bg-[#8B4513] hover:text-white transition"
          onClick={() => {
            // هنا بنروح للصفحة الرئيسية
            router.push('/home');
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
