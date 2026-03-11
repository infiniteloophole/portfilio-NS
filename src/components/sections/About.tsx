import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  expert: ["Java", "Spring Boot", "SQL", "Microservices", "Apache Kafka", "Redis", "REST API Design", "Distributed Systems", "MySQL", "Hibernate"],
  proficient: ["TypeScript", "JavaScript (ES6+)", "Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "JUnit 5"],
  learning: ["Resilience4j", "Circuit-Breaker", "CQRS", "JWT", "RBAC", "Event-Driven Systems", "React.js", "Jest", "Cypress", "Data Structures & Algorithms"]
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-bold text-lg uppercase tracking-widest text-muted-foreground">(About Me)</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-2">The Developer /</h2>
          </div>
          <p className="max-w-md font-bold text-lg leading-tight">
            Software Engineer — 4+ years building production healthcare systems with zero critical incidents. Specializing in distributed systems, microservices architecture, and high-throughput API optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-black leading-tight uppercase">
              Software Engineer with 4+ years sole-architecting and owning a production healthcare platform — zero to launch, 12+ quarterly releases, zero critical incidents. Built distributed systems handling concurrent healthcare workflows across 8 Spring Boot microservices, Kafka event pipelines, and Redis-optimised APIs.
            </p>
            <p className="text-lg font-bold leading-relaxed text-muted-foreground">
              Experienced in high-throughput system design, distributed architecture, and end-to-end CI/CD ownership. Strong foundation in data structures, algorithms, and computer science fundamentals. Proficient with Docker, Kubernetes, AWS, and observability stacks.
            </p>
            
            <div className="space-y-6 pt-8 border-t-2 border-black dark:border-white">
              <div>
                <h4 className="font-black text-xs uppercase text-muted-foreground mb-4 tracking-widest">Education</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-black text-lg uppercase">Patliputra University, Bihar</p>
                    <p className="font-bold text-sm text-muted-foreground uppercase">Bachelor of Computer Applications (BCA) — 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-black text-lg">★</span>
                Expert (4+ Years)
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.expert.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }}
                    className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black font-black text-xs uppercase border-2 border-black dark:border-white shadow-neubrutalism-sm dark:shadow-neubrutalism cursor-pointer hover:shadow-neubrutalism"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-secondary border-2 border-black dark:border-white font-black text-lg">◆</span>
                Proficient (2-3 Years)
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.proficient.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }}
                    className="px-3 py-1 bg-white dark:bg-black font-black text-xs uppercase border-2 border-black dark:border-white shadow-neubrutalism-sm dark:shadow-neubrutalism hover:shadow-neubrutalism cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white text-muted-foreground font-black text-sm">→</span>
                Learning & Exploring
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.learning.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-muted-foreground font-black text-xs uppercase border-2 border-dashed border-black dark:border-white hover:border-solid transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
