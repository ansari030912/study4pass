/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const CustomInvoiceCart = ({ params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectingMessage, setRedirectingMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [cartResponse, setCartResponse] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarBgColor, setSnackbarBgColor] = useState("");
  const [totals, setTotals] = useState({
    subtotal: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    async function fetchIp() {
      try {
        const response = await fetch("/api/get-client-ip");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    }
    fetchIp();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${Base_URL}/v1/invoice/${params.invoice_perma}`,
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        );
        setData(response.data);
        setCartResponse(response.data.invoice_items || []);
        setTotals({
          subtotal: parseFloat(response.data.invoice_sub_total),
          discount: parseFloat(response.data.invoice_discount),
          total: parseFloat(response.data.invoice_total),
        });
      } catch (error) {
        setErrorMessage("Invoice Expired or Not Available At The Moment...");
        setSnackbarMessage("Error fetching invoice data.");
        setSnackbarBgColor("red");
        setSnackbarOpen(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.invoice_perma]);

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "This field is required";
    tempErrors.email = email ? "" : "This field is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleCheckout = async () => {
    if (!validate() || !acceptedTerms) {
      setErrorMessage("Please fill in all fields and accept the terms.");
      setSnackbarMessage("Please complete all fields and accept terms.");
      setSnackbarBgColor("red");
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    setRedirectingMessage("We are Redirecting you for Payment on PREPWISE...");
    setSnackbarMessage("We are Redirecting you for Payment on PREPWISE...");
    setSnackbarBgColor("green");
    setSnackbarOpen(true);

    setTimeout(async () => {
      try {
        const response = await axios.post(
          `${Base_URL}/v1/payment`,
          {
            name: fullName,
            email: email,
            ip: ipAddress,
            coupon: "", // Send empty coupon code as per the request
            IsInvoice: true,
            invoice_perma: data.invoice_perma,
            cart_items: data.invoice_items.map((item) => item.cart),
          },
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        );

        if (response.data.success) {
          window.location.href = response.data.redirect_link;
        } else {
          setErrorMessage("Payment Redirecting failed. Please try again.");
          setSnackbarMessage("Payment Redirecting failed. Please try again.");
          setSnackbarBgColor("red");
          setSnackbarOpen(true);
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again.");
        setSnackbarMessage("An error occurred during payment.");
        setSnackbarBgColor("red");
        setSnackbarOpen(true);
        setLoading(false);
      }
    }, 2000);
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartResponse.filter((cartItem) => cartItem !== item);
    setCartResponse(updatedCart);
  };

  const handleRemoveData = () => {
    setCartResponse([]);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  return (
    <section className="overflow-x-hidden bg-gray-50">
      <div className="container mx-auto bg-gray-50 p-4 md:p-10">
        {cartResponse.length > 0 ? (
          <>
            <div className="flex flex-wrap items-center gap-2 mb-14">
              <Link href="/" className="group">
                <div className="flex flex-wrap items-center">
                  <span className="text-xs text-gray-500 group-hover:text-gray-900 transition duration-200">
                    Home
                  </span>
                  <div className="text-gray-500 group-hover:text-gray-900 transition duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.9465 9.40832L8.22986 4.69999C8.15239 4.62188 8.06022 4.55989 7.95867 4.51758C7.85712 4.47527 7.7482 4.45349 7.63819 4.45349C7.52818 4.45349 7.41926 4.47527 7.31771 4.51758C7.21616 4.55989 7.124 4.62188 7.04653 4.69999C6.89132 4.85613 6.8042 5.06734 6.8042 5.28749C6.8042 5.50764 6.89132 5.71885 7.04653 5.87499L11.1715 10.0417L7.04653 14.1667C6.89132 14.3228 6.8042 14.534 6.8042 14.7542C6.8042 14.9743 6.89132 15.1855 7.04653 15.3417C7.12371 15.4204 7.21574 15.483 7.31731 15.526C7.41887 15.5689 7.52794 15.5912 7.63819 15.5917C7.74845 15.5912 7.85752 15.5689 7.95908 15.526C8.06064 15.483 8.15268 15.4204 8.22986 15.3417L12.9465 10.6333C13.0311 10.5553 13.0986 10.4606 13.1448 10.3552C13.191 10.2497 13.2148 10.1359 13.2148 10.0208C13.2148 9.90574 13.191 9.7919 13.1448 9.68648C13.0986 9.58107 13.0311 9.48636 12.9465 9.40832Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex flex-wrap items=center">
                  <span className="text-xs text-gray-500 group-hover:text-gray-900 transition duration-200">
                    Checkout
                  </span>
                  <div className="text-gray-500 group-hover:text-gray-900 transition duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.9465 9.40832L8.22986 4.69999C8.15239 4.62188 8.06022 4.55989 7.95867 4.51758C7.85712 4.47527 7.7482 4.45349 7.63819 4.45349C7.52818 4.45349 7.41926 4.47527 7.31771 4.51758C7.21616 4.55989 7.124 4.62188 7.04653 4.69999C6.89132 4.85613 6.8042 5.06734 6.8042 5.28749C6.8042 5.50764 6.89132 5.71885 7.04653 5.87499L11.1715 10.0417L7.04653 14.1667C6.89132 14.3228 6.8042 14.534 6.8042 14.7542C6.8042 14.9743 6.89132 15.1855 7.04653 15.3417C7.12371 15.4204 7.21574 15.483 7.31731 15.526C7.41887 15.5689 7.52794 15.5912 7.63819 15.5917C7.74845 15.5912 7.85752 15.5689 7.95908 15.526C8.06064 15.483 8.15268 15.4204 8.22986 15.3417L12.9465 10.6333C13.0311 10.5553 13.0986 10.4606 13.1448 10.3552C13.191 10.2497 13.2148 10.1359 13.2148 10.0208C13.2148 9.90574 13.191 9.7919 13.1448 9.68648C13.0986 9.58107 13.0311 9.48636 12.9465 9.40832Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 transition duration-200"
              >
                Payment
              </Link>
            </div>

            {/* Cart Items */}
            <div className="flex flex-wrap -mx-8 xl:-mx-16">
              <div className="w-full md:w-5/12 px-8 xl:px-16">
                <h6 className="mb-6 text-lg font-semibold">Billing Address</h6>
                <div className="pb-6 border-b border-dashed border-gray-200">
                  {cartResponse.map((item, i) => (
                    <div key={i} className="flex flex-wrap -m-2">
                      <div className="w-full md:w-3/4 p-2">
                        <div className="flex flex-wrap -m-2">
                          <div className="w-auto p-2">
                            <img
                              className="h-24 object-cover rounded-lg"
                              src="/PDF-TE.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-1 p-2">
                            <p className="mb-1.5 font-semibold text-blue-500">
                              {item?.title} -{" "}
                              <span className="text-gray-700">
                                {item?.sub_title}
                              </span>
                            </p>
                            <p className="mb-1.5 font-semibold">{item?.type}</p>
                            <p>x1</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/4 p-2 flex justify-end items-center">
                        <div>
                          <p className="font-bold text-lg">${item?.price}</p>
                          <p className="font-bold text-sm text-red-500 line-through">
                            ${item?.full_price}
                          </p>
                        </div>
                        {cartResponse.length >= 2 && (
                          <button
                            onClick={() => handleRemoveItem(item)}
                            className="ml-4"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="red"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="w-full mt-4">
                    <button
                      onClick={handleRemoveData}
                      className="py-2 px-4 bg-red-500 w-full text-white hover:bg-red-600 transition"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                {/* Totals */}
                <div className="pt-4 pb-2 border-b border-dashed">
                  <div className="flex flex-wrap text-xl justify-between mb-3 -mx-2">
                    <div className="w-auto px-2">
                      <span className="text-gray-500">Subtotal</span>
                    </div>
                    <div className="w-auto px-2">
                      <span className="font-semibold text-red-500">
                        ${totals.subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap text-xl justify-between -mx-2">
                    <div className="w-auto px-2">
                      <span className="text-gray-500">Discount</span>
                    </div>
                    <div className="w-auto px-2">
                      <span className="font-semibold text-green-500">
                        -${totals.discount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2.5">
                  <div className="flex flex-wrap items=center justify-between -mx-2">
                    <div className="w-auto px-2">
                      <p className="font-semibold">Grand total</p>
                    </div>
                    <div className="w-auto px-2">
                      <p className="text-2xl font-semibold">
                        ${totals.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div className="w-full md:w-7/12 mt-6 border-t-2 md:border-t-0 md:mt-16 px-8 xl:px-16">
                <h6 className="mb-4 text-lg font-semibold mt-6 md:mt-0">
                  1. Enter Your Details
                </h6>
                <div className="flex flex-wrap -mx-4 mb-2">
                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="input-01-1"
                        className="mb-1.5 inline-block text-sm font-semibold"
                      >
                        Full name
                      </label>
                      <input
                        id="input-01-1"
                        name="fullName"
                        value={fullName}
                        onChange={handleChange}
                        type="text"
                        className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="mb-6 md:hidden">
                      <label
                        htmlFor="input-01-2"
                        className="mb-1.5 inline-block text-sm font-semibold"
                      >
                        Email
                      </label>
                      <input
                        id="input-01-2"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="text"
                        className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                    <h6 className="mb-4 text-lg font-semibold">
                      2. Accept Terms & Conditions
                    </h6>
                    <div className="mb-6 ">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            color="primary"
                          />
                        }
                        label={
                          <span className="text-gray-700 text-nowrap text-sm">
                            I accept the{" "}
                            <Link
                              href="/terms-and-conditions"
                              className="text-blue-500"
                            >
                              terms and conditions
                            </Link>
                          </span>
                        }
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-6 w-full hidden md:inline-block">
                      <label
                        htmlFor="input-01-2"
                        className="mb-1.5 inline-block text-sm font-semibold"
                      >
                        Email
                      </label>
                      <input
                        id="input-01-2"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="text"
                        className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <h6 className="mx-4 text-lg text-red-500 font-semibold">
                    <span className="text-gray-700">3.</span> Click on check out
                    then you will be redirected to Prepwise for secure payment.
                  </h6>
                  <div className="pt-4 pb-2 border-b border-dashed mb-10 w-full"></div>
                  <button
                    onClick={handleCheckout}
                    className="py-3 px-7 mx-2 w-full text-sm text-white font-semibold bg-blue-500 hover:bg-green-600 rounded-4xl transition duration-300 animate-bounce"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            style={{ height: "60vh" }}
            className="flex flex-col justify-center"
          >
            <Box
              className="bg-gray-50 rounded-lg p-10"
              sx={{ padding: "20px", textAlign: "center" }}
            >
              <Typography
                className="text-gray-600 text-4xl"
                fontWeight={"bold"}
              >
                Cart is Empty
              </Typography>

              <Typography
                className="text-gray-500 text-2xl"
                fontWeight={"bold"}
              >
                Please Add Your Product First
              </Typography>
            </Box>
          </div>
        )}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: snackbarBgColor === "green" ? "#4caf50" : "#f44336",
          }}
          message={snackbarMessage}
        />
      </Snackbar>
    </section>
  );
};

export default CustomInvoiceCart;
