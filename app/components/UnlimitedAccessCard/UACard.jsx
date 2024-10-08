"use client";
import { Icon } from "@iconify/react";
import { Snackbar, SnackbarContent } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const UACard = ({ data }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Retrieve the existing cart data from local storage on component mount
    const existingCartData =
      JSON.parse(localStorage.getItem("CartProducts")) || [];
    setCartProducts(existingCartData);
  }, []);

  const handleBoxClick = (item) => {
    // Check if the item is already in the cart
    const isItemInCart = cartProducts.some(
      (cartItem) => cartItem.cart === item.cart
    );

    if (!isItemInCart) {
      // If the item is not already in the cart, add it
      const updatedCart = [
        ...cartProducts,
        { cart: item.cart, saveExam: true },
      ];
      setCartProducts(updatedCart);

      // Save the updated cart data to local storage
      localStorage.setItem("CartProducts", JSON.stringify(updatedCart));

      // Set success message and open the snackbar
      setSnackbarMessage("Product added to cart!");
      setSnackbarOpen(true);
      window.location.reload();
    } else {
      // Set the message that the item is already in the cart and open the snackbar
      setSnackbarMessage("Product already in cart");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <section className="relative py-12 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-left md:text-center">
          <span className="text-blue-400 uppercase font-semibold tracking-widest">
            Unlimited Download Access
          </span>
          <h2 className="mt-8 mb-6 text-4xl font-bold font-heading text-blue-800">
            Get Unlimited Access to the all Study4Pass PREMIUM files!
          </h2>
          <p className="text-xl text-blue-500 md:flex justify-between">
            <span className="mb-1 inline-block">
              ✔ Latest & Valid Questions
            </span>
            <span className="mb-1 inline-block">
              ✔ Accurate & Verified Answers
            </span>
          </p>
          <p className="text-xl text-blue-500 md:flex justify-between">
            <span className="mb-1 inline-block">✔ Fast Free Updates</span>
            <span className="mb-1 inline-block">✔ Instant Download</span>
          </p>
          <p className="mb-2 text-xl text-blue-500 md:flex justify-between">
            <span className="mb-1 inline-block">✔ 99.5% Pass Rate</span>
            <span className="mb-1 inline-block">
              ✔ Download Any 15 Files Monthly
            </span>
          </p>
          <p className="mb-2 mt-4 text-xl text-gray-500">
            Take advantage of premium Files which are Latest and valid by
            Study4Pass!
          </p>
          <Link
            href={"/all-te-exams-list"}
            className="mb-8 text-lg hover:text-blue-600 hover:underline text-blue-500"
          >
            All Exams List Available in Unlimited Test Engine & PDF Download
            Access
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-center -mx-3">
          <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
            <div className="relative pt-12 pb-10 px-10 bg-blue-50 lg:text-center">
              <span className="absolute top-0 left-0 w-1/2 py-2 bg-blue-100 clip-path-right-badge text-center text-sm leading-8 font-medium uppercase text-blue-800 tracking-widest">
                1 Month (PDF)
              </span>
              <div className="mt-8 mb-8">
                <p className="text-4xl font-semibold text-blue-800">
                  ${data?.pdf_price}
                  <span className="text-xl text-gray-500 mx-2">/</span>
                  <span className="text-xl text-red-600 line-through">
                    ${data?.pdf_full_price}
                  </span>
                </p>
              </div>
              <button
                className="block py-5 text-sm text-center text-blue-800 uppercase font-bold w-full leading-normal border-2 border-blue-800 hover:bg-blue-200 bg-white transition duration-200"
                onClick={() => handleBoxClick({ cart: data.pdf_cart })}
              >
                Buy Now
              </button>
              <ul className="mt-6 text-left">
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">1 Month Duration</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Printable PDF File</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Activation Valid for 3 Months</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Monthly 15 Downloads</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">No Daily Download Limit</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Free Updates</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">24/7 Email and Chat Support</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">All New Exams for FREE</p>
                </li>
                <li className="flex items-center mb-6">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Priority Updates</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
            <div className="relative pt-12 pb-10 px-10 bg-blue-50 lg:text-center">
              <span className="absolute top-0 left-0 w-1/2 py-2 bg-blue-100 clip-path-right-badge text-center text-sm leading-8 font-medium uppercase text-blue-800 tracking-widest">
                1 Month (Test Engine)
              </span>
              <div className="mt-8 mb-8">
                <p className="text-4xl font-semibold text-blue-800">
                  ${data?.te_price}
                  <span className="text-xl text-gray-500 mx-2">/</span>
                  <span className="text-xl text-red-600 line-through">
                    ${data?.te_full_price}
                  </span>
                </p>
              </div>
              <button
                className="block py-5 text-sm text-center text-blue-800 uppercase font-bold w-full leading-normal border-2 border-blue-800 hover:bg-blue-200 bg-white transition duration-200"
                onClick={() => handleBoxClick({ cart: data.te_cart })}
              >
                Buy Now
              </button>
              <ul className="mt-6 text-left">
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">1 Month Duration</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">
                    1 Activation Key for Each Exam
                  </p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Activation Valid for 3 Months</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Monthly 15 Downloads</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">No Daily Download Limit</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Free Updates</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">24/7 Email and Chat Support</p>
                </li>
                <li className="flex items-center mb-4">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">All New Exams for FREE</p>
                </li>
                <li className="flex items-center mb-6">
                  <svg
                    className="mr-4 h-5 w-5 text-blue-300"
                    viewBox="0 0 20 15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.775 10.9984L17.975 0L20 1.98854L6.775 15L0 8.37152L2.05 6.35843L6.775 10.9984Z"
                    ></path>
                  </svg>
                  <p className="text-gray-500">Priority Updates</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: snackbarMessage.includes("already")
              ? "red"
              : "green",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:cart-outline"
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              {snackbarMessage}
            </span>
          }
        />
      </Snackbar>
    </section>
  );
};

export default UACard;
