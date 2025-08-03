import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useCustomContext from "../../sharecomponent/useCustomContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProtfolioLogin = () => {
  const { loginUser, googleLogin } = useCustomContext();
  const navigate = useNavigate();
  const successNofity = () => {
    toast.success("Successfully Login!", {
      position: "top-center",
    });
  };
  const errorNofity = (error = "password or email is not valid") => {
    toast.error(error, {
      position: "top-left",
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          successNofity();
          reset();
          navigate("/");
        }
      })
      .catch((err) => errorNofity(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          successNofity();
          navigate("/");
        }
      })
      .catch((err) => {
        errorNofity(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label font-medium block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-medium block">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered pr-10 w-full"
                {...register("password", { required: "Password is required" })}
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl z-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default ProtfolioLogin;
