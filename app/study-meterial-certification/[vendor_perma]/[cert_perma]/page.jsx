import CertificationCourses from "@/app/components/CertificationsCards/CertificationCourses";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import React from "react";

const page = async ({ params }) => {
  const response = await fetch(
    `${Base_URL}/v1/certification/${params.cert_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const data = await response.json();
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <div>
      <CertificationCourses data={data} />
    </div>
  );
};

export default page;
