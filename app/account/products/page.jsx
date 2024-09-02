"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Base_URL } from "@/app/URL's/Base_URL";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import Link from "next/link";

const ProductPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(`${Base_URL}/v1/account/products`, {
        headers: {
          "x-api-key": X_API_Key,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="my-6 text-3xl font-bold text-blue-500 border-b pb-8">
            <h2>Purchased Products</h2>
          </div>
          <div className="flex flex-wrap -m-3">
            {data.map((row, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/4 p-3">
                <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
                  <div className="flex flex-col justify-center items-center px-4 pt-2 pb-4 border-b border-coolGray-100">
                    <img
                      className="mb-4 h-36 border-b"
                      src={"/PDF-TE.png"}
                      alt={row.product_name}
                    />
                    <h2 className="text-base font-medium text-blue-500">
                      {row.product_vendor
                        ? row.product_vendor
                        : row.product_type_detail}
                      {row.product_code !== "Unlimited Test Engine Access" &&
                      row.product_code !== "Unlimited PDF Access"
                        ? ` - ${row.product_code}`
                        : ""}
                    </h2>
                    <h3 className="mb-3 text-xs font-medium text-green-500">
                      {row.product_name}
                    </h3>
                    <div className="flex justify-between w-full mb-3 border-b pb-3">
                      <p className="text-gray-500 font-semibold">
                        {moment(row.product_expiry_date).format("LL")}
                      </p>
                      <p
                        className={`font-bold ${
                          row.product_expired
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {row.product_expired ? "Expired" : "Active"}
                      </p>
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                      {row.product_access.some(
                        (product) => product.type === "download_pdf"
                      ) && (
                        <Link
                          href={`https://certsgang.com${
                            row.product_access.find(
                              (product) => product.type === "download_pdf"
                            )?.url
                          }`}
                          className="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.4em"
                            height="1.4em"
                            className="mr-2"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493zh9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1z"
                            />
                          </svg>
                          Download PDF
                        </Link>
                      )}

                      {row.product_access.some(
                        (product) => product.type === "te_access"
                      ) && (
                        <Link
                          href={`/te-access/${
                            row.product_access.find(
                              (product) => product.type === "te_access"
                            )?.prams?.payment_id
                          }/${
                            row.product_access.find(
                              (product) => product.type === "te_access"
                            )?.prams?.exam_id
                          }/${
                            row.product_access.find(
                              (product) => product.type === "te_access"
                            )?.prams?.rel_id
                          }`}
                          className="flex items-center px-4 py-2 font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.4em"
                            height="1.4em"
                            className="mr-2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7.853.717a1.2 1.2 0 0 0-.65.17L4.53 2.49c-.53.317-.732.984-.467 1.543l.93 1.958a9.2 9.2 0 0 0-1.745 3.076l-2.124.135A1.2 1.2 0 0 0 0 10.399v3.116a1.2 1.2 0 0 0 1.084 1.194l2.171.21a9.2 9.2 0 0 0 1.748 3.066l-.941 1.982a1.2 1.2 0 0 0 .467 1.543l2.673 1.603a1.2 1.2 0 0 0 1.605-.347l1.22-1.771a9.2 9.2 0 0 0 1.971.216l.096-.004a9.2 9.2 0 0 0 1.876-.212l1.22 1.77a1.2 1.2 0 0 0 1.606.348l2.673-1.603c.53-.317.732-.984.467-1.543l-.941-1.982q.035-.036.07-.076c.066-.077.125-.159.188-.238a9.2 9.2 0 0 0 1.484-2.736l2.138-.137A1.2 1.2 0 0 0 24 13.601v-3.116a1.2 1.2 0 0 0-1.084-1.194V9.29l-2.16-.21a9.2 9.2 0 0 0-1.501-2.786q-.093-.12-.19-.238q-.028-.033-.058-.065l.93-1.958a1.2 1.2 0 0 0-.467-1.543L16.797.887a1.2 1.2 0 0 0-1.605.347L13.99 2.976a9 9 0 0 0-1.896-.219c-.033 0-.064-.004-.096-.004a9.2 9.2 0 0 0-1.992.223L8.808 1.234a1.2 1.2 0 0 0-.955-.517m4.148 3.882c.574 0 1.13.072 1.668.197a7.41 7.41 0 0 1 5.384 4.993a7.4 7.4 0 0 1 .332 2.193c0 .764-.116 1.5-.332 2.193a7.41 7.41 0 0 1-5.384 4.992a7.4 7.4 0 0 1-1.668.199c-4.071 0-7.384-3.313-7.384-7.384s3.313-7.383 7.384-7.383M11.907 6C9.558 6 8.429 7.207 8.429 7.207c3.501-1.577 5.23 2.986 6.702 4.386s2.887.203 2.887.203c-.012-.787-.252-1.533-.252-1.533c-.968.168-1.398-.494-1.97-1.252S13.561 6 11.907 6m-3.84 3.228c-.705.015-1.3.35-1.653 1c-.868 1.601-.096 3.64-.096 3.64s.3-1.532 1.537-1.309c1.238.224 1.754 1.208 2.504 1.985c.75.776 1.895 2.064 3.978 2.064c2.082 0 3.018-1.516 3.435-2.937v-.002l-.053.04c-1.265.98-3.335.882-4.548-.275c-.89-.846-1.403-1.908-2.135-2.68c-.981-1.038-2.065-1.545-2.97-1.526z"
                            />
                          </svg>
                          Test Engine Access
                        </Link>
                      )}

                      {row.product_access.some(
                        (product) => product.type === "sc_access"
                      ) && (
                        <Link
                          href={`/sc-access/${
                            row.product_access.find(
                              (product) => product.type === "sc_access"
                            )?.prams?.payment_id
                          }/${
                            row.product_access.find(
                              (product) => product.type === "sc_access"
                            )?.prams?.exam_id
                          }`}
                          className="flex items-center px-4 py-2 font-medium text-sm text-white bg-red-600 hover:bg-red-700 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5em"
                            height="1.5em"
                            className="mr-2"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M216 36H40a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 120H44V60h168Zm24 52a12 12 0 0 1-12 12H32a12 12 0 0 1 0-24h192a12 12 0 0 1 12 12m-132-80V88a12 12 0 0 1 18.36-10.18l32 20a12 12 0 0 1 0 20.36l-32 20A12 12 0 0 1 104 128"
                            />
                          </svg>
                          Start Training Course
                        </Link>
                      )}

                      {row.product_access.some(
                        (product) => product.type === "unlimited_te_access"
                      ) && (
                        <Link
                          href={`/unlimited-te-access/${
                            row.product_access.find(
                              (product) =>
                                product.type === "unlimited_te_access"
                            )?.prams?.payment_id
                          }/${
                            row.product_access.find(
                              (product) =>
                                product.type === "unlimited_te_access"
                            )?.prams?.rel_id
                          }`}
                          className="flex items-center px-4 py-2 font-medium text-sm text-white bg-purple-500 hover:bg-purple-600 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.4em"
                            height="1.4em"
                            className="mr-2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7.853.717a1.2 1.2 0 0 0-.65.17L4.53 2.49c-.53.317-.732.984-.467 1.543l.93 1.958a9.2 9.2 0 0 0-1.745 3.076l-2.124.135A1.2 1.2 0 0 0 0 10.399v3.116a1.2 1.2 0 0 0 1.084 1.194l2.171.21a9.2 9.2 0 0 0 1.748 3.066l-.941 1.982a1.2 1.2 0 0 0 .467 1.543l2.673 1.603a1.2 1.2 0 0 0 1.605-.347l1.22-1.771a9.2 9.2 0 0 0 1.971.216l.096-.004a9.2 9.2 0 0 0 1.876-.212l1.22 1.77a1.2 1.2 0 0 0 1.606.348l2.673-1.603c.53-.317.732-.984.467-1.543l-.941-1.982q.035-.036.07-.076c.066-.077.125-.159.188-.238a9.2 9.2 0 0 0 1.484-2.736l2.138-.137A1.2 1.2 0 0 0 24 13.601v-3.116a1.2 1.2 0 0 0-1.084-1.194V9.29l-2.16-.21a9.2 9.2 0 0 0-1.501-2.786q-.093-.12-.19-.238q-.028-.033-.058-.065l.93-1.958a1.2 1.2 0 0 0-.467-1.543L16.797.887a1.2 1.2 0 0 0-1.605.347L13.99 2.976a9 9 0 0 0-1.896-.219c-.033 0-.064-.004-.096-.004a9.2 9.2 0 0 0-1.992.223L8.808 1.234a1.2 1.2 0 0 0-.955-.517m4.148 3.882c.574 0 1.13.072 1.668.197a7.41 7.41 0 0 1 5.384 4.993a7.4 7.4 0 0 1 .332 2.193c0 .764-.116 1.5-.332 2.193a7.41 7.41 0 0 1-5.384 4.992a7.4 7.4 0 0 1-1.668.199c-4.071 0-7.384-3.313-7.384-7.384s3.313-7.383 7.384-7.383M11.907 6C9.558 6 8.429 7.207 8.429 7.207c3.501-1.577 5.23 2.986 6.702 4.386s2.887.203 2.887.203c-.012-.787-.252-1.533-.252-1.533c-.968.168-1.398-.494-1.97-1.252S13.561 6 11.907 6m-3.84 3.228c-.705.015-1.3.35-1.653 1c-.868 1.601-.096 3.64-.096 3.64s.3-1.532 1.537-1.309c1.238.224 1.754 1.208 2.504 1.985c.75.776 1.895 2.064 3.978 2.064c2.082 0 3.018-1.516 3.435-2.937v-.002l-.053.04c-1.265.98-3.335.882-4.548-.275c-.89-.846-1.403-1.908-2.135-2.68c-.981-1.038-2.065-1.545-2.97-1.526z"
                            />
                          </svg>
                          Unlimited TE Access
                        </Link>
                      )}

                      {row.product_access.some(
                        (product) => product.type === "unlimited_pdf_access"
                      ) && (
                        <Link
                          href={`/unlimited-pdf-access/${
                            row.product_access.find(
                              (product) =>
                                product.type === "unlimited_pdf_access"
                            )?.prams?.payment_id
                          }/${
                            row.product_access.find(
                              (product) =>
                                product.type === "unlimited_pdf_access"
                            )?.prams?.rel_id
                          }`}
                          className="flex items-center px-4 py-2 font-medium text-sm text-white bg-pink-500 hover:bg-pink-600 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.4em"
                            height="1.4em"
                            className="mr-2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M3 1h12.414L21 6.586V11h-2V9h-6V3H5v18h16v2H3zm12 2.414V7h3.586zM6 12h3.714c.71 0 1.286.576 1.286 1.286v2.428c0 .71-.576 1.286-1.286 1.286H8v3H6zm2 3h1v-1H8zm3.5-3h3.714c.71 0 1.286.576 1.286 1.286v5.428c0 .71-.576 1.286-1.286 1.286H11.5zm2 2v4h1v-4zm3.5-.714c0-.71.576-1.286 1.286-1.286h3.38v2H19v1h2.667v2H19v3h-2z"
                            />
                          </svg>
                          Unlimited PDF Access
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
