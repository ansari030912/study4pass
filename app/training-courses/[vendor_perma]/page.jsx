/* eslint-disable @next/next/no-img-element */
import VideoTrainingCourseAddToCart from "@/app/components/VideoCards/VideoTrainingCourseAddToCart";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";

export async function generateMetadata({ params }) {
  return {
    title: `Updated Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
   robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/training-course/${params.vendor_perma}`,
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  const response = await fetch(
    `${Base_URL}/v1/training-course/${params.vendor_perma}/?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  const data = await response.json();
  return (
    <>
      {/* <section className="pt-6 pb-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section> */}
      <section className="pt-12 pb-12 bg-white overflow-hidden">
        <div className=" container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-full lg:w-7/12 px-4 xl:pl-12">
              <div className="max-w-5xl mb-6">
                <h1 className="mb-6 text-left text-3xl font-heading font-medium">
                  {data.title}
                </h1>
                <div className="w-4/6 lg:hidden mb-4 mx-auto">
                  <img
                    src={`https://video.dumpsarena.com/img/${data.image}`}
                    alt=""
                  />
                </div>
                <p className="text-base text-gray-400">
                  Get ready for your exam by enrolling in our comprehensive
                  training course. This course includes a full set of
                  instructional videos designed to equip you with in-depth
                  knowledge essential for passing the certification exam with
                  flying colors.
                </p>
              </div>
              <div className="flex justify-between border-b pb-3 mb-3">
                <button className="inline-flex items-center justify-center text-sm mb-2 text-gray-400 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 72 72"
                  >
                    <circle cx="35.905" cy="36.014" r="27.035" fill="#fcea2b" />
                    <circle cx="36.006" cy="36.037" r="21.871" fill="white" />
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M55.11 25.38a21.863 21.863 0 1 1-8.095-8.245"
                    />
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M62.94 35.997a27.046 27.046 0 1 1-5.266-16.038"
                    />
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m47.394 21.578l11.038-1.16l-1.16-11.038m-7.297 26.974H35.891V18.52m0 35.391v-3.845M21.143 36.354h-3.057h0"
                    />
                    <circle cx="35.891" cy="36.354" r="3.737" />
                    <circle cx="48.694" cy="47.937" r="1.48" />
                    <circle cx="23.087" cy="24.717" r="1.48" />
                    <circle cx="23.087" cy="47.937" r="1.48" />
                  </svg>{" "}
                  <span className="ml-2">{data.duration} : Duration</span>
                </button>
                <button className="inline-flex items-center justify-center text-sm mb-2 text-gray-400 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#01579b"
                      d="M118.03 102.32L72.29 123c-2.82 1.33-5.76 1.2-8.46-.36L6.09 93.32c-1.65-1.06-2.14-2.61-2.04-3.69c.1-1.08.35-2.25 3.25-3.09l4.28-1.58l57.92 31.57l41.16-16.82z"
                    />
                    <path
                      fill="#f5f5f5"
                      d="M71.74 119.69a7.951 7.951 0 0 1-7.26-.26L8.11 91.03c-.8-.44-1.04-1.45-.56-2.23c1.24-2.05 3.52-8.53-.24-13.91l63.66 30.65z"
                    />
                    <path
                      fill="#94c6d6"
                      d="m115.59 99.98l-43.85 19.71c-1.45.63-4.34 1.75-7.67-.49c2.63.19 4.48-.9 5.43-2.67c.93-1.72.65-4.54-.48-6.13c-.69-.96-2.54-2.49-3.35-3.35L113.1 88.5c4.2-1.73 8.14.86 8.77 4.01c.7 3.56-3.84 6.47-6.28 7.47"
                    />
                    <path
                      fill="#01579b"
                      d="m117.78 86.96l-45.27 20.2c-2.85 1.13-6.04.98-8.77-.4L5.9 77.38c-.56-.28-1.39-1.05-1.72-2.1c-.54-1.75.14-3.95 2.19-4.65l62.68 31.95l42.92-18.37z"
                    />
                    <path
                      fill="#0091ea"
                      d="m121.19 89.89l-4.93-1.79l-10.16.59l-33.58 14.99c-2.85 1.13-6.04.98-8.77-.4L5.9 73.91c-1.49-.76-1.17-2.97.47-3.28l41.69-18.65c1.19-.22 2.41-.09 3.52.38l59.49 28.36s9.45 6.47 10.12 9.17"
                    />
                    <path
                      fill="#616161"
                      d="M105.53 88.98s6.26-2.45 11.18-2.23c4.92.22 6.63 3.67 6.63 3.67c-.93-4.23-5.3-6.39-5.3-6.39l-65-32.73c-.45-.19-2.11-.58-4.66.47c-2.06.85-8.79 4-8.79 4z"
                    />
                    <path
                      fill="#424242"
                      d="M123.62 91.22c-.47-1.87-1.63-3.87-3.77-4.84c-2.82-1.27-6.84-.94-9.41.4l-4.91 2.18v3.46l6.21-2.76c6.04-2.69 8.72 1.34 8.95 2.29c.96 3.87-.9 6.11-6.39 8.63l-8.92 4.02v3.48l10.26-4.57c4.54-1.82 9.72-5.24 7.98-12.29"
                    />
                    <path
                      fill="#01579b"
                      d="M33.01 90.31L15.74 66.44l2.71-1.21l19.43 26.7zm22.15 11l-3.08-2.44l53.45-10.91v1.75l-7.49 2.84z"
                    />
                    <path
                      fill="#9ccc65"
                      d="M14.8 46.18L82.31 34.9l29.49 32.47c1.49 1.57.68 4.17-1.44 4.6l-69.7 14.3z"
                    />
                    <path
                      fill="#689f38"
                      d="M110.36 69.17L41.14 83.19l-.22 3.3l69.44-14.24c1.96-.41 2.78-2.65 1.71-4.23c-.38.56-.96 1-1.71 1.15m3.73 15.13c.73 1.16.07 2.69-1.27 2.96L49.1 100.18c-3.83.79-7.59-1.72-7.93-5.62c-.29-3.3 1.94-6.29 5.19-6.97l61.28-13.76z"
                    />
                    <path
                      fill="#616161"
                      d="M55.59 80.1L30.21 43.78l-14.48 3.83c-3.35 3.33-2.1 8.8-2.1 8.8S35.8 91.99 39.3 96.54c3.5 4.55 8.61 3.84 8.61 3.84l8.63-1.74l-.9-16.1z"
                    />
                    <path
                      fill="#424242"
                      d="M55.59 80.34L43.4 82.86c-3.33.75-3.93 3.88-3.93 3.88L10.04 44.57s-4.19 5.07-1.41 9.38L39.3 96.54c3.35 4.77 8.61 3.88 8.61 3.88l8.63-1.74l-.89-15.78z"
                    />
                    <path
                      fill="#b9e4ea"
                      d="M110.25 83c.31.68-.09 1.47-.82 1.62L48.5 97.12c-3.83.79-6.54-1.75-6.4-5.21c.18-4.37 2.63-6.22 5.87-6.89l61.23-12.51s-2.08 2.34-.49 6.72c.54 1.51 1.12 2.85 1.54 3.77"
                    />
                    <path
                      fill="none"
                      stroke="#424242"
                      stroke-miterlimit="10"
                      stroke-width="2.07"
                      d="M45.21 83.7L19.1 46.76"
                    />
                    <path
                      fill="#424242"
                      d="M47.26 67.95L13.68 51.03l-1.36 2.68l38.8 19.77z"
                    />
                    <path
                      fill="#689f38"
                      d="m108.79 64.03l-2.46-2.7L68.5 78.69L47.26 68.18l3.62 5.18l14.07 7.19l10.48-1.61z"
                    />
                    <path
                      fill="#c62828"
                      d="M118.02 57.35L72.29 78.03c-2.82 1.33-5.76 1.2-8.46-.36L6.09 48.35c-1.65-1.06-2.14-2.61-2.04-3.69s.35-2.25 3.25-3.09l2.71-1l59.32 29.11l48.17-19.93z"
                    />
                    <path
                      fill="#f5f5f5"
                      d="M71.73 74.72a7.951 7.951 0 0 1-7.26-.26L8.1 46.06c-.8-.44-1.04-1.45-.56-2.23c1.24-2.05 3.52-8.53-.24-13.91l62.24 31.66z"
                    />
                    <path
                      fill="#94c6d6"
                      d="M115.58 55.01L71.73 74.72c-1.45.63-4.34 1.75-7.67-.49c2.63.19 4.48-.9 5.43-2.67c.93-1.72.65-4.54-.48-6.13c-.69-.96-2.54-2.49-3.35-3.35l47.43-18.55c4.2-1.73 8.14.86 8.77 4.01c.7 3.56-3.84 6.47-6.28 7.47"
                    />
                    <path
                      fill="#c62828"
                      d="m117.78 41.99l-45.27 20.2c-2.85 1.13-6.04.98-8.77-.4L5.89 32.41c-.6-.3-1.5-1.07-1.79-2.16c-.43-1.62.13-3.75 2.26-4.59l53.01-11.23z"
                    />
                    <path
                      fill="#f44336"
                      d="m121.18 44.92l-4.93-1.79l-10.16.59l-33.58 14.99c-2.85 1.13-6.04.98-8.77-.4L5.89 28.93c-1.49-.76-.96-2.77.47-3.28l41.7-18.64c1.19-.22 2.41-.09 3.52.38l59.49 28.36s9.44 6.46 10.11 9.17"
                    />
                    <path
                      fill="#616161"
                      d="M105.53 44s5.21-1.83 10.13-1.61c4.92.22 7.69 3.05 7.69 3.05c-1.01-4.52-5.3-6.39-5.3-6.39l-65-32.73c-.45-.19-2.11-.58-4.66.47c-2.06.85-8.79 4-8.79 4z"
                    />
                    <path
                      fill="#424242"
                      d="M111.48 41.86L44.97 8.31l2.2-.99l67.64 33.9z"
                    />
                    <path
                      fill="#424242"
                      d="M123.61 46.25c-.47-1.87-1.26-3.68-3.49-4.62c-2.85-1.2-5.45-1.45-9.69.18l-4.91 2.18v3.46l6.21-2.76c3.15-1.48 7.79-1.16 8.95 2.29c1.27 3.78-.9 6.11-6.39 8.63l-8.92 4.02v3.48l10.26-4.57c4.55-1.82 9.73-5.24 7.98-12.29"
                    />
                  </svg>
                  <span className="ml-2">{data.lectures} : Lectures</span>
                </button>
              </div>
              <div className="flex justify-between">
                <p className="flex items-start mb-8">
                  <span className="flex items-center text-6xl text-blue-500 font-heading font-medium">
                    <span className="text-4xl">${data.price}</span>
                  </span>
                  <span className="flex items-center text-6xl text-gray-400 font-heading font-medium">
                    <span className="text-4xl">/</span>
                  </span>
                  <span className="relative left-1 text-red-500 font-heading font-medium line-through">
                    ${data.full_price}
                  </span>
                </p>

                <div className="flex flex-wrap -mx-2 mb-2">
                  <VideoTrainingCourseAddToCart data={data} />
                </div>
              </div>
            </div>
            <div className="w-full hidden lg:inline-block lg:w-5/12 px-4 mb-16 lg:mb-0">
              <div className="relative w-full md:w-1/1 ml-auto">
                <div className="w-4/6 mx-auto">
                  <img
                    src={`https://video.dumpsarena.com/img/${data.image}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1 mt-12 border-t border-gray-100">
            <div className="flex flex-col items-center w-full py-8 px-2">
              {data?.sections?.map((item, index) => {
                const { section_title, lectures } = item;
                return (
                  <div
                    key={index}
                    className="mb-12 w-full max-w-8xl mx-auto py-6 sm:p-4"
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center bg-blue-500 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 14 14"
                        >
                          <path
                            fill="white"
                            fill-rule="evenodd"
                            d="M8.09.084a.75.75 0 1 0-.232 1.482A5.502 5.502 0 0 1 7 12.5a5.5 5.5 0 0 1-5.116-3.475a.75.75 0 1 0-1.394.552A7.002 7.002 0 0 0 14 7A7 7 0 0 0 8.09.084M6.164.661a.75.75 0 0 1-.54.914a5.5 5.5 0 0 0-.735.246a.75.75 0 1 1-.576-1.385q.453-.19.938-.314a.75.75 0 0 1 .913.54ZM3.185 1.894a.75.75 0 0 1-.016 1.06a5.6 5.6 0 0 0-.95 1.225a.75.75 0 1 1-1.302-.744a7 7 0 0 1 1.208-1.557a.75.75 0 0 1 1.06.016M.916 5.28a.75.75 0 0 1 .638.847a6 6 0 0 0-.054.775a.75.75 0 0 1-1.5 0q0-.5.069-.984a.75.75 0 0 1 .847-.638M4.5 8.882V5.118a1 1 0 0 1 1.447-.894l3.764 1.882a1 1 0 0 1 0 1.788L5.947 9.776A1 1 0 0 1 4.5 8.882"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="ml-4 font-semibold w-full lg:text-xl text-gray-800 text-lg">
                        {section_title}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {lectures.map((lecture, lectureIndex) => (
                        <li
                          key={lectureIndex}
                          className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-md text-gray-700 shadow-md rounded-md p-3"
                        >
                          <div className="flex w-full justify-between items-center">
                            <span className="text-sm font-semibold ">
                              <span className="text-blue-500">
                                {lecture.lecture_seq}.
                              </span>{" "}
                              {lecture.lecture_title}
                            </span>
                            <span className="text-blue-600 font-semibold text-nowrap ml-2 text-sm sm:text-right">
                              <div className="flex flex-col bg-blue-100 px-2 py-1 rounded-full justify-center">
                                {lecture.lecture_duration}
                              </div>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
