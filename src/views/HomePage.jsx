import { MainLayout } from '../components/templates';
import { Hero, Services, About, Testimonials, Contact } from '../components/organisms';

export function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}
