import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6ee]">
      <div className="bg-[#D4A373] p-10 rounded-lg shadow-md w-[90%] max-w-md border border-blue-400">
        {/* Logo & Title */}
        <div className="text-center mb-8 text-black">
          <h1 className="text-3xl font-bold">
            <span>B</span>
            <span className="text-[#8B4513]">oo</span>
            k Zone
          </h1>
          <p className="text-sm text-gray-700">Read More, Grow More</p>
        </div>

        {/* Name Fields */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="abdallah"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-200 text-black focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="amin"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-200 text-black focus:outline-none"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-200 text-black focus:outline-none"
          />
        </div>

        {/* Password Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-200 text-black focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-200 text-black focus:outline-none"
          />
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full py-2 text-lg font-semibold border border-black rounded-full hover:bg-[#8B4513] hover:text-white transition"
          onClick={() => {
            // Redirect to home page
            router.push('/home');
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
