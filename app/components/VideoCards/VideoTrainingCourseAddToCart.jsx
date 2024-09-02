"use client";
import { Icon } from "@iconify/react";
import { Snackbar, SnackbarContent } from "@mui/material";
import { useState } from "react";

const VideoTrainingCourseAddToCart = ({ data }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleBoxClick = (item) => {
    console.log("🚀 ~ handleBoxClick ~ item:", item);
    // Retrieve the existing cart data from local storage
    const existingCartData =
      JSON.parse(localStorage.getItem("CartProducts")) || [];

    // Check if the item is already in the cart
    const isItemInCart = existingCartData.some(
      (cartItem) => cartItem.cart === data.cart
    );

    if (!isItemInCart) {
      // If the item is not already in the cart, add it
      const cartData = {
        cart: data.cart,
        saveExam: true,
      };

      existingCartData.push(cartData);

      // Save the updated array back to local storage
      localStorage.setItem("CartProducts", JSON.stringify(existingCartData));

      // Open the snackbar to show a success message
      setSnackbarMessage("Product added to cart!");
      setSnackbarOpen(true);

      // Reload the page
      window.location.reload();
    } else {
      // Display an error message that the item is already in the cart
      setSnackbarMessage("Item already in the cart");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: snackbarMessage === "Product added to cart!" ? "green" : "red",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon={snackbarMessage === "Product added to cart!" ? "mdi:cart-outline" : "mdi:alert-circle-outline"}
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              {snackbarMessage}
            </span>
          }
        />
      </Snackbar>
      <div className="w-full px-2 mb-2  md:mb-0">
        <button
          onClick={handleBoxClick}
          className="block py-2 px-5 w-full leading-8 font-heading font-medium tracking-tighter text-lg text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-sm"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default VideoTrainingCourseAddToCart;
