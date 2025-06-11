import React, { useState } from "react";
import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, replace, useNavigate } from "react-router-dom";
 

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");

    if (!firstName || !lastName || !email || !password || !cPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== cPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      console.log("User registered:", userCredential.user);
    navigate("/", { replace: true });
  } catch (error) {
      setError(error.message);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-[#b5d4c834]">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow border-green-100 border-1 rounded-b-md">
            {/* Left Image Section */}
            <div
              className="w-full h-auto bg-green-300 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
              }}
            ></div>

            {/* Form Section */}
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
           <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                Create an Account!
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                        error.includes("Password") ? "border-red-500" : "border-gray-300"
                      }`}
                      id="password"
                      type="password"
                      placeholder="******************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.includes("Password") && (
                      <p className="text-xs italic text-red-500">
                        {error}
                      </p>
                    )}
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="******************"
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </div>
                </div>

                {error && !error.includes("Password") && (
                  <p className="mb-4 text-sm text-center text-red-500">{error}</p>
                )}

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register Account"}
                  </button>
                </div>

                <hr className="mb-6 border-t" />

                <div className="text-center">
               
                </div>

                <div className="text-center">
                  <Link to="/login"
                    className="inline-block text-sm text-green-500 align-baseline hover:text-green-800"
                   
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
