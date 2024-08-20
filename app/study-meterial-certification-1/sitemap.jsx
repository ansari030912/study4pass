export default async function sitemap() {
  const response = await fetch(
    "https://certsgang.com/v1/sitemap/certification/1",
    {
      headers: {
        "x-api-key": "b46279cb-13bb-4445-a6f9-6f252b61ae79",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  

  return data?.certs?.map((item) => ({
    url: `https://study4pass.com/study-meterial-certification/${
      item?.vendor_perma
    }/${item?.cert_perma.replace(/&/g, "&amp;")}`,
    lastModified: "2024-08-18",
    priority: 0.6,
  }));
}
