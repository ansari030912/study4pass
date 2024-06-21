/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

const HotExamCard = ({ data }) => {
  const renderRows = (items) => {
    return (
      <Grid container spacing={5} justifyContent="center">
        {items?.slice(0, 10)?.map((item, index) => (
          <Grid key={index} item xs={12} lg={6}>
            <div className="md:flex items-center -mx-3 -my-3 px-3 rounded-xl min-h-30 border-2 border-gray-200 bg-white">
              <div className="md:flex md:items-center">
                <div className="flex justify-center md:w-2/12">
                  <img src="/product2.png" alt="" width={"80%"} />
                </div>
                <div className="w-full px-4 mr-auto mb-8 md:mb-0 md:w-9/12">
                  <Link
                    href={`/exam-questions/${item.vendor_perma}/${item.exam_perma}`}
                  >
                    <div className="max-w-5xl">
                      <span className="block mb-3 pl-3">
                        <span className="text-gray-900 opacity-90 font-bold text-xl">
                          {item.vendor_title}
                        </span>
                        <span className="text-2xl font-bold text-gray-300">
                          {" "}
                          |{" "}
                        </span>
                        <span className="text-blue-900 opacity-70 font-semibold text-lg">
                          {item.exam_code}
                        </span>
                      </span>
                      <h4 className="text-sm font-semibold pl-3 pr-6 text-gray-500 hover:text-blue-500">
                        {item.exam_title}
                      </h4>
                    </div>
                  </Link>
                </div>
                <div className="mx-4 hidden md:block flex-shrink-0 md:w-1/12">
                  <Link
                    className="group"
                    href={`/exam-questions/${item.vendor_perma}/${item.exam_perma}`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border hover:bg-blue-500 bg-gray-500 border-gray-500 hover:border-blue-300 transition duration-200">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <section className="relative bg-gray-50 py-12 bg-body overflow-hidden">
        <div className="relative container mx-auto px-6">
          <Container maxWidth="xl">
            <div className="relative text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-center text-blue-500 font-black tracking-tight">
                Hot Exams{" "}
                <span className="text-gray-700">Monthly & Weekly</span>!
              </h2>
            </div>
            {renderRows(data?.month)}
          </Container>
        </div>
      </section>
    </Box>
  );
};

export default HotExamCard;
