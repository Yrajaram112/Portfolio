/**
 * ─────────────────────────────────────────────────────────────
 *  WORK EXPERIENCE SECTION
 *  ─────────────────────────────────────────────────────────────
 *  TODO: Populate the EXPERIENCE array below with your real
 *  work history.  Then remove the `return null;` line and
 *  un-comment the JSX block at the bottom to display the section.
 *
 *  Each entry shape:
 *  {
 *    company:      string        — Company name
 *    role:         string        — Your job title
 *    period:       string        — e.g. "Jan 2020 – Present"
 *    location:     string        — e.g. "Kansas City, MO (Remote)"
 *    description:  string        — One-liner about the role/team
 *    achievements: string[]      — Bullet points (3–5 recommended)
 *    tech:         string[]      — Key technologies used
 *    logo?:        string        — Optional path to company logo in /public
 *  }
 * ─────────────────────────────────────────────────────────────
 */

const EXPERIENCE = [
  // ── REPLACE THE EXAMPLE BELOW WITH YOUR ACTUAL EXPERIENCE ──
  /*
  {
    company:     'Example Corp',
    role:        'Senior Software Engineer',
    period:      'Jan 2022 – Present',
    location:    'Remote',
    description: 'Led backend engineering for a high-traffic fintech platform serving 500k+ users.',
    achievements: [
      'Redesigned payment microservice reducing latency by 60% and cutting infra cost by 30%.',
      'Mentored a team of 4 junior engineers, introducing TDD practices across the org.',
      'Implemented real-time fraud detection pipeline using Kafka and ML scoring service.',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'PostgreSQL'],
  },
  */
];

export default function WorkExperience() {
  // ── SECTION IS HIDDEN — remove this line once EXPERIENCE is populated ──
  return null;

  /* ── Un-comment this block when ready ──────────────────────────────────

  if (EXPERIENCE.length === 0) return null;

  return (
    <section id="experience" className="py-28" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-4">Experience</p>
        <h2 className="mb-16">
          Where I've <em style={{ color: 'var(--accent)' }}>made an impact</em>.
        </h2>

        <div className="space-y-6">
          {EXPERIENCE.map(({ company, role, period, location, description, achievements, tech, logo }) => (
            <div
              key={company + role}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  {logo && (
                    <img
                      src={logo}
                      alt={company}
                      className="w-10 h-10 rounded-lg object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {role}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>
                      {company}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>{period}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{location}</p>
                </div>
              </div>

              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{description}</p>

              <ul className="space-y-2 mb-5">
                {achievements.map((ach, i) => (
                  <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                    {ach}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="skill-tag text-xs">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  ─────────────────────────────────────────────────────────────── */
}
