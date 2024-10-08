/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ExamAddToCartCard from "./ExamAddToCartCard";
import BackCountDown from "../BackCountDown";

const ExamCart = ({ examData }) => {
  return (
    <section className="pt-4 pb-12 px-2">
      <div className="flex flex-wrap -m-4">
        <div className="w-full lg:w-7/12 p-4">
          <div className="rounded-2xl  py-3 px-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="font-heading uppercase px-2 font-semibold text-3xl mb-1">
                  40-70% OFF
                </h2>
                <p className="text-green-500  bg-green-100 p-1 px-3 rounded-lg text-base font-semibold">
                  <span>MEGASALE coupon applied.</span>
                </p>
              </div>
              <span className="inline-block px-4 py-3 bg-red-50 rounded-md text-red-700 text-sm font-semibold">
                Sale End in <BackCountDown />
              </span>
            </div>
          </div>

          <div className="rounded-2xl py-8">
            <h2 className="font-heading uppercase text-3xl mb-4 max-w-4xl">
              Exams Questions - {examData.exam_title}
            </h2>
            <div className="flex justify-center flex-wrap gap-1 mb-2">
              <img
                className="rounded-md object-cover"
                src="/PDF-TE.png"
                alt=""
                height={"350px"}
                width={"350px"}
              />
            </div>
            <p className="text-gray-500 font-semibold mb-4 text-lg max-w-4xl">
              {examData.exam_retired && (
                <>
                  <div className="my-2 text-red-500">
                    <span>NOTE :</span> {examData?.exam_code} (
                    {examData?.exam_title}) will not receive any new updates.
                  </div>
                  {examData?.exam_alternate.exam_alternate_code && (
                    <div className="text-sky-500 flex justify-end mb-2">
                      <span className="text-gray-500 mr-2">New Exam Code:</span>{" "}
                      <Link
                        href={`/exam-questions/${examData?.exam_vendor_perma}/${examData?.exam_alternate?.exam_alternate_perma}`}
                        className="hover:text-blue-600 text-blue-500 font-semibold hover:underline"
                      >
                        {examData?.exam_alternate.exam_alternate_code}
                      </Link>
                    </div>
                  )}
                  <hr />
                </>
              )}
              <div className="flex justify-between my-2">
                <span>Exam Question Provider:</span>{" "}
                <span className="text-sky-500">
                  <Link
                    className="hover:underline"
                    href={`/study-meterial-provider/${examData?.exam_vendor_perma}`}
                  >
                    {examData?.exam_vendor_title}
                  </Link>
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-2">
                <span className="text-nowrap">Certification Name:</span>{" "}
                <span className="text-right text-sky-500">
                  {examData?.exam_certs?.map((item, i) => (
                    <Link
                      key={i}
                      className="hover:underline text-lg text-sky-500"
                      href={`/study-meterial-certification/${examData?.exam_vendor_perma}/${item?.cert_perma}`}
                    >
                      {item.cert_title}
                      <br />
                    </Link>
                  ))}
                </span>
              </div>
              <hr />
            </p>
            <div className="flex flex-wrap items-center -mb-3 gap-2">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                    fill="#FFB11A"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                    fill="#FFB11A"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                    fill="#FFB11A"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                    fill="#FFB11A"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8586 4.71245C11.2178 3.60688 12.7819 3.60688 13.1412 4.71245L14.4246 8.66261C14.5853 9.15703 15.046 9.49179 15.5659 9.49179H19.7193C20.8818 9.49179 21.3651 10.9793 20.4247 11.6626L17.0645 14.1039C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3957C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.296C12.2846 17.9905 11.7151 17.9905 11.2945 18.296L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3957L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.1039L3.57508 11.6626C2.63463 10.9793 3.11796 9.49179 4.28043 9.49179H8.43387C8.95374 9.49179 9.41448 9.15703 9.57513 8.66261L10.8586 4.71245Z"
                    fill="#FFB11A"
                  ></path>
                </svg>
              </div>
              <span className="text-sm font-semibold">
                5.0 ({examData.exam_id} reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 ">
          <ExamAddToCartCard examData={examData} />
        </div>
      </div>
    </section>
  );
};

export default ExamCart;
