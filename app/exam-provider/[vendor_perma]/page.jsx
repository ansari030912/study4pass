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
