import Link from "next/link";
import UACard from "../components/UnlimitedAccessCard/UACard";
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";

const Page = async () => {
  const response = await fetch(
    `${Base_URL}/v1/unlimited_access/?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const data = await response.json();

  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  return (
    <>
      <section className="pt-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <UACard data={data} />
    </>
  );
};

export default Page;

export async function generateMetadata() {
  return {
    title: `Study4Pass Unlimited Access`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://study4pass.com/unlimited-access",
    },
  };
}
