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

export async function generateMetadata({ params }) {
  const response = await fetch(
    `${Base_URL}/v1/certification/${params.cert_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const data = await response.json();
  let shouldIndex = true;
  if (data.cert_title === null) {
    shouldIndex = false;
  }

  return {
    title: `Updated ${data.cert_title} Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of ${data.cert_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: shouldIndex,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/study-meterial-certification/${params.vendor_perma}/${params.cert_perma}`,
        },
      ],
    },
  };
}
