"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const shuffleArray = (array) => {
  for (let i = array?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ExamLinks = ({ vendorData, vendorTitle, data }) => {
  const [storedVendorData, setStoredVendorData] = useState([]);
  const [displayedExams, setDisplayedExams] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (data?.is_disabled) {
      router.push("/");
    }
  }, [data, router]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(vendorTitle));

    if (existingData) {
      setStoredVendorData(existingData);
      if (existingData?.vendor_exams?.length <= 5) {
        localStorage.removeItem(vendorTitle);
      } else {
        setDisplayedExams(
          shuffleArray(existingData?.vendor_exams)?.slice(0, 5)
        );
      }
    } else {
      localStorage.setItem(vendorTitle, JSON.stringify(vendorData));
      setStoredVendorData(vendorData);
      setDisplayedExams(shuffleArray(vendorData?.vendor_exams).slice(0, 5));
    }
  }, [vendorData, vendorTitle]);

  const handleLinkClick = () => {
    const displayedExamIds = displayedExams.map((exam) => exam.exam_id);
    const updatedStoredExams = storedVendorData?.vendor_exams?.filter(
      (exam) => !displayedExamIds?.includes(exam.exam_id)
    );
    const updatedStoredData = {
      ...storedVendorData,
      vendor_exams: updatedStoredExams,
    };
    localStorage.setItem(vendorTitle, JSON.stringify(updatedStoredData));
  };

  return (
    <div className="px-6 pt-8 pb-8 bg-gray-50">
      <div className="mx-auto container">
        <div className="-mx-3 -mb-4 items-center">
          <div className="px-3 mb-4">
            <h2 className="font-heading text-lg md:text-xl lg:text-2xl text-gray-600 px-4 font-black tracking-tight">
              OTHER USEFUL RELATED EXAMS BY -{" "}
              <span className="text-blue-500">
                {storedVendorData?.vendor_title}
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full mt-6 py-4 px-2 overflow-x-auto">
          <table className="w-full min-w-max ">
            <tbody>
              {displayedExams.map((topic, index) => (
                <tr
                  style={{
                    boxShadow:
                      index % 2 === 0
                        ? "0px 4px 4px rgba(0, 0, 0, 0.04), 0px -4px 4px rgba(0, 0, 0, 0.04), 4px 0px 4px rgba(0, 0, 0, 0.04), -4px 0px 4px rgba(0, 0, 0, 0.04)"
                        : "",
                  }}
                  key={topic.exam_id}
                  className="hover:text-blue-500 text-gray-700 rounded-xl"
                >
                  <td className="p-0">
                    <div
                      className={`h-16 p-5 ${
                        index % 2 === 0
                          ? "bg-white rounded-l-xl border-l-2  border-b-2 border-t-2 border-gray-200"
                          : ""
                      }`}
                    >
                      <Link
                        href={`/study-meterial/${storedVendorData?.vendor_perma}/${topic.exam_perma}`}
                        onClick={handleLinkClick}
                        className="font-black hover:underline"
                      >
                        <h5 className="text-base font-medium ">
                          {topic.exam_title}
                        </h5>
                      </Link>
                    </div>
                  </td>
                  <td className="p-0 text-center">
                    <div
                      className={`h-16 p-5 ${
                        index % 2 === 0
                          ? "bg-white rounded-r-xl border-r-2 border-b-2 border-t-2 border-gray-200"
                          : ""
                      }`}
                    >
                      <Link
                        href={`/study-meterial/${storedVendorData?.vendor_perma}/${topic.exam_perma}`}
                        onClick={handleLinkClick}
                        className="font-black"
                      >
                        <span className="text-base font-medium">
                          <span className="font-semibold">
                            {topic.exam_questions} Questions
                          </span>
                        </span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExamLinks;
