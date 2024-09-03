"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const UpdateProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    setUser(loginResponse);
    if (loginResponse?.name) {
      setFormData((prevData) => ({
        ...prevData,
        name: loginResponse.name,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Reset errors

    // Validate password
    if (!validatePassword(formData.password)) {
      setErrors({
        password:
          "Password must have 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      });
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/update-profile`,
        {
          name: formData.name,
          password: formData.password,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${user?._token}`,
          },
        }
      );

      if (response.data === true) {
        setSnackbarMessage("Password changed successfully!");
        setSnackbarSeverity("success");
        // Clear the password fields
        setFormData({ ...formData, password: "", confirmPassword: "" });
      } else {
        setSnackbarMessage("Error: Could not update the password.");
        setSnackbarSeverity("error");
      }
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("Something went wrong. Please try again later.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
          <div className="max-w-2xl lg:pt-8 2xl:pt-16 lg:pb-8 mx-auto 2xl:mr-0">
            <h3 className="font-heading text-xl sm:text-2xl text-blue-500 font-bold mb-4">
              Update Password!
            </h3>
            <div className="flex mb-6 items-center">
              <div className="w-full h-px bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500">
                Study4Pass.com
              </span>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  disabled
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {errors.password && (
                  <span style={{ color: "red" }} className="text-sm">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span style={{ color: "red" }} className="text-sm">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <button
                className="relative group block w-full mb-8 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-blue-600 rounded-full overflow-hidden"
                type="submit"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">Update Password</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
