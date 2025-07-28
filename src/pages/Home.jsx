import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Background Effects */}
      <StarBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
