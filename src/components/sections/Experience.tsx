import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Developer — Backend & Full-Stack",
    company: "Flucent Technologies Pvt. Ltd.",
    period: "Feb 2022 – Present",
    location: "New Delhi, India",
    points: [
      "Architected 8-service Spring Boot microservices platform serving healthcare workflows across 40+ REST endpoints — domain-driven boundaries, versioned API contracts, MySQL schema migrations — enabled 6 engineers to deploy independently, cutting integration bugs by ~40%.",
      "Eliminated N+1 queries across 14 endpoints via compound MySQL indexes + Redis caching — boosted API throughput 25%, halved p95 response time under 300 concurrent users, zero infra cost increase.",
      "Decoupled appointment and notification workflows onto Kafka (3 producers, 5 consumers) — reduced failed notification rate from ~12% to <1%, each service now scales independently.",
      "Cut frontend load time by 35% via React code splitting, lazy loading, WebP compression — reduced bounce rate on patient pages, validated with Lighthouse CI.",
      "Built real-time AI health assistant with OpenAI streaming — multi-turn context management, prompt templating, safety guardrails, Google GenAI fallback — sub-2s p95 response time in production.",
      "Integrated Razorpay with idempotent webhook handling, subscription state machine, and failed-transaction reconciliation — supporting live billing for consultations and subscriptions.",
      "Established GitHub Actions CI/CD pipeline (lint → JUnit 5 → Docker build → staged deploy) — 12+ consecutive sprint releases on schedule, zero critical incidents across 3 years."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-bold text-lg uppercase tracking-widest text-muted-foreground">(Experience)</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-2">Work History /</h2>
          </div>
          <p className="max-w-md font-bold text-lg leading-tight">
            Professional journey building production systems and enterprise solutions.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-2 border-black dark:border-white p-8 bg-white dark:bg-black shadow-neubrutalism dark:shadow-neubrutalism-dark hover:shadow-neubrutalism-lg dark:hover:shadow-neubrutalism-dark hover:scale-105 transition-all origin-left"
            >
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full" />
                  <h3 className="text-3xl font-black uppercase">{exp.role}</h3>
                </div>
                <p className="text-xl font-black text-accent mb-4 uppercase">{exp.company}</p>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm bg-black dark:bg-white text-white dark:text-black px-2 py-1 inline-block w-fit uppercase shadow-neubrutalism-sm">{exp.period}</span>
                  <span className="font-bold text-sm text-muted-foreground uppercase">{exp.location}</span>
                </div>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start group/item">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-black dark:bg-white shrink-0 group-hover/item:scale-150 transition-transform" />
                      <p className="font-bold text-lg leading-tight group-hover/item:text-black dark:group-hover/item:text-white transition-colors">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
