import MainLayout from './components/layout/MainLayout';
import HeroCarousel from './components/home/HeroCarousel';
import AchievementBadges from './components/home/AchievementBadges';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import StatsSection from './components/home/StatsSection';
import PhotoGallery from './components/home/PhotoGallery';
import CTASection from './components/home/CTASection';
import TestimonialsSection from './components/home/TestimonialsSection';
import ContactSection from './components/home/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroCarousel />
      <AchievementBadges />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <PhotoGallery />
      <CTASection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
}

