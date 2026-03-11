import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain } from 'lucide-react';

const services = [
  {
    number: "(01)",
    title: "Distributed Systems & Microservices",
    description: "High-throughput backend architectures using Spring Boot microservices, Kafka event pipelines, and Redis caching for healthcare workflows.",
    tags: ["Spring Boot", "Apache Kafka", "Redis", "System Design"],
    icon: <Globe size={40} />
  },
  {
    number: "(02)",
    title: "Performance & Optimization",
    description: "API throughput optimization, MySQL query tuning, compound indexing, and caching strategies—sub-5ms latencies at scale.",
    tags: ["MySQL", "Query Optimization", "Performance Profiling"],
    icon: <Smartphone size={40} />
  },
  {
    number: "(03)",
    title: "DevOps & Reliability",
    description: "Production observability with Prometheus/Grafana, CI/CD automation, Kubernetes deployments, and zero-incident operations.",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus"],
    icon: <Brain size={40} />
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-bold text-lg uppercase tracking-widest text-muted-foreground">(Services)</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-2">What I Do /</h2>
          </div>
          <p className="max-w-md font-bold text-lg leading-tight">
            Software Engineer specializing in production distributed systems, microservices architecture, and high-performance APIs with measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border-2 border-black dark:border-white bg-white dark:bg-black shadow-neubrutalism dark:shadow-neubrutalism-dark hover:translate-y-[-8px] hover:translate-x-[-8px] hover:shadow-neubrutalism-lg dark:hover:shadow-neubrutalism-dark transition-all"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-black text-2xl uppercase">{service.number}</span>
                <div className="p-3 border-2 border-black dark:border-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-3xl font-black uppercase mb-4 leading-none">{service.title}</h3>
              <p className="font-bold mb-8 text-muted-foreground">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary border-2 border-black dark:border-white text-xs font-black uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
