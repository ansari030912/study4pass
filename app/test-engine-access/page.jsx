/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomCaresolTestEngine from "../components/CustomCaresolTestEngine";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const page = async () => {
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();
  return (
    <>
      <section class="pt-6 px-6 pb-6">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <section>
        <div className="container px-4 mx-auto">
          <Grid container>
            <Grid item xs={12} lg={7} className=" px-4 mb-2 lg:mb-0">
              <h2 className="font-semibold uppercase text-xl lg:text-3xl mb-4 max-w-4xl">
                Download FREE Study4Pass Exam Test Engine Simulator
              </h2>
              <h3 className="text-gray-800">
                Use Study4Pass Test Engine to open .study4pass files
              </h3>
              <ul className="list-none mx-4 py-5 p-0">
                <li className="py-1">
                  <strong className="text-green-500">✔</strong>
                  <span>Realistic exam simulation</span>
                </li>
                <li className="py-1">
                  <strong className="text-green-500">✔</strong>
                  <span>Several different question types</span>
                </li>
                <li className="py-1">
                  <strong className="text-green-500">✔</strong>
                  <span>Customizable exam taking mode</span>
                </li>
                <li className="py-1">
                  <strong className="text-green-500">✔</strong>
                  <span>Whole exam in a single file</span>
                </li>
                <li className="py-1">
                  <strong className="text-green-500">✔</strong>
                  <span>Open unlimited exam files</span>
                </li>
                <li className="py-1">
                  <strong className="text-green-500">✔</strong>
                  <span>
                    No extra charges to use Test Engine (Totally FREE)
                  </span>
                </li>
              </ul>
              <div className=" lg:hidden">
                <CustomCaresolTestEngine />
              </div>
              <div className="mt-2 -pb-6">
                <Link
                  href={
                    "https://releases.examprince.com/ExamPrinceTestEngine.zip"
                  }
                  type="button"
                  className="text-gray-700 flex justify-center border-2 hover:bg-blue-500 hover:text-white border-gray-700 font-medium  text-sm px-5 py-2.5 text-center mb-2"
                >
                  <b style={{ textAlign: "center" }}>
                    Download for windows (.zip)
                  </b>
                </Link>
                <Link
                  type="button"
                  href={
                    "https://releases.examprince.com/ExamPrinceTestEngine.exe"
                  }
                  className="text-gray-700 flex justify-center border-2 hover:bg-blue-500 hover:text-white border-gray-700 font-medium  text-sm px-5 py-2.5 text-center mb-2"
                >
                  <b>Download for windows (.exe)</b>
                </Link>
              </div>{" "}
            </Grid>
            <Grid item lg={5}>
              <div className="hidden lg:block">
                <CustomCaresolTestEngine />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default page;
