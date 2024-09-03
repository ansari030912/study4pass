"use client";
"use client";
/* eslint-disable @next/next/no-img-element */
import { Button, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const reviews = [
  {
    text: "Study4Pass's practice exams were instrumental in helping me achieve my Amazon certification.",
    name: "Jane Smith",
  },
  {
    text: "The Microsoft certification prep on Study4Pass is second to none. Their test engine is fantastic!",
    name: "Robert Johnson",
  },
  {
    text: "With Study4Pass, passing the Dell certification was a breeze. Their test engine is incredible.",
    name: "Emily Davis",
  },
  {
    text: "PMI exams were tough, but Study4Pass's resources made them manageable.",
    name: "Michael Wilson",
  },
  {
    text: "The Riverbed exam was easy with Study4Pass’s in-depth practice tests.",
    name: "Jessica Taylor",
  },
  {
    text: "Study4Pass’s practice tests made RSA certifications feel easy.",
    name: "William Martinez",
  },
  {
    text: "For SAFe certification prep, Study4Pass is unmatched. Their test engine is exceptional!",
    name: "Linda Anderson",
  },
  {
    text: "Study4Pass has the best Salesforce certification prep. Their test engine is top-notch!",
    name: "Christopher Thomas",
  },
  {
    text: "SANS certification was simplified with Study4Pass’s amazing resources.",
    name: "Susan Jackson",
  },
  {
    text: "Study4Pass's test engine covered everything I needed for SAP exams.",
    name: "Charles White",
  },
  {
    text: "Study4Pass made passing my SAS Institute exams easy. Their test engine is superb!",
    name: "Patricia Harris",
  },
  {
    text: "The Scaled Agile exam was challenging, but Study4Pass’s practice tests made it manageable.",
    name: "Daniel Lewis",
  },
  {
    text: "Scrum certification was straightforward with Study4Pass’s excellent test engine.",
    name: "Barbara Clark",
  },
  {
    text: "Study4Pass’s test engine made SDI exam prep a breeze. Highly recommend it!",
    name: "Paul Robinson",
  },
  {
    text: "ServiceNow certification was easy with Study4Pass’s resources. The test engine is outstanding!",
    name: "Nancy Walker",
  },
  {
    text: "Study4Pass’s practice tests are fantastic for Sitecore exam prep. Great tool!",
    name: "Kevin Hall",
  },
  {
    text: "Six Sigma certification was attainable thanks to Study4Pass's comprehensive test engine.",
    name: "Karen Young",
  },
  {
    text: "Study4Pass made Slack certification easy with their excellent practice tests.",
    name: "Donald Hernandez",
  },
  {
    text: "Study4Pass simplified SNIA certification prep with their detailed test engine. Highly recommended!",
    name: "Betty King",
  },
  {
    text: "For Cisco exams, Study4Pass’s test engine is the absolute best!",
    name: "Thomas Wright",
  },
  {
    text: "Amazon certification prep has never been easier, thanks to Study4Pass’s excellent resources.",
    name: "Helen Lopez",
  },
  {
    text: "Study4Pass’s test engine helped me ace my Microsoft certification exams.",
    name: "Larry Scott",
  },
  {
    text: "The best place for Dell certification prep is Study4Pass. Their test engine is unbeatable!",
    name: "Margaret Green",
  },
  {
    text: "PMI certification became simpler with Study4Pass’s fantastic test engine.",
    name: "Brian Adams",
  },
];

const TestimonialReviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-12 pb-10 overflow-x-hidden bg-blue-50 bg-cover bg-fixed">
      <Container maxWidth={"xl"}>
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <span className="text-lg font-semibold bg-blue-100 rounded-3xl p-3 text-blue-500">
              Testimonial
            </span>
            <h2 className="mt-6 text-4xl text-gray-700 font-semibold uppercase font-heading">
              What Users Are Saying About{" "}
              <span className="text-blue-400">Study4Pass.com</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <TransitionGroup component={null}>
            {reviews.slice(index, index + 3).map((review, idx) => (
              <CSSTransition key={idx} timeout={500} classNames="slide">
                <div
                  className={`w-full md:w-1/2 lg:w-1/3 ${
                    idx === 2 ? "lg:border-b-0" : "border-b-2 lg:border-b-0"
                  } md:border-r-2 border-blue-300 border-opacity-20`}
                >
                  <div className="p-8 md:p-12">
                    <div className="flex justify-between mb-8">
                      <span>
                        <svg
                          width="26"
                          height="18"
                          viewBox="0 0 26 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.5469 17.2673C19.7188 17.2673 18.9531 17.1345 18.25 16.8689C17.5625 16.6033 16.9688 16.2205 16.4688 15.7205C15.9688 15.2048 15.5781 14.5876 15.2969 13.8689C15.0156 13.1501 14.875 12.3376 14.875 11.4314C14.875 9.38452 15.5703 7.4314 16.9609 5.57202C18.3672 3.69702 20.4062 2.03296 23.0781 0.579834L25.6562 4.25952C24.9531 4.63452 24.3281 5.00171 23.7812 5.36108C23.25 5.72046 22.7812 6.08765 22.375 6.46265C21.9844 6.83765 21.6406 7.22827 21.3438 7.63452C21.0625 8.02515 20.8047 8.44702 20.5703 8.90015C21.3359 8.90015 22.0234 9.00952 22.6328 9.22827C23.2578 9.44702 23.7891 9.75171 24.2266 10.1423C24.6797 10.5173 25.0234 10.9626 25.2578 11.4783C25.5078 11.9783 25.6328 12.5173 25.6328 13.0955C25.6328 13.6736 25.5078 14.2205 25.2578 14.7361C25.0234 15.2361 24.6797 15.6736 24.2266 16.0486C23.7891 16.4236 23.2578 16.7205 22.6328 16.9392C22.0078 17.158 21.3125 17.2673 20.5469 17.2673ZM5.96875 17.2673C5.14062 17.2673 4.375 17.1345 3.67188 16.8689C2.98438 16.6033 2.39062 16.2205 1.89062 15.7205C1.39062 15.2048 1 14.5876 0.71875 13.8689C0.4375 13.1501 0.296875 12.3376 0.296875 11.4314C0.296875 9.38452 0.992188 7.4314 2.38281 5.57202C3.78906 3.69702 5.82812 2.03296 8.5 0.579834L11.0781 4.25952C10.375 4.63452 9.75 5.00171 9.20312 5.36108C8.67188 5.72046 8.20312 6.08765 7.79688 6.46265C7.40625 6.83765 7.0625 7.22827 6.76562 7.63452C6.48438 8.02515 6.22656 8.44702 5.99219 8.90015C6.75781 8.90015 7.44531 9.00952 8.05469 9.22827C8.67969 9.44702 9.21094 9.75171 9.64844 10.1423C10.1016 10.5173 10.4453 10.9626 10.6797 11.4783C10.9297 11.9783 11.0547 12.5173 11.0547 13.0955C11.0547 13.6736 10.9297 14.2205 10.6797 14.7361C10.4453 15.2361 10.1016 15.6736 9.64844 16.0486C9.21094 16.4236 8.67969 16.7205 8.05469 16.9392C7.42969 17.158 6.73438 17.2673 5.96875 17.2673Z"
                            fill="#FFEC3E"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700 font-semibold font-heading">
                        9.94 / 10
                      </span>
                    </div>
                    <p className="mb-8 text-lg text-gray-600">{review.text}</p>
                    <div className="flex items-center">
                      {/* <img
                        className="w-16 h-16 rounded-full"
                        src="/avatar-online.png"
                        alt=""
                      /> */}
                      <div className="">
                        <h3 className="text-lg text-gray-700 font-semibold font-heading mb-1">
                          {review.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialReviews;
