'use client';

import PageShell from '@/components/PageShell';
import ProjectLayout from '@/components/ProjectLayout';

export default function ProjectPageClient(props) {
  return (
    <PageShell>
      {({ theme, toggleTheme, mounted }) => (
        <ProjectLayout {...props} theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
      )}
    </PageShell>
  );
}
