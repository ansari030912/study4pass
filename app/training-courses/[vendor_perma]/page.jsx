import TrainigCourseTable from "@/app/components/TrainingCourses/TrainigCourseTable";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <TrainigCourseTable />
    </>
  );
};

export default page;

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
