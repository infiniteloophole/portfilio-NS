import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: "4+", label: "Years Experience", description: "Architecting production healthcare systems", color: "bg-blue-50 border-blue-200" },
  { value: "8", label: "Microservices", description: "Spring Boot services with Kafka event pipelines", color: "bg-purple-50 border-purple-200" },
  { value: "25%", label: "API Throughput ↑", description: "Via Redis caching & MySQL optimization", color: "bg-green-50 border-green-200" },
  { value: "99.9%", label: "Uptime", description: "Zero critical incidents across 3+ years", color: "bg-emerald-50 border-emerald-200" },
  { value: "<1%", label: "Failed Notifications ↓", description: "Reduced from ~12% via Kafka decoupling", color: "bg-orange-50 border-orange-200" },
  { value: "12+", label: "Sprint Releases", description: "Consecutive on-schedule deliveries", color: "bg-red-50 border-red-200" }
];

export const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-secondary/30 dark:bg-zinc-900/30 border-t-2 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-bold text-lg uppercase tracking-widest text-muted-foreground">(Metrics)</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-2">Impact & Scale /</h2>
          </div>
          <p className="max-w-md font-bold text-lg leading-tight">
            Quantified results from production systems and real-world implementations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border-2 border-black dark:border-white bg-white dark:bg-black shadow-neubrutalism dark:shadow-neubrutalism-dark hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-black mb-2 uppercase tracking-tight text-black dark:text-white">{metric.value}</h3>
                <h4 className="text-lg font-black uppercase mb-4 text-black dark:text-white border-b-2 border-black dark:border-white pb-2">{metric.label}</h4>
                <p className="font-bold text-sm text-muted-foreground leading-tight">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 border-2 border-black dark:border-white bg-white dark:bg-black shadow-neubrutalism-lg dark:shadow-neubrutalism-dark">
          <h3 className="text-2xl font-black uppercase mb-12 text-center">System Architecture Overview</h3>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full font-mono text-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="border-2 border-black dark:border-white p-4 bg-blue-50 dark:bg-blue-950 font-bold text-center flex-1 mx-1">
                  <div className="text-xs uppercase font-black mb-1">Clients</div>
                  <div className="text-lg font-black">Web / Mobile</div>
                </div>
                <div className="flex-1 text-center text-2xl font-black">→</div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex-1 text-center text-2xl font-black">↓</div>
              </div>

              <div className="flex justify-between items-center mb-8 gap-2">
                <div className="border-2 border-black dark:border-white p-4 bg-purple-50 dark:bg-purple-950 font-bold text-center flex-1">
                  <div className="text-xs uppercase font-black mb-1">API Gateway</div>
                  <div className="text-sm font-black">Load Balancing</div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex-1 text-center text-2xl font-black">↓</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {['Appointments', 'Billing', 'Notifications', 'Analytics'].map((service, i) => (
                  <div key={i} className="border-2 border-black dark:border-white p-3 bg-green-50 dark:bg-green-950 font-bold text-center">
                    <div className="text-xs uppercase font-black">{service}</div>
                    <div className="text-[10px] font-bold mt-1">Service</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex-1 text-center text-2xl font-black">↓</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="border-2 border-black dark:border-white p-4 bg-orange-50 dark:bg-orange-950 font-bold text-center">
                  <div className="text-xs uppercase font-black mb-1">Message Queue</div>
                  <div className="text-sm font-black">Kafka (5 Topics)</div>
                </div>
                <div className="border-2 border-black dark:border-white p-4 bg-red-50 dark:bg-red-950 font-bold text-center">
                  <div className="text-xs uppercase font-black mb-1">Cache Layer</div>
                  <div className="text-sm font-black">Redis (TTL)</div>
                </div>
                <div className="border-2 border-black dark:border-white p-4 bg-cyan-50 dark:bg-cyan-950 font-bold text-center">
                  <div className="text-xs uppercase font-black mb-1">Database</div>
                  <div className="text-sm font-black">MySQL (22 Tables)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 p-8 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black shadow-neubrutalism-lg dark:shadow-neubrutalism-dark">
          <h3 className="text-3xl font-black uppercase mb-8 border-b border-white/20 dark:border-black/20 pb-4">Key Achievements</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { text: "Architected 8-service Spring Boot platform with 40+ REST endpoints", icon: "🏗️" },
              { text: "Maintained 99.9% uptime with zero critical incidents over 3 years", icon: "🛡️" },
              { text: "25% API throughput improvement via Redis caching & MySQL tuning", icon: "⚡" },
              { text: "Decoupled Kafka pipelines reducing notification failures 12% → <1%", icon: "📊" },
              { text: "Shipped 12+ consecutive sprint releases on schedule", icon: "🚀" },
              { text: "Built real-time AI health assistant with sub-2s response time", icon: "🤖" }
            ].map((achievement, i) => (
              <li key={i} className="flex gap-4 items-start font-bold group hover:translate-x-2 transition-transform">
                <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                <span className="text-base leading-snug">{achievement.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
