/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";
import VendorAndCerts from "../components/AllVendor&Certs/VendorAndCerts";

const page = async () => {
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
  return (
    <VendorAndCerts data={data} certData={certData} vendorData={vendorData} />
  );
};

export default page;
