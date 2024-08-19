import React from "react";
import CheckOut from "../components/Cart/CheckOut";

const page = () => {
  return <CheckOut />;
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    referrer: "no-referrer",
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/cart`,
        },
      ],
    },
  };
}
