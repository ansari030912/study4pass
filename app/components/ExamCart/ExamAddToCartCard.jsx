/* eslint-disable @next/next/no-img-element */
"use client";
import { Alert, Box } from "@mui/material";
import { useState } from "react";

const ExamAddToCartCard = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState(
    examData?.exam_prices?.length > 0 ? examData?.exam_prices[0].type : ""
  );
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleAddToCart = () => {
    const selectedExam = examData?.exam_prices?.find(
      (option) => option.type === selectedOption
    );

    if (selectedExam) {
      // Save the cart value to local storage with the specified structure
      const cartData = {
        cart: selectedExam.cart,
        saveExam: true,
      };

      // Clear any existing cart data and save the new cart data
      localStorage.removeItem("CartProducts");
      localStorage.setItem("CartProducts", JSON.stringify(cartData));

      // Show alert notification
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds

      // Reload the page
      window.location.reload();
    }
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
      {showAlert && (
        <div
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 1000,
          }}
        >
          <Alert sx={{ backgroundColor: "#D1FAE5" }} severity="success">
            <span className="font-semibold">Product added to cart!</span>
          </Alert>
        </div>
      )}

      <div
        style={{
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.05),0px -4px 4px rgba(0, 0, 0, 0.05),4px 0px 4px rgba(0, 0, 0, 0.05),-4px 0px 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "1.5rem",
          border: "1px solid #e5e7eb",
          padding: "1.5rem",
        }}
      >
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
            // marginBottom: "0.5rem",
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
