/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const VideoCourseTable = ({ data }) => {
  const categories = data.map((vendor) => vendor.vendor_title);
  const [accordionCategory, setAccordionCategory] = useState(true);
  const [selectedVendor, setSelectedVendor] = useState(categories[0]);
  console.log("🚀 ~ VideoCourseTable ~ selectedVendor:", selectedVendor);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Ensure the first vendor is selected by default
    if (categories.length > 0 && !selectedVendor) {
      setSelectedVendor(categories[0]);
    }
  }, [categories, selectedVendor]);

  const handleRadioChange = (vendorTitle) => {
    setSelectedVendor(vendorTitle);
    setSearchTerm(""); // Clear search term when changing vendor
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const selectedVendorData = data.find(
    (vendor) => vendor.vendor_title === selectedVendor
  );

  const filteredCourses = selectedVendorData
    ? selectedVendorData.training_courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.perma.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <section className="pt-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between flex-wrap mb-6">
          <div>
            <h1 className="font-heading text-rhino-700 text-2xl font-semibold">
              Found {filteredCourses.length} results for
            </h1>
            <p className="text-rhino-300">Video Courses</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search by name or code"
              value={searchTerm}
              onChange={handleSearchChange}
              className="rounded-sm border border-coolGray-200 py-3 px-4 text-coolGray-400 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full bg-white md:w-1/3 lg:w-1/4 px-4">
            <div className="py-6 border-b border-t border-coolGray-200">
              <div
                className="flex justify-between items-center flex-wrap gap-4 cursor-pointer"
                onClick={() => setAccordionCategory(!accordionCategory)}
              >
                <p className="text-rhino-700 font-semibold">Category</p>
                <span
                  className={`inline-block transform ${
                    accordionCategory ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12.2725 16.1666C12.1769 16.1667 12.0822 16.1479 11.9939 16.1113C11.9055 16.0747 11.8253 16.021 11.7578 15.9533L6.21332 10.4092C6.07681 10.2727 6.00012 10.0876 6.00012 9.89454C6.00012 9.70149 6.07681 9.51635 6.21332 9.37984C6.34983 9.24333 6.53497 9.16665 6.72802 9.16665C6.92107 9.16665 7.10621 9.24334 7.24271 9.37984L12.2725 14.4092L17.3023 9.37982C17.4388 9.24332 17.6239 9.16663 17.817 9.16663C18.01 9.16663 18.1952 9.24331 18.3317 9.37982C18.4682 9.51632 18.5449 9.70147 18.5449 9.89452C18.5449 10.0876 18.4682 10.2727 18.3317 10.4092L12.7872 15.9534C12.7197 16.0211 12.6394 16.0748 12.5511 16.1114C12.4628 16.148 12.3681 16.1667 12.2725 16.1666Z"
                      fill="#252E4A"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                style={
                  accordionCategory ? { height: "auto" } : { height: "0px" }
                }
                className="overflow-hidden duration-500"
              >
                <ul className="text-coolGray-700 flex flex-col gap-2 mt-4">
                  {categories.map((category) => (
                    <li key={category} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="vendor"
                        checked={selectedVendor === category}
                        onChange={() => handleRadioChange(category)}
                      />
                      <span
                        className="hover:text-coolGray-800 transition duration-200 cursor-pointer"
                        onClick={() => handleRadioChange(category)}
                      >
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-8 w-full md:w-2/3 lg:w-3/4 px-4">
            <div className="flex flex-wrap -mx-4">
              {filteredCourses.map((course) => (
                <ProductCard key={course.title} product={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => (
  <div className="w-full sm:w-1/2 mb-10 lg:w-1/3 px-4">
    <Link
      className="block  text-gray-600 hover:text-blue-500 bg-white group"
      href={`training-courses/${product.perma}`}
    >
      <div className="w-full relative flex-1 p-6 border-2 border-transparent group-hover:border-blue-300 transition duration-150">
        <img src={`https://video.dumpsarena.com/img/${product?.image}`} alt={product.title} />
        <p
          style={{ fontSize: "14px", fontWeight: 500 }}
          className="text-center mt-4 font-black"
        >
          {product.title}
        </p>
      </div>
    </Link>
  </div>
);

export default VideoCourseTable;
