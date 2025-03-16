import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden relative">
        {/* Tombol Close */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500 transition-transform transform hover:scale-125"
        >
          <X size={24} />
        </button>

        <div className="w-3/5 p-12">
          <h2 className="text-3xl font-bold mb-8">Login</h2>
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-5 py-3 rounded-full bg-gray-300 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-5 py-3 pr-14 rounded-full bg-gray-300 outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-red-500 text-white py-3 rounded-full transition-transform transform hover:scale-105 hover:bg-red-600"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </form>

          <div className="flex justify-between items-center mt-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <div
                className={`w-5 h-5 flex items-center justify-center border-2 rounded-sm transition-all duration-300 ${
                  rememberMe ? "bg-red-500 border-red-500" : "border-gray-500"
                }`}
              >
                {rememberMe && (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <a href="#" className="text-black">Forgot Password?</a>
          </div>
        </div>

        <div className="w-2/5 bg-red-500 text-white flex flex-col items-center justify-center p-12">
          <h2 className="text-3xl font-bold mb-4">Selamat datang</h2>
          <p className="mb-6">Tidak punya akun?</p>
          <button
            onClick={() => navigate("/register")}
            className="border border-white px-8 py-3 rounded-full text-white transition-transform transform hover:scale-105 hover:bg-white hover:text-red-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
