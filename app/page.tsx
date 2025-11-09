import MainLayout from './components/layout/MainLayout';
import Hero from './components/home/Hero';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import CTASection from './components/home/CTASection';
import TestimonialsSection from './components/home/TestimonialsSection';
import ContactSection from './components/home/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
}

