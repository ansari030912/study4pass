/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";

const CertificationCourses = ({ data }) => {
  const [category, setCategory] = useState("New Arrival");
  const [accordion, setAccordion] = useState({});

  const handleAccordionToggle = (index) => {
    setAccordion((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const retiredExams = data.cert_multiple_exams.filter(
    (exam) => exam.exam_retired
  );
  const newExams = data.cert_multiple_exams.filter(
    (exam) => !exam.exam_retired
  );

  return (
    <section className="bg-gray-100 p-6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap mt-6 -mx-4">
          <div className="w-full lg:w-3/12 px-4 mb-8 lg:mb-0">
            <div className="bg-indigo-500 rounded">
              <div className="mx-4 py-4 mb-3">
                <span className="py-4 lg:py-0 text-center">
                  <h2 className="text-2xl text-white font-bold">
                    {data.cert_full_name}
                  </h2>
                  <p className="text-indigo-50">{data.vendor_title}</p>
                </span>
              </div>
            </div>
            <div className="p-2 bg-white rounded">
              <ul className="text-sm">
                <li>
                  <a
                    onClick={() => setCategory("New Arrival")}
                    className={`flex p-3 mb-2 items-center font-medium rounded ${
                      category === "New Arrival"
                        ? "text-indigo-500 bg-indigo-50"
                        : "text-gray-500 hover:text-indigo-500 hover:bg-indigo-50"
                    }`}
                    href="#"
                  >
                    <span className="mr-3">
                      <svg
                        className={`${
                          category === "New Arrival"
                            ? "text-indigo-500"
                            : "text-indigo-100"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6663 0.833338H3.33301C2.66997 0.833338 2.03408 1.09673 1.56524 1.56557C1.0964 2.03441 0.833008 2.6703 0.833008 3.33334V16.6667C0.833008 17.3297 1.0964 17.9656 1.56524 18.4344C2.03408 18.9033 2.66997 19.1667 3.33301 19.1667H16.6663C17.3294 19.1667 17.9653 18.9033 18.4341 18.4344C18.9029 17.9656 19.1663 17.3297 19.1663 16.6667V3.33334C19.1663 2.6703 18.9029 2.03441 18.4341 1.56557C17.9653 1.09673 17.3294 0.833338 16.6663 0.833338ZM6.66634 17.5H3.33301C3.11199 17.5 2.90003 17.4122 2.74375 17.2559C2.58747 17.0996 2.49967 16.8877 2.49967 16.6667V15.6833C2.7669 15.7804 3.04872 15.8311 3.33301 15.8333H6.66634V17.5ZM6.66634 14.1667H3.33301C3.11199 14.1667 2.90003 14.0789 2.74375 13.9226C2.58747 13.7663 2.49967 13.5544 2.49967 13.3333V12.35C2.7669 12.447 3.04872 12.4977 3.33301 12.5H6.66634V14.1667ZM6.66634 10.8333H3.33301C3.11199 10.8333 2.90003 10.7455 2.74375 10.5893C2.58747 10.433 2.49967 10.221 2.49967 10V3.33334C2.49967 3.11232 2.58747 2.90036 2.74375 2.74408C2.90003 2.5878 3.11199 2.5 3.33301 2.5H6.66634V10.8333ZM11.6663 17.5H8.33301V12.5H11.6663V17.5ZM11.6663 10.8333H8.33301V2.5H11.6663V10.8333ZM17.4997 16.6667C17.4997 16.8877 17.4119 17.0996 17.2556 17.2559C17.0993 17.4122 16.8874 17.5 16.6663 17.5H13.333V15.8333H16.6663C16.9506 15.8311 17.2324 15.7804 17.4997 15.6833V16.6667ZM17.4997 13.3333C17.4997 13.5544 17.4119 13.7663 17.2556 13.9226C17.0993 14.0789 16.8874 14.1667 16.6663 14.1667H13.333V12.5H16.6663C16.9506 12.4977 17.2324 12.447 17.4997 12.35V13.3333ZM17.4997 10C17.4997 10.221 17.4119 10.433 17.2556 10.5893C17.0993 10.7455 16.8874 10.8333 16.6663 10.8333H13.333V2.5H16.6663C16.8874 2.5 17.0993 2.5878 17.2556 2.74408C17.4119 2.90036 17.4997 3.11232 17.4997 3.33334V10ZM14.9997 5.83334C14.8349 5.83334 14.6737 5.88221 14.5367 5.97378C14.3997 6.06535 14.2928 6.1955 14.2298 6.34777C14.1667 6.50004 14.1502 6.66759 14.1824 6.82925C14.2145 6.9909 14.2939 7.13938 14.4104 7.25593C14.527 7.37247 14.6754 7.45184 14.8371 7.48399C14.9987 7.51615 15.1663 7.49964 15.3186 7.43657C15.4708 7.3735 15.601 7.26669 15.6926 7.12965C15.7841 6.99261 15.833 6.83149 15.833 6.66667C15.833 6.44566 15.7452 6.2337 15.5889 6.07742C15.4326 5.92113 15.2207 5.83334 14.9997 5.83334ZM4.99967 7.5C5.16449 7.5 5.32561 7.45113 5.46265 7.35956C5.59969 7.26799 5.7065 7.13785 5.76957 6.98557C5.83265 6.8333 5.84916 6.66574 5.81699 6.50409C5.78483 6.34243 5.70546 6.19401 5.58891 6.07747C5.47237 5.96092 5.32389 5.88155 5.16223 5.84939C5.00058 5.81723 4.83302 5.83374 4.68075 5.89681C4.52848 5.95988 4.39833 6.06669 4.30676 6.20373C4.21519 6.34077 4.16634 6.50189 4.16634 6.66671C4.16634 6.88772 4.25413 7.09968 4.41041 7.25597C4.5667 7.41225 4.77866 7.50004 4.99967 7.50004V7.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    New Arrival
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setCategory("Retired Exam")}
                    className={`flex p-3  mt-1 items-center font-medium rounded ${
                      category === "Retired Exam"
                        ? "text-indigo-500 bg-indigo-50"
                        : "text-gray-500 hover:text-indigo-500 hover:bg-indigo-50"
                    }`}
                    href="#"
                  >
                    <span className="mr-3">
                      <svg
                        className={`${
                          category === "Retired Exam"
                            ? "text-indigo-500"
                            : "text-indigo-100"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6663 0.833338H3.33301C2.66997 0.833338 2.03408 1.09673 1.56524 1.56557C1.0964 2.03441 0.833008 2.6703 0.833008 3.33334V16.6667C0.833008 17.3297 1.0964 17.9656 1.56524 18.4344C2.03408 18.9033 2.66997 19.1667 3.33301 19.1667H16.6663C17.3294 19.1667 17.9653 18.9033 18.4341 18.4344C18.9029 17.9656 19.1663 17.3297 19.1663 16.6667V3.33334C19.1663 2.6703 18.9029 2.03441 18.4341 1.56557C17.9653 1.09673 17.3294 0.833338 16.6663 0.833338ZM6.66634 17.5H3.33301C3.11199 17.5 2.90003 17.4122 2.74375 17.2559C2.58747 17.0996 2.49967 16.8877 2.49967 16.6667V15.6833C2.7669 15.7804 3.04872 15.8311 3.33301 15.8333H6.66634V17.5ZM6.66634 14.1667H3.33301C3.11199 14.1667 2.90003 14.0789 2.74375 13.9226C2.58747 13.7663 2.49967 13.5544 2.49967 13.3333V12.35C2.7669 12.447 3.04872 12.4977 3.33301 12.5H6.66634V14.1667ZM6.66634 10.8333H3.33301C3.11199 10.8333 2.90003 10.7455 2.74375 10.5893C2.58747 10.433 2.49967 10.221 2.49967 10V3.33334C2.49967 3.11232 2.58747 2.90036 2.74375 2.74408C2.90003 2.5878 3.11199 2.5 3.33301 2.5H6.66634V10.8333ZM11.6663 17.5H8.33301V12.5H11.6663V17.5ZM11.6663 10.8333H8.33301V2.5H11.6663V10.8333ZM17.4997 16.6667C17.4997 16.8877 17.4119 17.0996 17.2556 17.2559C17.0993 17.4122 16.8874 17.5 16.6663 17.5H13.333V15.8333H16.6663C16.9506 15.8311 17.2324 15.7804 17.4997 15.6833V16.6667ZM17.4997 13.3333C17.4997 13.5544 17.4119 13.7663 17.2556 13.9226C17.0993 14.0789 16.8874 14.1667 16.6663 14.1667H13.333V12.5H16.6663C16.9506 12.4977 17.2324 12.447 17.4997 12.35V13.3333ZM17.4997 10C17.4997 10.221 17.4119 10.433 17.2556 10.5893C17.0993 10.7455 16.8874 10.8333 16.6663 10.8333H13.333V2.5H16.6663C16.8874 2.5 17.0993 2.5878 17.2556 2.74408C17.4119 2.90036 17.4997 3.11232 17.4997 3.33334V10ZM14.9997 5.83334C14.8349 5.83334 14.6737 5.88221 14.5367 5.97378C14.3997 6.06535 14.2928 6.1955 14.2298 6.34777C14.1667 6.50004 14.1502 6.66759 14.1824 6.82925C14.2145 6.9909 14.2939 7.13938 14.4104 7.25593C14.527 7.37247 14.6754 7.45184 14.8371 7.48399C14.9987 7.51615 15.1663 7.49964 15.3186 7.43657C15.4708 7.3735 15.601 7.26669 15.6926 7.12965C15.7841 6.99261 15.833 6.83149 15.833 6.66667C15.833 6.44566 15.7452 6.2337 15.5889 6.07742C15.4326 5.92113 15.2207 5.83334 14.9997 5.83334ZM4.99967 7.5C5.16449 7.5 5.32561 7.45113 5.46265 7.35956C5.59969 7.26799 5.7065 7.13785 5.76957 6.98557C5.83265 6.8333 5.84916 6.66574 5.81699 6.50409C5.78483 6.34243 5.70546 6.19401 5.58891 6.07747C5.47237 5.96092 5.32389 5.88155 5.16223 5.84939C5.00058 5.81723 4.83302 5.83374 4.68075 5.89681C4.52848 5.95988 4.39833 6.06669 4.30676 6.20373C4.21519 6.34077 4.16634 6.50189 4.16634 6.66671C4.16634 6.88772 4.25413 7.09968 4.41041 7.25597C4.5667 7.41225 4.77866 7.50004 4.99967 7.50004V7.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Retired Exam
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-9/12 px-4">
            <div className="p-6 bg-white rounded">
              <div>
                {category === "New Arrival" && (
                  <section>
                    <div>
                      <div className="flex pb-4 border-b">
                        <h3 className="text-xl font-bold">New Arrivals</h3>
                      </div>
                      <div className="p-4 overflow-x-auto">
                        <table className="table-auto w-full">
                          <thead>
                            <tr className="text-xs text-gray-500 text-left">
                              <th className="pb-3 font-medium">Exam Title</th>
                              <th className="pb-3 font-medium">Questions</th>
                              <th className="pb-3 font-medium">Vendor</th>
                              <th className="pb-3 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {newExams.map((exam, index) => (
                              <tr
                                className={`text-xs ${
                                  index % 2 === 0 ? "bg-gray-50" : ""
                                }`}
                                key={exam.exam_id}
                              >
                                <td className="py-5 px-6 font-medium">
                                  <Link
                                    className="hover:text-blue-500"
                                    href={`/exam-questions/${exam.exam_vendor_perma}/${exam.exam_perma}`}
                                  >
                                    {exam.exam_title}
                                  </Link>
                                </td>
                                <td className="font-medium">
                                  {exam.exam_questions}
                                </td>
                                <td className="font-medium">
                                  {exam.exam_vendor_title}
                                </td>
                                <td>
                                  <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                                    Active
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                )}
                {category === "Retired Exam" && (
                  <section>
                    <div>
                      <div className="flex pb-4 border-b">
                        <h3 className="text-xl font-bold">Retired Exams</h3>
                      </div>
                      {retiredExams.length === 0 ? (
                        <p className="p-4">No Retired Exams</p>
                      ) : (
                        <div className="p-4 overflow-x-auto">
                          <table className="table-auto w-full">
                            <thead>
                              <tr className="text-xs text-gray-500 text-left">
                                <th className="pb-3 font-medium">Exam Title</th>
                                <th className="pb-3 font-medium">Questions</th>
                                <th className="pb-3 font-medium">Vendor</th>
                                <th className="pb-3 font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {retiredExams.map((exam, index) => (
                                <tr
                                  className={`text-xs ${
                                    index % 2 === 0 ? "bg-gray-50" : ""
                                  }`}
                                  key={exam.exam_id}
                                >
                                  <td className="py-5 px-6 font-medium">
                                    <Link
                                      className="hover:text-blue-500"
                                      href={`/exam-questions/${exam.exam_vendor_perma}/${exam.exam_perma}`}
                                    >
                                      {exam.exam_title}
                                    </Link>
                                  </td>
                                  <td className="font-medium">
                                    {exam.exam_questions}
                                  </td>
                                  <td className="font-medium">
                                    {exam.exam_vendor_title}
                                  </td>
                                  <td>
                                    <span className="inline-block py-1 px-2 text-white bg-red-500 rounded-full">
                                      Retired
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationCourses;
