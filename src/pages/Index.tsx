import Navigation from '@/components/portfolio/Navigation';
import MatrixRain from '@/components/portfolio/MatrixRain';
import HeroSection from '@/components/portfolio/HeroSection';
import SocialLinks from '@/components/portfolio/SocialLinks';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import WriteupsSection from '@/components/portfolio/WriteupsSection';
import Footer from '@/components/portfolio/Footer';

import EducationSkillsSection from '@/components/portfolio/EducationSkillsSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Scanline Overlay */}
      <div className="scanline-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <SocialLinks />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSkillsSection />
        <WriteupsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
