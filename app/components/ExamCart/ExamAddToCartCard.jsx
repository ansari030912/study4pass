/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify/react";
import { Box, Snackbar, SnackbarContent } from "@mui/material";
import { useState } from "react";

const ExamAddToCartCard = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState(
    examData?.exam_prices?.length > 0 ? examData?.exam_prices[0].type : ""
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleAddToCart = () => {
    // Retrieve the existing cart data from local storage
    const existingCartData =
      JSON.parse(localStorage.getItem("CartProducts")) || [];

    // Find the selected exam data based on the selected option
    const selectedExam = examData.exam_prices.find(
      (option) => option.type === selectedOption
    );

    // Check if the item is already in the cart
    const isItemInCart = existingCartData.some(
      (cartItem) => cartItem.cart === selectedExam.cart
    );

    if (!isItemInCart) {
      // If the item is not already in the cart, add it
      const cartData = {
        cart: selectedExam.cart, // Save the unique cart identifier
        saveExam: true,
      };

      existingCartData.push(cartData);

      // Save the updated array back to local storage
      localStorage.setItem("CartProducts", JSON.stringify(existingCartData));

      // Set the success message and open the snackbar
      setSnackbarMessage("Product added to cart!");
      setSnackbarOpen(true);

      // Optionally reload the page
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
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: "1rem",
        position: "relative",
      }}
    >
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

      <div className="md:mt-6">
        <div
          style={{ paddingBottom: "1rem", borderBottom: "1px solid #e5e7eb" }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {selectedOption && (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    borderRadius: "0.5rem",
                    padding: "0.5rem",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {
                    examData.exam_prices.find(
                      (option) => option.type === selectedOption
                    ).title
                  }
                </div>
                <div
                  style={{
                    backgroundColor: "#d1fae5",
                    fontSize: "1.125rem",
                    color: "#059669",
                    borderRadius: "0.5rem",
                    padding: "0.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {
                    examData.exam_prices.find(
                      (option) => option.type === selectedOption
                    ).off
                  }
                  % Off
                </div>
              </div>
            )}
          </p>
        </div>

        <div style={{ padding: "1.5rem 0" }}>
          {examData?.exam_prices?.map((option) => (
            <div key={option.type}>
              <label
                style={{
                  display: "flex",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                }}
              >
                <input
                  type="radio"
                  name="pricingOption"
                  checked={selectedOption === option.type}
                  onChange={() => handleChange(option.type)}
                />
                <Box
                  className="py-2"
                  style={{
                    display: "flex",
                    width: "100%",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    marginLeft: "0.5rem",
                    backgroundColor:
                      selectedOption === option.type ? "#f2f7ff" : "white",
                    border:
                      selectedOption === option.type ? "1px solid #7fb2ff" : "",
                    borderRadius: "0.5rem",
                    boxShadow:
                      selectedOption === option.type
                        ? "0px 0px 8px rgba(0, 0, 0, 0.5)"
                        : "",
                  }}
                >
                  <img
                    className="hidden lg:inline-flex"
                    style={{
                      borderRadius: "0.5rem",
                      height: "5rem",
                      marginRight: "0.5rem",
                    }}
                    src="/PDF-TE.png"
                    alt={option.title}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ fontSize: "1.125rem", fontWeight: "bold" }}>
                      {option.off === "70" && (
                        <span
                          style={{
                            backgroundColor: "#e9d8fd",
                            padding: "0.25rem 0.75rem",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                            borderRadius: "0.25rem",
                            color: "#9f7aea",
                            marginRight: "0.25rem",
                          }}
                        >
                          Best Selling
                        </span>
                      )}
                      {option.off === "70" && <br />}
                      {option.title}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          color: "#059669",
                          fontWeight: "bold",
                        }}
                      >
                        ${option.price}
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "1rem",
                          color: "#ef4444",
                          textDecoration: "line-through",
                          fontWeight: "bold",
                        }}
                      >
                        ${option.full_price}
                      </span>
                    </div>
                  </div>
                </Box>
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: "#111827",
            borderRadius: "0.5rem",
            height: "3rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
        >
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ExamAddToCartCard;
