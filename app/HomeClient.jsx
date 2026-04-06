'use client';

import PageShell from '@/components/PageShell';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Project/Projects';
import Contact from '@/components/Contact';

export default function HomeClient() {
  return (
    <PageShell>
      {({ theme, toggleTheme, mounted }) => (
        <main id="main-content" aria-label="Portfolio of Rajaram Yadav, Senior Software Engineer">
          <Hero theme={theme} mounted={mounted} />
          <About theme={theme} />
          <Skills theme={theme} />
          {/* WorkExperience: hidden — populate WorkExperience.jsx when ready */}
          <WorkExperience />
          <Projects theme={theme} />
          <Contact theme={theme} />
        </main>
      )}
    </PageShell>
  );
}
