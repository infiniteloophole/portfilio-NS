import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Wellness Platform",
    category: "Healthcare / AI",
    year: "2022",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    desc: "Sole architect — 8 microservices, 3NF-normalised schema (22 tables), 40+ versioned REST endpoints, multi-role dashboards with AI health chat and habit analytics.",
    problem: "Fragmented healthcare workflows and lack of AI-driven personalization.",
    solution: "Built distributed platform with Spring Boot microservices, Kafka event pipelines, and OpenAI integration.",
    impact: [
      { label: "Services", value: "8" },
      { label: "Endpoints", value: "40+" },
      { label: "Uptime", value: "99.9%" }
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "OpenAI API", "MySQL", "Redis", "Docker", "Tailwind CSS"],
    links: { github: "https://github.com/devastator99/HealthcareV2", live: "#" }
  },
  {
    title: "FlashLink — Distributed High-Throughput URL Shortener",
    category: "Backend / Distributed Systems",
    year: "2023",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    desc: "Built distributed URL shortener supporting 10K+ redirects/sec — Redis caching for sub-5ms lookups, Resilience4j circuit-breaker for fault isolation, Kafka async analytics pipeline.",
    problem: "High-throughput URL shortening with fault tolerance and analytics.",
    solution: "Implemented distributed architecture with Redis, Kafka, and observability stack.",
    impact: [
      { label: "Throughput", value: "10K+/sec" },
      { label: "Latency", value: "<5ms" },
      { label: "Availability", value: "99.9%" }
    ],
    stack: ["Spring Boot", "Java 17", "React 18", "Redis", "Kafka", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    links: { github: "https://github.com/devastator99/flashlink", live: "#" }
  }
];

export const Work = () => {
  return (
    <section id="works" className="py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-4">
          <div>
            <span className="font-bold text-lg uppercase tracking-widest text-muted-foreground">(Projects)</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-2">Selected Works /</h2>
          </div>
          <p className="max-w-md font-bold text-lg leading-tight">
            A selection of production-focused projects across AI, automation, and full-stack product engineering.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Area */}
                <div className="lg:col-span-7">
                  <div className="relative border-2 border-black dark:border-white bg-white dark:bg-black p-2 shadow-neubrutalism dark:shadow-neubrutalism-dark overflow-hidden">
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="bg-black text-white px-3 py-1 font-black text-xs uppercase">{project.category}</span>
                      <span className="bg-white text-black border-2 border-black px-3 py-1 font-black text-xs uppercase">{project.year}</span>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                      <a href={project.links.github} className="bg-white text-black p-4 border-2 border-black shadow-neubrutalism hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all">
                        <Github size={24} />
                      </a>
                      <a href={project.links.live} className="bg-black text-white p-4 border-2 border-white shadow-neubrutalism-dark hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-bold text-lg mb-8 leading-snug">{project.desc}</p>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-black text-xs uppercase text-muted-foreground mb-2 tracking-widest">The Problem</h4>
                        <p className="font-bold text-sm leading-tight">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-black text-xs uppercase text-muted-foreground mb-2 tracking-widest">The Solution</h4>
                        <p className="font-bold text-sm leading-tight">{project.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {project.impact.map((stat, i) => (
                        <div key={i} className="border-2 border-black dark:border-white p-3 bg-secondary/50 dark:bg-zinc-900/50">
                          <p className="text-xl font-black">{stat.value}</p>
                          <p className="text-[10px] font-black uppercase text-muted-foreground leading-none mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-black uppercase border-2 border-black dark:border-white px-2 py-1 bg-white dark:bg-black">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
