import { Container } from "@mui/material";
import AboutCard from "./components/About/AboutCard";
import MainPageHeroSection from "./components/HeroSection/MainPageHeroSection";
import HomeCerts from "./components/HomeCertifications/HomeCerts";
import HotExamIndex from "./components/HotExams/HotExamIndex";
import RecentlyUpdatedTable from "./components/RecentlyUpdated/RecentlyUpdatedTable";
import FlipCard from "./components/SixFlipCard/FlipCard";
import TestimonialReviews from "./components/Testimonials/TestimonialReviews";
import LogoCard from "./components/logo/LogoCard";

const page = () => {
  return (
    <>
      <MainPageHeroSection />
      <Container maxWidth={"xl"}>
        <LogoCard />
      </Container>
      <RecentlyUpdatedTable />
      <AboutCard />
      <Container maxWidth={"xl"}>
        <FlipCard />
      </Container>
      <HotExamIndex />
      <HomeCerts />
      <TestimonialReviews />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Study Meterial by Tech Professionals`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://study4pass.com",
    },
  };
}
