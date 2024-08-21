/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ExamAddToCartCard = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState(
    examData.exam_prices[0].type
  );
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handleChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleAddToCart = () => {
    const selectedExam = examData.exam_prices.find(
      (option) => option.type === selectedOption
    );

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
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart"); // Redirect to the cart page
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
          {examData.exam_prices.map((option) => (
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
            marginBottom: "0.5rem",
            transition: "background-color 0.2s",
          }}
        >
          <span>Add to Cart</span>
        </button>

        <button
          onClick={handleBuyNow}
          style={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            height: "3rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111827",
            fontWeight: "bold",
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "background-color 0.2s",
            gap: "0.5rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z"
              fill="#1E2238"
            ></path>
          </svg>
          <span> Buy Now</span>
        </button>
      </div>
    </div>
  );
};

export default ExamAddToCartCard;
