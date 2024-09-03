import MasterKeyCard from "@/app/components/MasterKeyCard";


const page = ({ params }) => {
  return <MasterKeyCard params={params} />;
};

export default page;
export async function generateMetadata({ params }) {
  return {
    title: `TEST ENGINE Master Key`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/activate-file/${params.key_1}/${params.key_2}`,
        },
      ],
    },
  };
}
