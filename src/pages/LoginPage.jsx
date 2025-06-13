import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgImage from "../assets/collected/img2.jpeg";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data); // Show user data in console
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center px-4 py-12 min-h-screen"
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-md w-full shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Login to your JASMUN account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign up Link */}
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
