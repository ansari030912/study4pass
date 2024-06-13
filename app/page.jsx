import { Container } from "@mui/material";
import AboutCard from "./components/About/AboutCard";
import MainPageHeroSection from "./components/HeroSection/MainPageHeroSection";
import HotExamCard from "./components/HotExams/HotExamCard";
import RecentlyUpdatedTable from "./components/RecentlyUpdated/RecentlyUpdatedTable";
import FlipCard from "./components/SixFlipCard/FlipCard";
import LogoCard from "./components/logo/LogoCard";
import HotExamIndex from "./components/HotExams/HotExamIndex";
import HomeCerts from "./components/HomeCertifications/HomeCerts";
import TestimonialReviews from "./components/Testimonials/TestimonialReviews";

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
