/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";
import VendorAndCerts from "../components/AllVendor&Certs/VendorAndCerts";

const page = async ({ searchParams }) => {
  const vendorResponce = await fetch(`${Base_URL}/v1/vendors`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!vendorResponce.ok) {
    throw new Error(`HTTP error! Status: ${vendorResponce.status}`);
  }

  const vendorData = await vendorResponce.json();
  const certsResponce = await fetch(`${Base_URL}/v1/certifications`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!certsResponce.ok) {
    throw new Error(`HTTP error! Status: ${certsResponce.status}`);
  }

  const certData = await certsResponce.json();

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();

  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  const referral = searchParams?.ref || "";
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Study Meterial Providers",
            description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
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
      <VendorAndCerts data={data} certData={certData} vendorData={vendorData} />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/study-meterial-providers`,
        },
      ],
    },
  };
}
