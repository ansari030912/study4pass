// "use client";

const ExamFAQ = ({ examData }) => {
  // const [openIndex, setOpenIndex] = useState(null);

  // const handleToggle = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <section className="py-6 mb-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-center text-gray-700 font-black tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(examData.exam_faqs) &&
            examData.exam_faqs.map((faq, i) => (
              <div key={i} className="w-full md:w-1/2 p-4">
                <div className="px-6 py-3 h-full bg-blue-50 rounded-3xl">
                  <div
                    className={`flex items-center justify-between mb-2`}
                    // onClick={() => handleToggle(i)}
                  >
                    <h3
                      style={{ fontSize: "22px" }}
                      className="text-4xl text-blue-500 font-bold"
                    >
                      {faq?.faq_q}
                    </h3>
                  </div>
                  {/* {openIndex === i && ( */}
                  <div>
                    <p className="text-gray-500 font-semibold text-base text-justify">
                      {faq?.faq_a}
                    </p>
                  </div>
                  {/* )} */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExamFAQ;
