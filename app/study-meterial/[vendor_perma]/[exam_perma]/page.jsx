/* eslint-disable @next/next/no-img-element */
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
import Link from "next/link";

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

  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();
  
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: examData?.exam_faqs?.map((faq) => ({
              "@type": "Question",
              name: faq.faq_q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.faq_a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: examData?.exam_title,
            description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${examData?.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.4,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      <section className="pt-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
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
      <AllComments examData={examData} />
    </>
  );
};

export default page;

export async function generateMetadata({ params }) {
  const response = await fetch(`${Base_URL}/v1/exam/${params.exam_perma}`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();
  return {
    title: `Updated ${data.exam_title} Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of ${data.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: data.index_tag ? data.index_tag : false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/study-meterial/${params.vendor_perma}/${params.exam_perma}`,
        },
      ],
    },
  };
}
