import { Grid } from "@mui/material";

const ExamFAQ = ({ examData }) => {
  return (
    <section className="py-6 mb-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-center text-gray-700 font-black tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <Grid container spacing={4}>
          {Array.isArray(examData.exam_faqs) &&
            examData.exam_faqs.map((faq, i) => (
              <Grid item xs={12} lg={6} key={i}>
                <div className="px-6 py-3 h-full bg-blue-50 rounded-3xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      style={{ fontSize: "22px" }}
                      className="text-4xl text-blue-500 font-bold"
                    >
                      {faq?.faq_q}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold text-base text-justify">
                      {faq?.faq_a}
                    </p>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </section>
  );
};

export default ExamFAQ;
