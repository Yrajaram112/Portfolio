import { useEffect, useRef, useState } from 'react';

const GROUPS = [
  { cat:'Backend',           icon:'⚙️', color:'#00D9F5', lightColor:'#0369A1', skills:['Java','Spring Boot','Python','Django','Node.js','REST APIs','GraphQL','Microservices','gRPC'] },
  { cat:'Frontend',          icon:'🎨', color:'#7C3AED', lightColor:'#6D28D9', skills:['React','Next.js','TypeScript','JavaScript','Tailwind CSS','HTML5','CSS3','Redux'] },
  { cat:'Cloud & DevOps',    icon:'☁️', color:'#0EA5E9', lightColor:'#0369A1', skills:['AWS','Docker','Kubernetes','Terraform','CI/CD','GitHub Actions','Nginx','Linux'] },
  { cat:'Data & Messaging',  icon:'🗄️', color:'#3FB950', lightColor:'#16A34A', skills:['PostgreSQL','MySQL','MongoDB','Redis','Kafka','RabbitMQ','Elasticsearch'] },
  { cat:'Tools & Practices', icon:'🛠️', color:'#D29922', lightColor:'#B45309', skills:['Git','GitHub','JIRA','Agile/Scrum','TDD','System Design','Code Review','Pair Programming'] },
];

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity=1; el.style.transform='none'; obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

// isDark is passed in as a prop — no scope issues
function SkillCard({ group, delay, isDark }) {
  const ref = useReveal(delay);
  const [hovered, setHovered] = useState(false);

  const accentColor = isDark ? group.color : group.lightColor;
  const cardBg      = hovered
    ? (isDark ? '#1C2128' : '#FFFFFF')
    : (isDark ? '#161B22' : '#FFFFFF');
  const cardBorder  = hovered ? `${accentColor}50` : 'var(--border)';
  const tagColor    = hovered ? accentColor : 'var(--text-3)';
  const tagBorder   = hovered ? `${accentColor}35` : 'var(--border)';

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        borderRadius: 16, padding: '22px 20px',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 0 28px ${accentColor}18, 0 8px 32px rgba(0,0,0,${isDark?0.4:0.08})` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
        <div style={{
          width:38, height:38, borderRadius:10, fontSize:17,
          display:'flex', alignItems:'center', justifyContent:'center',
          background: `${accentColor}15`, border: `1px solid ${accentColor}25`,
          boxShadow: hovered ? `0 0 16px ${accentColor}30` : 'none',
          transition:'box-shadow 0.3s',
        }}>{group.icon}</div>
        <div>
          <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:14, color:'var(--text-1)' }}>{group.cat}</div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', marginTop:1 }}>{group.skills.length} technologies</div>
        </div>
      </div>

      {/* Animated accent bar */}
      <div style={{ height:1.5, marginBottom:16, borderRadius:2, background:`linear-gradient(90deg,${accentColor},transparent)`, width:hovered?'100%':'40%', transition:'width 0.45s ease' }}/>

      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {group.skills.map(s => (
          <span key={s} style={{
            fontFamily:'JetBrains Mono,monospace', fontSize:10,
            padding:'4px 10px', borderRadius:100,
            background: isDark ? '#0D1117' : '#F0F4F8',
            border: `1px solid ${tagBorder}`,
            color: tagColor,
            transition:'color 0.25s, border-color 0.25s',
          }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ theme }) {
  const isDark = theme === 'dark'; // scoped correctly at top level
  const headerRef = useReveal(0);

  return (
    <section id="skills" style={{ background:'var(--bg)', padding:'112px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>

        <p className="s-label" style={{ marginBottom:16 }}>Skills</p>
        <div ref={headerRef} style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-between', gap:16, marginBottom:56 }}>
          <h2 style={{ maxWidth:420, color:'var(--text-1)', margin:0 }}>
            What I bring{' '}
            <span className="grad-text">to the table</span>.
          </h2>
          <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--text-3)' }}>
            // hover a card to explore
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:16 }}>
          {GROUPS.map((g, i) => (
            // Pass isDark as prop — no outer-scope reference issue
            <SkillCard key={g.cat} group={g} delay={i * 80} isDark={isDark}/>
          ))}
        </div>

        <p style={{ textAlign:'center', marginTop:64, fontFamily:'Sora,sans-serif', fontSize:'1.15rem', fontStyle:'italic', color:'var(--text-3)', fontWeight:300 }}>
          "Always learning. Always shipping."
        </p>
      </div>
    </section>
  );
}
