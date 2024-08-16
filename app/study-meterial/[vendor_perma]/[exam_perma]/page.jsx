import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import AddComment from "@/app/components/Comment/AddComment";
import AllComments from "@/app/components/Comment/AllComments";
import ExamCart from "@/app/components/ExamCart/ExamCart";
import ExamFAQ from "@/app/components/ExamFaqs/ExamFAQ";
import ExamsStats from "@/app/components/ExamStats/ExamsStats";
import HotExamIndex from "@/app/components/HotExams/HotExamIndex";
import ExamLinks from "@/app/components/UseFullExams/ExamLinks";
import { Container, Grid } from "@mui/material";

const page = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";
  const vendorResponce = await fetch(
    `${Base_URL}/v1/vendor/${params.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const vendorData = await vendorResponce.json();

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
    <>
      <Container maxWidth={"xl"}>
        <ExamCart examData={examData} />
        <ExamsStats examData={examData} />
      </Container>
      <HotExamIndex />
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12}>
            <ExamFAQ examData={examData} />
          </Grid>
        </Grid>
      </Container>
      <ExamLinks
        vendorTitle={vendorData?.vendor_title}
        vendorData={vendorData}
        data={examData}
      />
      <AddComment />
      <AllComments examData={examData}/>
    </>
  );
};

export default page;
