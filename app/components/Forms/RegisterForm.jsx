"use client";
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Icon } from "@iconify/react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRegiter, setUserRegiter] = useState("");
  const [ip, setIp] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z\d\W]).{8,}$/;

  const fetchIP = async () => {
    try {
      const response = await axios.get(`${Base_URL}/v1/my-ip`, {
        headers: {
          "x-api-key": X_API_Key,
        },
      });
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      setFormError(true);
      return;
    }
    setFormError(false);

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);

    // Check if password meets the minimum length requirement and complexity
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    // Check if email format is correct
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError("");

    // Proceed with form submission
    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/register`,
        {
          name,
          email,
          password,
          ip,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setUserRegiter(response.data);
      setOpen(true);
      if (response.data.is_active === true) {
        // Reset form fields
        setConfirmPassword("");
        setName("");
        setEmail("");
        setPassword("");
        setPasswordMatchError(false);
        setPasswordError(false);
        setEmailError("");
        setFormError(false);
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setPasswordError(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={
            userRegiter.message === "Email already exist." ? "error" : "success"
          }
          variant="filled"
          sx={{ width: "100%", marginTop: "10px", marginLeft: "16px" }}
        >
          {userRegiter?.message}
        </Alert>
      </Snackbar>
      <section className="relative py-20 2xl:py-10 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 hidden lg:block ">
                <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-3xl h-full">
                  <img
                    className="block w-full rounded-3xl h-142 sm:h-full object-cover rounded-5xl"
                    src="/image.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
                    <div className="max-w-md mx-auto">
                      <h4 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-8">
                        ExamPrince.com By IT Professional
                      </h4>
                      <div className="md:flex mb-20">
                        <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                          <svg
                            width="84"
                            height="10"
                            viewBox="0 0 84 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                              fill="#FAFBFC"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-200">
                            Over 30000+ Exams, Certifications and Video Courses
                            Available.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex mr-4 items-center">
                          <img
                            className="w-10 h-10"
                            src="/avatar-purple-border.png"
                            alt=""
                          />
                          <img
                            className="w-10 h-10 -ml-3"
                            src="/avatar-purple-border-4.png"
                            alt=""
                          />
                          <img
                            className="w-10 h-10 -ml-3"
                            src="/avatar-purple-border-3.png"
                            alt=""
                          />
                          <img
                            className="w-10 h-10 -ml-3"
                            src="/avatar-purple-border-2.png"
                            alt=""
                          />
                          <div className="flex -ml-3 items-center justify-center w-10 h-10 border-2 border-purple-600 bg-gray-50 rounded-full">
                            <span className="text-gray-900 text-sm font-medium">
                              13k+
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <img
                              className="mr-1"
                              src="/yellow-star.svg"
                              alt=""
                            />
                            <img
                              className="mr-1"
                              src="/yellow-star.svg"
                              alt=""
                            />
                            <img
                              className="mr-1"
                              src="/yellow-star.svg"
                              alt=""
                            />
                            <img
                              className="mr-1"
                              src="/yellow-star.svg"
                              alt=""
                            />
                            <img
                              className="mr-2"
                              src="/yellow-star.svg"
                              alt=""
                            />
                            <span className="font-semibold text-gray-50">
                              5.0
                            </span>
                          </div>
                          <span className="font-semibold text-gray-50">
                            13000+ Users
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-3xl lg:pt-8 2xl:pt-16 lg:pb-8 mx-auto 2xl:mr-0">
                  <h3 className="font-heading text-5xl sm:text-6xl text-blue-500 font-bold mb-4">
                    Welcome!
                  </h3>
                  <p className="text-lg text-gray-500 mb-15">
                    Sign Up Your Account And Save Your Progress.
                  </p>
                  <div className="flex flex-wrap mb-6 items-center -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0"></div>
                    <div className="w-full md:w-1/2 px-2"></div>
                  </div>
                  <div className="flex mb-6 items-center">
                    <div className="w-full h-px bg-gray-300"></div>
                    <span className="mx-4 text-sm font-semibold text-gray-500">
                      Examprince.com
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
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-sm text-gray-900 font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailError && (
                        <span style={{ color: "red" }} className="text-sm">
                          {emailError}
                        </span>
                      )}
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
                          placeholder="********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <IconButton
                          className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Icon
                            icon={showPassword ? "ep:view" : "ep:hide"}
                            width="1em"
                            height="1em"
                            style={{ color: "black" }}
                          />
                        </IconButton>
                      </div>
                      {passwordError && (
                        <span style={{ color: "red" }} className="text-sm">
                          Password must have 8 characters (1 uppercase, 1
                          lowercase, 1 number, and 1 special character)
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
                        placeholder="********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {passwordMatchError && (
                        <span style={{ color: "red" }} className="text-sm">
                          Passwords do not match
                        </span>
                      )}
                    </div>
                    <div className="flex mb-6 items-center">
                      <input type="checkbox" id="rememberMe" className="mr-2" />
                      <label
                        className="text-xs text-gray-800"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      className="relative group block w-full mb-8 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-blue-600 rounded-full overflow-hidden"
                      type="submit"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">REGISTER</span>
                    </button>
                    <div className="flex mb-6 items-center">
                      <div className="w-full h-px bg-gray-300"></div>
                      <div className="w-full h-px bg-gray-300"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-base font-semibold text-gray-700">
                        <span>Already have an account?</span>
                        <Link
                          className="inline-block ml-1 text-blue-600 hover:text-blue-700"
                          href="/login"
                        >
                          Login
                        </Link>
                      </span>
                    </div>
                    {formError && (
                      <span style={{ color: "red" }} className="text-sm mt-4">
                        All fields are required
                      </span>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
