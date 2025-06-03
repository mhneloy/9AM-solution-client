import { useForm, useFieldArray } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      shops: ["", "", ""], // initialize with 3 shop name fields
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "shops",
  });

  const onSubmit = (data) => {
    // Filter out any empty shop names before submission (optional)
    const validShops = data.shops.filter((shop) => shop.trim() !== "");
    if (validShops.length < 3) {
      alert("Please provide at least 3 shop names.");
      return;
    }

    console.log({ ...data, shops: validShops });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="w-full max-w-lg shadow-xl bg-base-100 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Shop Names */}
          <div>
            <label className="label">
              <span className="label-text">Shop Names (min. 3)</span>
            </label>
            <div className="space-y-2">
              {fields.map((field, index) => {
                return (
                  <input
                    key={field.id}
                    type="text"
                    placeholder={`Shop Names ${index + 1}`}
                    className="input input-bordered w-full"
                    {...register(`shops.${index}`)}
                  />
                );
              })}
              {fields.length < 4 && (
                <button
                  type="button"
                  onClick={() => append("")}
                  className="btn btn-sm btn-outline w-full mt-2"
                >
                  Add Another Shop Name
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            <FaUserPlus className="mr-2" />
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
