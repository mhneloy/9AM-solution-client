import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    const file = data.photo[0];
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("status", data.status);
    formData.append("photo", file);

    // 🧾 Example: send formData to your backend
    console.log("Form Data:", data);

    reset();
    setPreview(null);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-orange-100 p-6">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📋 Add New Entry
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered input-primary w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Photo Upload */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Photo</label>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered file-input-primary w-full"
              {...register("photo", { required: "Photo is required" })}
              onChange={handlePhotoChange}
            />
            {errors.photo && (
              <span className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </span>
            )}

            {/* Preview */}
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Status Select */}
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Status</label>
            <select
              className="select select-bordered select-primary"
              defaultValue=""
              {...register("status", { required: "Status is required" })}
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="workprogress">Work Progress</option>
              <option value="testimonial">Testimonial</option>
            </select>
            {errors.status && (
              <span className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full gap-2 text-lg shadow-md hover:scale-[1.02] transition-transform"
          >
            <FaPaperPlane />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
