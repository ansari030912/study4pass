import { Container } from "@mui/material";
import ExamCart from "./components/ExamCart/ExamCart";
import RecentlyUpdatedTable from "./components/RecentlyUpdated/RecentlyUpdatedTable";
import LogoCard from "./components/logo/LogoCard";
import MainPageHeroSection from "./components/HeroSection/MainPageHeroSection";
import FlipCard from "./components/SixFlipCard/FlipCard";
import AboutCard from "./components/About/AboutCard";

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
      {/* <ExamCart /> */}
    </>
  );
};

export default page;
