import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import ExamCart from "@/app/components/ExamCart/ExamCart";
import { Container } from "@mui/material";
import React from "react";

const page = async ({ params }) => {
  const releatedExams = await fetch(
    `${Base_URL}/v1/related_exams/${params?.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const releatedData = await releatedExams.json();

  const examResponce = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const examData = await examResponce.json();

  return (
    <Container maxWidth={"xl"}>
      <ExamCart examData={examData} />
    </Container>
  );
};

export default page;
