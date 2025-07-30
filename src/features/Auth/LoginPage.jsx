import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "./services/authService";
import PublicHeader from "../../layouts/Header/PublicHeader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login({ email, password });
      navigate("/");
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <>
      <PublicHeader />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-center text-gray-500 mt-4">
            Do not have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:underline transition"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
