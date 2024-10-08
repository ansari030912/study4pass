/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ForgotForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  useEffect(() => {
    async function fetchIp() {
      const response = await fetch("/api/get-client-ip");
      const data = await response.json();
      setIp(data.ip);
    }
    fetchIp();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/forgot-password`,
        {
          email,
          ip,
          reset_url: "/reset-password/",
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );

      // Check the response and show the appropriate Snackbar message
      if (response.data.email_sent) {
        setSnackbarMessage(response.data.message);
        setSnackbarSeverity("success");
      } else {
        setSnackbarMessage(response.data.message);
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

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <section className="relative py-20 2xl:py-10 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 lg:order-first">
                <div className="max-w-3xl lg:pt-8 2xl:pt-16 lg:pb-8 mx-auto 2xl:mr-0">
                  <h3 className="font-heading text-5xl sm:text-6xl text-blue-500 font-bold mb-4">
                    Welcome!
                  </h3>
                  <p className="text-lg text-gray-500 mb-15">
                    Sign Up Your Account And Save Your Progress.
                  </p>
                  <form onSubmit={handleSubmit}>
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
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailError && (
                        <p className="text-red-500 text-xs mt-1">
                          {emailError}
                        </p>
                      )}
                    </div>
                    <button
                      className="relative group block w-full mb-8 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-blue-600 rounded-full overflow-hidden"
                      type="submit"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Forgot Password</span>
                    </button>

                    <div className="flex mb-6 items-center">
                      <div className="w-full h-px bg-gray-300"></div>
                      <span className="mx-4 text-sm font-semibold text-gray-500">
                        Study4Pass.com
                      </span>
                      <div className="w-full h-px bg-gray-300"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-base font-semibold text-gray-700">
                        <Link
                          className="inline-block ml-1 text-blue-600 hover:text-blue-700"
                          href="/login"
                        >
                          Login Now.
                        </Link>{" "}
                        <span>Don&apos;t have an account?</span>
                        <Link
                          className="inline-block ml-1 text-blue-600 hover:text-blue-700"
                          href="/register"
                        >
                          Register
                        </Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 hidden lg:block">
                <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
                  <img
                    className="block w-full rounded-3xl h-142 sm:h-full object-cover rounded-5xl"
                    src="/image.jpg"
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
                    <div className="max-w-md mx-auto">
                      <h4 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-8">
                        Study4Pass.com By IT Professional
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotForm;
