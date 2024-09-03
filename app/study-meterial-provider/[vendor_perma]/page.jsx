import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import VendorExamsTable from "@/app/components/ExamsTable/VendorExamsTable";
import Link from "next/link";
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
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();
  return (
    <>
      {" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: vendorData?.vendor_title,
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${vendorData?.vendor_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
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
      <section className="pt-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <VendorExamsTable vendorData={vendorData} />
    </>
  );
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
