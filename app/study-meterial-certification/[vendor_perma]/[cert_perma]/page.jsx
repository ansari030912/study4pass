/* eslint-disable @next/next/no-img-element */
import CertificationCourses from "@/app/components/CertificationsCards/CertificationCourses";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import Link from "next/link";
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

  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data?.cert_single_exam?.exam_faqs?.map((faq) => ({
              "@type": "Question",
              name: faq.faq_q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.faq_a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: data?.cert_title,
            description: `Study4Pass is a premium provider of Real and Valid Study Meterial of ${data.cert_title}  IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.4,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      <section className="pt-6 px-6 bg-gray-100">
        <Link href={imageUrl?.banner_link} className="flex justify-center ">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <CertificationCourses data={data} />
    </>
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
