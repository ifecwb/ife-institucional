'use client'

import MainLayout from './components/layout/MainLayout';
import HeroCarousel from './components/home/HeroCarousel';
import AchievementBadges from './components/home/AchievementBadges';
import AboutSection from './components/home/AboutSection';
import MissionSection from './components/home/MissionSection';
import ServicesSection from './components/home/ServicesSection';
import StatsSection from './components/home/StatsSection';
import PhotoGallery from './components/home/PhotoGallery';
import CTASection from './components/home/CTASection';
import TestimonialsSection from './components/home/TestimonialsSection';
import PartnersSection from './components/about/PartnersSection';
import ContactSection from './components/home/ContactSection';

export default function HomeClient() {
  return (
    <MainLayout>
      <HeroCarousel />
      <AchievementBadges />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <StatsSection />
      <PhotoGallery />
      <CTASection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
    </MainLayout>
  );
}
