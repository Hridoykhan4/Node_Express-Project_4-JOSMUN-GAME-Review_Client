import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/collected/img1.jpeg";
import useAuthValue from "../Hooks/useAuthValue";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser, updateUserProfile, logInGoogle, setUser } =
    useAuthValue();

  const nav = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password } = data;
    createNewUser(email, password)
      .then(() => {
        reset();
        updateUserProfile({ displayName: name }).then((res) => {
          Swal.fire({
            title: "🔥 Successful SignUp",
            text: `Welcome, ${res?.user?.displayName || "Reviewer"}!`,
            icon: "success",
            background: "#1e1e2f",
            color: "#fff",
            confirmButtonColor: "#ff4c29",
            confirmButtonText: "Start Reviewing 🎮",
          }).then((result) => {
            if (result.isConfirmed) {
              nav("/");
            }
          });
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "💥 SignUp Failed!",
          text: `${err.code}`,
          icon: "error",
          background: "#2f1e1e",
          color: "#fff",
          confirmButtonColor: "#ff4c29",
          confirmButtonText: "Retry 🔁",
        });
      });
  };

  //   HandleGoogleLogin

  const handleGoogleLogin = () => {
    logInGoogle()
      .then((res) => {
        setUser(res.user);
        if (res?.user) {
          Swal.fire({
            title: "🔥 Logged In!",
            text: `Welcome, ${res.user.displayName || "Gamer"}!`,
            icon: "success",
            background: "#1e1e2f",
            color: "#fff",
            confirmButtonColor: "#ff4c29",
            confirmButtonText: "Start Reviewing 🎮",
          }).then((result) => {
            if (result.isConfirmed) {
              nav("/");
            }
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "💥 Login Failed!",
          text: "Oops! Something went wrong. Try again!",
          icon: "error",
          background: "#2f1e1e",
          color: "#fff",
          confirmButtonColor: "#ff4c29",
          confirmButtonText: "Retry 🔁",
        });
      });
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
          Create Your Account
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Join the JASMUN community and start sharing your game reviews!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "Password must include a lowercase and an uppercase letter",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Google Sign In Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-white/30  text-white border border-gray-300 hover:bg-black font-medium py-3 rounded-lg shadow-sm transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
