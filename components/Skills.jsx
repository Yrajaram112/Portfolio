'use client';
import { useEffect, useRef, useState } from 'react';

const GROUPS = [
  {
    cat: 'Data Engineering',
    icon: '📊',
    color: '#00D9F5',
    lightColor: '#0369A1',
    accentRgb: '0,217,245',
    badge: '🏗 Core Strength',
    skills: [
      'Apache Spark', 'PySpark', 'dbt', 'Apache Airflow', 'Dagster',
      'AWS Glue', 'Azure Data Factory', 'Delta Lake', 'Databricks',
      'Snowflake', 'BigQuery', 'Amazon Redshift', 'Azure Synapse',
      'Apache Kafka', 'AWS Kinesis', 'Azure Event Hubs', 'ETL / ELT',
      'Lakehouse', 'Medallion Architecture', 'Great Expectations', 'Microsoft Fabric',
    ],
    emphasis: ['Apache Spark', 'dbt', 'Snowflake', 'Databricks', 'Apache Airflow', 'Apache Kafka'],
  },
  {
    cat: 'AI & Generative AI',
    icon: '🧠',
    color: '#A78BFA',
    lightColor: '#7C3AED',
    accentRgb: '167,139,250',
    badge: '🔥 Core Focus',
    skills: [
      'LangChain', 'LlamaIndex', 'RAG Pipelines', 'Azure OpenAI', 'AWS Bedrock',
      'OpenAI API', 'Vector DBs', 'Prompt Engineering', 'AI Agents',
      'LLM Integration', 'Hugging Face', 'Embeddings', 'Tool Calling',
      'Generative AI', 'AI-Assisted Validation',
    ],
    emphasis: ['RAG Pipelines', 'LangChain', 'Azure OpenAI', 'AWS Bedrock', 'LLM Integration'],
  },
  {
    cat: 'ML & MLOps',
    icon: '🤖',
    color: '#F59E0B',
    lightColor: '#B45309',
    accentRgb: '245,158,11',
    badge: '📈 Production ML',
    skills: [
      'MLflow', 'AWS SageMaker', 'Databricks ML', 'Scikit-learn', 'Pandas', 'Polars',
      'Feature Engineering', 'Model Deployment', 'Experiment Tracking',
      'Batch Inference', 'Real-Time Inference', 'Hugging Face Transformers',
    ],
    emphasis: ['MLflow', 'AWS SageMaker', 'Model Deployment', 'Feature Engineering'],
  },
  {
    cat: 'Software Engineering',
    icon: '⚙️',
    color: '#0EA5E9',
    lightColor: '#0369A1',
    accentRgb: '14,165,233',
    badge: '⚡ Full Stack',
    skills: [
      'Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA',
      'Python', 'Go', 'Node.js', 'Express.js', 'Microservices',
      'REST APIs', 'GraphQL', 'OAuth2', 'JWT', 'Hibernate',
      'Kong', 'Apigee', 'Spring Cloud Gateway', 'MuleSoft', 'AWS API Gateway',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB',
      'RabbitMQ', 'AWS SQS', 'AWS SNS',
    ],
    emphasis: ['Java 17', 'Spring Boot', 'Spring Cloud Gateway', 'Kong', 'Microservices'],
  },
  {
    cat: 'Cloud & DevOps',
    icon: '☁️',
    color: '#3FB950',
    lightColor: '#16A34A',
    accentRgb: '63,185,80',
    badge: '🛰 Infrastructure',
    skills: [
      'AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Helm',
      'Jenkins', 'GitHub Actions', 'Azure DevOps', 'CI/CD Pipelines',
      'Datadog', 'Splunk', 'Grafana', 'Prometheus', 'OpenTelemetry',
      'CloudWatch', 'ELK Stack', 'IAM', 'Secrets Manager',
    ],
    emphasis: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    cat: 'Frontend & Analytics',
    icon: '🎨',
    color: '#7C3AED',
    lightColor: '#6D28D9',
    accentRgb: '124,58,237',
    badge: '🖼 Interfaces',
    skills: [
      'React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript',
      'HTML5', 'CSS3', 'Redux', 'RxJS', 'NgRx', 'Bootstrap',
      'Power BI', 'Tableau', 'Looker', 'Metabase', 'QuickSight',
      'Git', 'Agile / Scrum', 'TDD', 'System Design',
    ],
    emphasis: ['React', 'Next.js', 'Angular', 'TypeScript'],
  },
  {
    cat: 'AI Dev Tools',
    icon: '⚡',
    color: '#EC4899',
    lightColor: '#BE185D',
    accentRgb: '236,72,153',
    badge: '🆕 Daily Driver',
    skills: [
      'Cursor', 'Claude Code', 'GitHub Copilot', 'Windsurf',
      'MCP (Model Context Protocol)', 'v0 by Vercel', 'Cline', 'Aider',
      'Bolt.new', 'AI Pair Programming',
    ],
    emphasis: ['Cursor', 'Claude Code', 'GitHub Copilot', 'MCP (Model Context Protocol)'],
  },
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
      ([e]) => { if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'none'; obs.disconnect(); } },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function SkillCard({ group, delay, isDark }) {
  const ref = useReveal(delay);
  const [hovered, setHovered] = useState(false);
  const accentColor = isDark ? group.color : group.lightColor;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isDark ? '#161B22' : '#FFFFFF',
        border: `1px solid ${hovered ? accentColor + '55' : 'var(--border)'}`,
        borderRadius: 18,
        padding: '22px 20px',
        transition: 'all 0.35s ease',
        boxShadow: hovered
          ? `0 0 32px rgba(${group.accentRgb},0.13), 0 12px 40px rgba(0,0,0,${isDark ? 0.45 : 0.08})`
          : 'none',
        transform: hovered ? 'translateY(-5px)' : 'none',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${accentColor}, transparent)`,
        opacity: hovered ? 1 : 0.18,
        transition: 'opacity 0.35s',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10, fontSize: 17,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `rgba(${group.accentRgb},0.1)`,
            border: `1px solid rgba(${group.accentRgb},0.2)`,
            boxShadow: hovered ? `0 0 16px rgba(${group.accentRgb},0.25)` : 'none',
            transition: 'box-shadow 0.35s',
          }}>{group.icon}</div>
          <div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 13.5, color: 'var(--text-1)' }}>{group.cat}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--text-3)', marginTop: 1 }}>{group.skills.length} technologies</div>
          </div>
        </div>
        {group.badge && (
          <span style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 8,
            padding: '3px 8px', borderRadius: 100,
            background: `rgba(${group.accentRgb},0.1)`,
            color: accentColor,
            border: `1px solid rgba(${group.accentRgb},0.2)`,
            letterSpacing: '0.06em', whiteSpace: 'nowrap',
          }}>{group.badge}</span>
        )}
      </div>

      {/* Accent bar */}
      <div style={{
        height: 1.5, marginBottom: 14, borderRadius: 2,
        background: `linear-gradient(90deg,${accentColor},transparent)`,
        width: hovered ? '100%' : '35%',
        transition: 'width 0.5s ease',
      }} />

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {group.skills.map(s => {
          const isKey = group.emphasis && group.emphasis.includes(s);
          return (
            <span key={s} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 9.5,
              padding: '4px 10px', borderRadius: 100,
              background: isKey
                ? `rgba(${group.accentRgb},0.1)`
                : (isDark ? '#0D1117' : '#F0F4F8'),
              border: `1px solid ${isKey
                ? `rgba(${group.accentRgb},0.3)`
                : (hovered ? accentColor + '28' : 'var(--border)')}`,
              color: isKey ? accentColor : (hovered ? accentColor : 'var(--text-3)'),
              fontWeight: isKey ? 600 : 400,
              transition: 'all 0.25s',
            }}>{s}</span>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills({ theme }) {
  const isDark = theme === 'dark';
  const headerRef = useReveal(0);

  return (
    <section id="skills" style={{ background: 'var(--bg)', padding: 'clamp(80px,10vw,112px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>

        <p className="s-label" style={{ marginBottom: 16 }}>Skills</p>
        <div ref={headerRef} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 52 }}>
          <h2 style={{ maxWidth: 500, color: 'var(--text-1)', margin: 0 }}>
            What I bring{' '}<span className="grad-text">to the table</span>.
          </h2>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.06em' }}>
            // Data · AI · ML · Software · Cloud · Frontend · Dev Tools
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))', gap: 14 }}>
          {GROUPS.map((g, i) => (
            <SkillCard key={g.cat} group={g} delay={i * 75} isDark={isDark} />
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 60, fontFamily: "'Sora',sans-serif", fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-3)', fontWeight: 300 }}>
          &ldquo;Fast to learn. Confident to ship. Built for production.&rdquo;
        </p>
      </div>
    </section>
  );
}