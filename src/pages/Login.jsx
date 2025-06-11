import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // تأكد من مسار ملف firebase.js عندك
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "",
      }));

      navigate("/", { replace: true });
    } catch (err) {
      toast.error("Bad info, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable bg-[#25d49a2b] ">
      <div className="flex items-center justify-center w-full lg:p-12">
        <Toaster position="top-center" reverseOrder={true} />

        <div className="flex items-center xl:p-10 bg-white p-5 m-5 rounded-3xl shadow">
          <form
            className="flex flex-col w-full h-full pb-6 text-center"
            onSubmit={handleLogin}
          >
            <h3 className="mb-3 text-4xl font-extrabold text-gray-900">
              Sign In
            </h3>
            <p className="mb-4 text-gray-700">Enter your email and password</p>

            <button
              type="button"
              onClick={() => toast.info("Google sign-in not implemented yet")}
              className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300"
            >
              <img
                className="h-5 mr-2"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                alt="Google"
              />
              Sign in with Google
            </button>

            <div className="flex items-center mb-3">
              <hr className="h-0 border-b border-solid border-gray-500 grow" />
              <p className="mx-4 text-gray-600">or</p>
              <hr className="h-0 border-b border-solid border-gray-500 grow" />
            </div>

            <label htmlFor="email" className="mb-2 text-sm text-start text-gray-900">
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="mail@.com"
              className="flex items-center w-full px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="mb-2 text-sm text-start text-gray-900">
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter a password"
              className="flex items-center w-full px-5 py-4 mb-5 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="mb-4 text-sm text-center text-red-500">{error}</p>
            )}

            <div className="flex flex-row justify-between mb-8">
              <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer-checked:border-0 peer-checked:bg-green-600 flex justify-center items-center">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-normal text-gray-900">
                  Keep me logged in
                </span>
              </label>

              <Link
                to="/forgot-password"
                className="mr-4 text-sm font-medium text-green-600 hover:underline"
              >
                Forget password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none border-2 text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-purple-100 bg-green-500"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-sm leading-relaxed text-gray-900">
              Not registered yet?{" "}
              <Link to="/Register" className="font-bold text-gray-700">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
