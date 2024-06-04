/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const AboutCard = () => {
  return (
    <section class="pt-16 bg-wite">
      <div class="container mx-auto px-4">
        <h1 class="font-heading tracking-tight text-gray-700 text-center text-4xl md:text-6xl font-medium max-w-lg md:max-w-3xl mx-auto mb-6">
          Pass Your Exams With The Help Of IT Certified Courses
        </h1>
        <p class="tracking-tight text-gray-700 text-center text-xl font-semibold mb-10">
          Use Exmaprince Test Engine to Open PDF & ZIP file.
        </p>
        <div class="flex flex-wrap justify-center gap-4 pb-16">
          <Link
            href="#"
            class="bg-black h-16 rounded-full px-6 py-4 inline-flex items-center justify-center hover:bg-gray-800 focus:bg-gray-700 focus:ring-2 focus:ring-gray-600 transition duration-200 tracking-tight font-bold text-white"
          >
            Check Now
          </Link>
          <Link
            href="#"
            class="bg-white h-16 border border-gray-200 rounded-full px-6 py-2 inline-flex items-center justify-center hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-200 transition duration-200 tracking-tight font-bold"
          >
            Download Demo
          </Link>
        </div>
        <img class="mx-auto" src="/shapes2.svg" alt="" />
      </div>
    </section>
  );
};

export default AboutCard;
