"use client";
/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const ExamsStats = ({ examData }) => {
  const [startCount, setStartCount] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomBuyedNumber, setRandomBuyedNumber] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function getRandomNumber() {
      const min = 100000;
      const max = 1200000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomBuyedNumber() {
      const min = 30000;
      const max = 100000;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    setRandomBuyedNumber(getRandomBuyedNumber());
    setRandomNumber(getRandomNumber());
  }, []);

  return (
    <>
      <section className="py-1" ref={sectionRef}>
        <div className="container mx-auto">
          <div className="mb-6">
            <div className="flex flex-wrap items-center -mx-3 -mb-6">
              <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21 11.11V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.11c1.26 1.24 2.98 2 4.89 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.63-2-4.89M12 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 19V5h2v2h10V5h2v4.68c-.91-.43-1.92-.68-3-.68H7v2h4.1c-.6.57-1.06 1.25-1.42 2H7v2h2.08c-.05.33-.08.66-.08 1c0 1.08.25 2.09.68 3zm11 2c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-base text-gray-600 mb-1 leading-5 font-bold">
                        Latest updated date
                      </h5>
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1">
                          <span className="text-lg leading-none text-blue-500 font-bold">
                            {moment(examData?.exam_update_date).format("LL")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5h2v2h-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-base text-gray-600 mb-1 leading-5 font-bold">
                        Latest Question & Answers
                      </h5>
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1">
                          <span className="text-lg leading-none text-blue-500 font-bold">
                            {examData?.exam_questions}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.7-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m4-12a.5.5 0 0 1 .5.5v9.31c-.58-.55-1.25-1-2-1.31V4.7l-3 1.16V10c-.7.07-1.38.24-2 .5V5.87l-4-1.4V16.5c0 .64.09 1.26.26 1.84L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1l5.34-2.07zM4 5.46v11.85l3-1.16V4.45z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-base text-gray-600 mb-1 leading-5 font-bold">
                        This Exam Poupularity
                      </h5>
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1">
                          <span className="text-lg leading-none text-blue-500 font-bold">
                            {startCount && (
                              <CountUp
                                start={0}
                                end={randomNumber}
                                duration={2}
                              />
                            )}
                          </span>
                        </div>
                        <div className="w-auto p-1">
                          <span className="relative bottom-0.5 inline-block py-2 px-2 text-xs text-green-700 font-medium bg-green-200 rounded-full">
                            Last 6 Month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m3 14l.5.07L8.07 9.5a1.95 1.95 0 0 1 .52-1.91c.78-.79 2.04-.79 2.82 0c.53.52.7 1.26.52 1.91l2.57 2.57l.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2l.07-.5l-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5L5 16a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-base text-gray-600 mb-1 leading-5 font-bold">
                        This Product Sales
                      </h5>
                      <div className="flex flex-wrap items-center -m-1">
                        <div className="w-auto p-1">
                          <span className="text-lg leading-none text-blue-500 font-bold">
                            {startCount && (
                              <CountUp
                                start={0}
                                end={randomBuyedNumber}
                                duration={2}
                              />
                            )}
                          </span>
                        </div>
                        <div className="w-auto p-1">
                          <span className="relative bottom-0.5 inline-block py-2 px-2 text-xs text-yellow-600 font-medium bg-yellow-100 rounded-full">
                            Yearly
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-wrap -mx-3 -mb-6">
              <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7.375 21.025q-.9-.025-1.713-.462t-1.537-1.288q-1-1.2-1.562-2.862T2 13q0-2.075.788-3.9t2.137-3.175T8.1 3.788T12 3t3.9.8t3.175 2.175T21.213 9.2T22 13.175q0 1.925-.625 3.6T19.6 19.6q-.7.7-1.475 1.063t-1.575.362q-.45 0-.9-.112t-.9-.338l-1.4-.7q-.3-.15-.638-.225T12 19.575t-.712.075t-.638.225l-1.4.7q-.475.25-.937.363t-.938.087m.05-2q.225 0 .463-.05t.462-.175l1.4-.7q.525-.275 1.088-.4t1.137-.125t1.15.125t1.1.4l1.425.7q.225.125.45.175t.45.05q.475 0 .9-.25t.85-.75q.8-.95 1.25-2.275t.45-2.725q0-3.35-2.325-5.687T12 5T6.325 7.35T4 13.05q0 1.425.462 2.775T5.75 18.1q.425.5.825.713t.85.212M12 15q.825 0 1.413-.588T14 13q0-.2-.038-.4t-.112-.4l1.25-1.675q.275.35.45.712t.3.763t.375.7t.65.3q.5 0 .788-.438t.162-.962q-.5-2.025-2.125-3.312T12 7Q9.9 7 8.287 8.288T6.176 11.6q-.125.525.163.963t.787.437q.4 0 .65-.3t.375-.7q.35-1.325 1.413-2.162T12 9q.4 0 .788.075t.737.225l-1.275 1.725q-.05 0-.125-.013T12 11q-.825 0-1.412.588T10 13t.588 1.413T12 15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-base text-gray-600 mb-1 leading-5 font-bold">
                        Average Score In Real Exam
                      </h5>
                    </div>
                  </div>
                  <br />
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-base text-gray-600 font-bold">
                      Our Exams
                    </span>
                    <span className="text-base text-blue-500 font-bold">
                      {startCount && (
                        <CountUp
                          start={0}
                          end={examData?.exam_last_week_average_score}
                          duration={2}
                          suffix="%"
                        />
                      )}
                    </span>
                  </div>
                  <div className="relative py-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{
                          width: `${examData?.exam_last_week_average_score}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-base text-gray-600 font-bold">
                      Other&apos;s Exams
                    </span>
                    <span className="text-base text-red-500 font-bold">
                      {startCount && (
                        <CountUp
                          start={0}
                          end={43}
                          duration={2}
                          suffix="%"
                        />
                      )}
                    </span>
                  </div>
                  <div className="relative py-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
                      <div
                        className="bg-red-500 h-2.5 rounded-full dark:bg-red-500"
                        style={{
                          width: `43%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="max-w-xs md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-shrink-0 w-12 h-12 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 9h8m-8 4h6m.5 5.5L12 21l-3-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <h5 className="text-base text-gray-600 mb-1 leading-5 font-bold">
                        Questions (word to word)
                      </h5>
                    </div>
                  </div>
                  <br />
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-base text-gray-600 font-bold">
                      Our Exams
                    </span>
                    <span className="text-base text-blue-500 font-bold">
                      {startCount && (
                        <CountUp
                          start={0}
                          end={examData?.exam_last_week_word_to_word}
                          duration={2}
                          suffix="%"
                        />
                      )}
                    </span>
                  </div>
                  <div className="relative py-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{
                          width: `${examData?.exam_last_week_word_to_word}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-base text-gray-600 font-bold">
                      Other&apos;s Exams
                    </span>
                    <span className="text-base text-red-500 font-bold">
                      {startCount && (
                        <CountUp
                          start={0}
                          end={39}
                          duration={2}
                          suffix="%"
                        />
                      )}
                    </span>
                  </div>
                  <div className="relative py-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
                      <div
                        className="bg-red-500 h-2.5 rounded-full dark:bg-red-500"
                        style={{
                          width: `39%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/4 px-3 mb-6">
                <div
                  style={{
                    boxShadow:
                      "inset 0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px -4px 4px rgba(0, 0, 0, 0.05), inset 4px 0px 4px rgba(0, 0, 0, 0.05), inset -4px 0px 4px rgba(0, 0, 0, 0.05)",
                  }}
                  className="relative h-full max-w-sm md:max-w-none mx-auto p-6 bg-gray-50 rounded-xl"
                >
                  <div className="flex flex-wrap items-center justify-between -mx-2">
                    <div className="w-full px-2 mb-6 md:-mb-5">
                      <div className="flex max-w-xxs pr-12">
                        <div className="flex flex-shrink-0 w-12 h-12 mb-9 items-center justify-center bg-blue-500 bg-opacity-20 text-blue-500 rounded-xl">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 12.86V12.81C19.9879 12.6169 19.9544 12.4257 19.9 12.24L18.26 2.51003C18.1428 1.80198 17.7757 1.15939 17.2253 0.698869C16.6749 0.238344 15.9776 -0.00960096 15.26 2.60161e-05H4.69C3.98097 0.00232221 3.29566 0.255676 2.75565 0.715148C2.21563 1.17462 1.85581 1.81051 1.74 2.51003L0.12 12.22C0.0656405 12.4057 0.0321011 12.5969 0.02 12.79V12.84C-1.86265e-08 12.91 0 13 0 13V17C0 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.684 2.20435 20 3 20H17C17.7956 20 18.5587 19.684 19.1213 19.1213C19.6839 18.5587 20 17.7957 20 17V13C20 13 20 12.91 20 12.86ZM3.71 2.83003C3.75048 2.59523 3.87346 2.38261 4.05679 2.23044C4.24013 2.07827 4.47177 1.99656 4.71 2.00003H15.31C15.5482 1.99656 15.7799 2.07827 15.9632 2.23044C16.1465 2.38261 16.2695 2.59523 16.31 2.83003L17.51 10.05C17.342 10.0168 17.1712 10.0001 17 10H3C2.83546 10.0013 2.67141 10.0181 2.51 10.05L3.71 2.83003ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8947 17.2652 18 17 18H3C2.73478 18 2.48043 17.8947 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V13.08L2.08 12.62C2.15502 12.4374 2.28242 12.2811 2.44614 12.1707C2.60986 12.0604 2.80257 12.001 3 12H17C17.1974 12.001 17.3901 12.0604 17.5539 12.1707C17.7176 12.2811 17.845 12.4374 17.92 12.62L18 13.08V17ZM15 14C14.8022 14 14.6089 14.0587 14.4444 14.1686C14.28 14.2784 14.1518 14.4346 14.0761 14.6173C14.0004 14.8001 13.9806 15.0011 14.0192 15.1951C14.0578 15.3891 14.153 15.5673 14.2929 15.7071C14.4327 15.847 14.6109 15.9422 14.8049 15.9808C14.9989 16.0194 15.2 15.9996 15.3827 15.9239C15.5654 15.8482 15.7216 15.72 15.8315 15.5556C15.9414 15.3911 16 15.1978 16 15C16 14.7348 15.8946 14.4805 15.7071 14.2929C15.5196 14.1054 15.2652 14 15 14Z"
                              fill="#194BFB"
                            ></path>
                          </svg>
                        </div>
                        <h5 className="text-lg ml-4 text-gray-500 font-bold pt-2">
                          What is in the Premium File?
                        </h5>
                      </div>
                    </div>

                    {Array.isArray(examData?.question_types) &&
                      examData?.question_types.map((item, i) => {
                        const { question_type, question_type_count } = item;
                        return (
                          <div key={i} className="w-full md:w-1/2 py-2 px-2">
                            <div className="flex flex-wrap -m-2">
                              <div className="w-full p-2">
                                <div className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-full">
                                  <div className="flex items-center">
                                    <div className="w-auto mr-2 ">
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                                          fill="#3B82F6"
                                        ></path>
                                      </svg>
                                    </div>
                                    <p className="text-sm text-gray-700 font-bold">
                                      {question_type}
                                    </p>
                                  </div>
                                  <p className="text-sm text-blue-500 font-bold">
                                    {question_type_count} <span className="text-gray-700">Questions</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExamsStats;
