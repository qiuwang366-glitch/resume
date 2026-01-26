'use client';

import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Achievements,
  Education,
  Contact,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
