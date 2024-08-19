/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Snackbar,
  SnackbarContent,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X_API_Key } from "../../URL's/Api_X_Key";
import { Base_URL } from "../../URL's/Base_URL";

const PROMO_SUFFIX = "-30";

const CheckOut = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState(`MEGASALE${PROMO_SUFFIX}`);
  const [apiPromoCode, setApiPromoCode] = useState(`MEGASALE${PROMO_SUFFIX}`);
  const [errors, setErrors] = useState({});
  const [cartResponse, setCartResponse] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectingMessage, setRedirectingMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarBgColor, setSnackbarBgColor] = useState("");

  useEffect(() => {
    fetchIpAddress();
    loadCartData();
  }, []);

  const fetchIpAddress = async () => {
    try {
      const response = await axios.get(`${Base_URL}/v1/my-ip`, {
        headers: {
          "x-api-key": X_API_Key,
        },
      });
      setIpAddress(response.data);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  const loadCartData = () => {
    const storedCartResponse = localStorage.getItem("CartProducts");
    if (storedCartResponse) {
      const cartProducts = JSON.parse(storedCartResponse);
      if (cartProducts.saveExam) {
        axios
          .post(
            `${Base_URL}/v1/update-cart`,
            {
              coupon: promoCode,
              cart_items: [cartProducts.cart],
            },
            {
              headers: {
                "x-api-key": X_API_Key,
              },
            }
          )
          .then((response) => {
            setCartResponse(response.data);
          })
          .catch((error) => {
            console.error("Error updating cart:", error);
          });
      }
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = firstName ? "" : "This field is required";
    tempErrors.email = email ? "" : "This field is required";
    setErrors(tempErrors);
    if (!firstName || !email || !acceptedTerms) {
      let message;
      if (!firstName) {
        message = "First name is required";
      } else if (!email) {
        message = "Email is required";
      } else {
        message = "You must accept the terms and conditions";
      }
      setSnackbarMessage(message);
      setSnackbarBgColor("red");
      setSnackbarOpen(true);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "promoCode":
        setPromoCode(`${value}${PROMO_SUFFIX}`);
        break;
      default:
        break;
    }
  };

  const handlePromoSubmit = () => {
    if (cartResponse.length > 0) {
      axios
        .post(
          `${Base_URL}/v1/update-cart`,
          {
            coupon: promoCode,
            cart_items: [cartResponse[0].cart],
          },
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        )
        .then((response) => {
          if (
            response.data &&
            response.data.length > 0 &&
            response.data[0].exam_code
          ) {
            setCartResponse(response.data);
            setApiPromoCode(promoCode);
            setSnackbarMessage("Coupon Applied!");
            setSnackbarBgColor("green");
            setSnackbarOpen(true);
            setErrorMessage("");
          } else {
            setErrorMessage("Coupon not found");
          }
        })
        .catch((error) => {
          console.error("Error updating cart with promo code:", error);
          setErrorMessage("Invalid Promo Code");
          setSnackbarMessage("Invalid Coupon Code.");
          setSnackbarBgColor("red");
          setSnackbarOpen(true);
        });
    }
  };

  const handleCheckout = async () => {
    if (!validate()) return;
    setLoading(true);
    setRedirectingMessage(
      "We are redirecting to you on Prepwise for payment..."
    );
    setSnackbarMessage("We are redirecting to you on Prepwise for payment...");
    setSnackbarBgColor("green");
    setSnackbarOpen(true);
    setTimeout(async () => {
      try {
        const response = await axios.post(
          `${Base_URL}/v1/payment`,
          {
            name: firstName,
            email: email,
            ip: ipAddress,
            coupon: apiPromoCode,
            IsInvoice: false,
            invoice_perma: "",
            cart_items: [cartResponse[0].cart],
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
          setErrorMessage("Payment processing failed. Please try again.");
          setSnackbarMessage("Payment processing failed. Please try again.");
          setSnackbarBgColor("red");
          setSnackbarOpen(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during checkout:", error);
        setErrorMessage("An error occurred. Please try again.");
        setSnackbarMessage("An error occurred. Please try again.");
        setSnackbarBgColor("red");
        setSnackbarOpen(true);
        setLoading(false);
      }
    }, 2000); // 2 seconds delay
  };

  const discountAmount =
    Math.floor(cartResponse?.[0]?.full_price) -
    Math.floor(cartResponse?.[0]?.price);

  const handleRemoveData = () => {
    localStorage.removeItem("CartProducts");
    window.location.reload();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
                <div className="flex flex-wrap items-center">
                  <span className="text-xs text-gray-900 transition duration-200 font-semibold">
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
            <div className="flex flex-wrap -mx-8 xl:-mx-16">
              <div className="w-full md:w-5/12 px-8 xl:px-16">
                <h6 className="mb-6 text-lg font-semibold">Billing Address</h6>
                <div className="pb-6 border-b border-dashed border-gray-200">
                  <div className="flex flex-wrap -m-2">
                    <div className="w-full md:w-3/4 p-2">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <img
                            className="w-24 h-24 object-cover rounded-lg"
                            src="/product2.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 p-2">
                          <p className="mb-1.5 font-semibold text-blue-500">
                            {cartResponse[0]?.exam_code} -{" "}
                            <span className="text-gray-700">
                              {cartResponse[0]?.exam_vendor_title}
                            </span>
                          </p>
                          <p className="mb-1.5 font-semibold">
                            {cartResponse[0]?.exam_title}
                          </p>
                          <p>x1</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/4 p-2">
                      <p className="flex justify-end font-bold text-lg">
                        ${cartResponse[0]?.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 pb-4 border-b border-dashed border-gray-200">
                  <h6 className="mb-2 text-lg font-semibold">Discount Code</h6>
                  <div className="flex flex-wrap items-center -mx-2 mb-0.5">
                    <div className="w-full lg:flex-1 px-2">
                      <input
                        type="text"
                        name="voucher"
                        value={promoCode.replace(PROMO_SUFFIX, "")}
                        onChange={(e) =>
                          setPromoCode(`${e.target.value}${PROMO_SUFFIX}`)
                        }
                        className="py-3 px-4 w-full text-sm placeholder-gray-400 bg-white outline-none focus:ring focus:ring-gray-100 border border-gray-100 rounded-lg transition duration-200"
                        placeholder="Enter your voucher"
                      />
                    </div>
                    <div className="w-full lg:w-auto px-2">
                      <button
                        onClick={handlePromoSubmit}
                        className="py-3 px-7 w-full text-sm font-semibold bg-green-500 hover:bg-green-600 border border-gray-200 hover:border-transparent focus:border-transparent focus:ring-4 focus:ring-gray-200 rounded-4xl transition duration-300"
                      >
                        <span className="text-white">Apply</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm">
                    New customer?{" "}
                    <Link
                      href="#"
                      className="inline-block text-green-800 hover:text-green-900 font-semibold"
                    >
                      Sign up
                    </Link>{" "}
                    to get better deals
                  </p>
                </div>
                <div className="pt-4 pb-2 border-b border-dashed">
                  <div className="flex flex-wrap text-xl justify-between mb-3 -mx-2">
                    <div className="w-auto px-2">
                      <span className="text-gray-500">Subtotal</span>
                    </div>
                    <div className="w-auto px-2">
                      <span className="font-semibold text-red-500">
                        ${cartResponse[0]?.full_price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap text-xl justify-between -mx-2">
                    <div className="w-auto px-2">
                      <span className="text-gray-500">Discount</span>
                    </div>
                    <div className="w-auto px-2">
                      <span className="font-semibold text-green-500">
                        -$ {discountAmount || "0"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-2.5 ">
                  <div className="flex flex-wrap items-center justify-between -mx-2">
                    <div className="w-auto px-2">
                      <p className="font-semibold">Grand total</p>
                    </div>
                    <div className="w-auto px-2">
                      <p className="text-2xl font-semibold">
                        $ {cartResponse[0]?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        type="text"
                        className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    {/* <div className="mb-6  md:hidden">
                      <label
                        htmlFor="input-01-4"
                        className="mb-1.5 inline-block text-sm font-semibold"
                      >
                        Last name
                      </label>
                      <input
                        id="input-01-4"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        type="text"
                        className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border border-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-100 rounded-md transition duration-200"
                        placeholder="Enter your last name"
                      />
                    </div> */}
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
                    <div className="mb-6">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            color="primary"
                          />
                        }
                        label={
                          <span className="text-gray-700 text-sm">
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
                    then you will redirect to Prepwise for secure payment.
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
          <Box
            className="bg-gray-50 rounded-lg p-10"
            sx={{ padding: "20px", textAlign: "center" }}
          >
            <Typography className="text-gray-600 text-4xl" fontWeight={"bold"}>
              Cart is Empty
            </Typography>

            <Typography className="text-gray-500 text-2xl" fontWeight={"bold"}>
              Please Add Your Product First
            </Typography>
          </Box>
        )}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent
          style={{
            backgroundColor:
              snackbarBgColor === "green" ? "#4caf50" : "#f44336",
          }}
          message={snackbarMessage}
        />
      </Snackbar>
    </section>
  );
};

export default CheckOut;
