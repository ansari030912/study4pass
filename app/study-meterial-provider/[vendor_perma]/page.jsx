import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import VendorExamsTable from "@/app/components/ExamsTable/VendorExamsTable";
import React from "react";

const page = async ({ params }) => {
  const vendorResponce = await fetch(
    `${Base_URL}/v1/vendor/${params.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  const vendorData = await vendorResponce.json();
  return <VendorExamsTable vendorData={vendorData} />;
};

export default page;

export async function generateMetadata({ params }) {
  const response = await fetch(`${Base_URL}/v1/vendor/${params.vendor_perma}`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const metaDATA = await response.json();
  return {
    title: `Updated ${params.vendor_perma} Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of ${params.vendor_perma} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: metaDATA?.index_tag,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/study-meterial-provider/${params?.vendor_perma}`,
        },
      ],
    },
  };
}
