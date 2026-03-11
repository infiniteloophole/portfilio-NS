import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail, Phone, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Highlights', id: 'highlights' },
    { name: 'Works', id: 'works' },
    { name: 'Experience', id: 'experience' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { name: 'Linkedin', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/najmussaquib9' },
    { name: 'Github', icon: <Github size={20} />, url: 'https://github.com/devastator99' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:nsaquib22@gmail.com' },
    { name: 'Phone', icon: <Phone size={20} />, url: 'tel:+917870650300' }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-bold text-lg uppercase tracking-widest text-muted-foreground">(Let's Talk)</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-2">Let's Make It Happen /</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-2 border-white dark:border-black shadow-neubrutalism-lg dark:shadow-neubrutalism-dark inline-block">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-black text-sm uppercase">Available for Opportunities</span>
              </div>
              <p className="font-bold text-xs text-white dark:text-black/60">Typically respond within 24 hours</p>
            </div>

            <div>
              <h3 className="text-3xl font-black uppercase mb-6 italic">Say Hello</h3>
              <p className="text-lg font-bold leading-relaxed mb-8">
                Open to full-time roles and impactful software engineering projects. Let's discuss how I can help scale your systems.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:nsaquib22@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 border-2 border-black dark:border-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all shadow-neubrutalism dark:shadow-neubrutalism-dark group-hover:shadow-neubrutalism-sm dark:group-hover:shadow-neubrutalism-sm">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase font-bold text-muted-foreground">Email</p>
                    <span className="text-xl font-black border-b-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-all">nsaquib22@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+917870650300" className="flex items-center gap-4 group">
                  <div className="p-3 border-2 border-black dark:border-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all shadow-neubrutalism dark:shadow-neubrutalism-dark group-hover:shadow-neubrutalism-sm dark:group-hover:shadow-neubrutalism-sm">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase font-bold text-muted-foreground">Phone</p>
                    <span className="text-xl font-black border-b-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-all">+91-7870650300</span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase text-muted-foreground mb-6 tracking-widest">Social Links</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white dark:bg-black border-2 border-black dark:border-white px-4 py-2 font-black uppercase text-sm shadow-neubrutalism dark:shadow-neubrutalism-dark hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all"
                  >
                    {link.icon} {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-neubrutalism-lg dark:shadow-neubrutalism-dark">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-black text-xs uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-secondary/30 dark:bg-zinc-900/30 border-2 border-black dark:border-white p-4 font-bold outline-none focus:bg-white dark:focus:bg-black transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-black text-xs uppercase tracking-widest">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-secondary/30 dark:bg-zinc-900/30 border-2 border-black dark:border-white p-4 font-bold outline-none focus:bg-white dark:focus:bg-black transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-black text-xs uppercase tracking-widest">Your Message</label>
                <textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-secondary/30 dark:bg-zinc-900/30 border-2 border-black dark:border-white p-4 font-bold outline-none focus:bg-white dark:focus:bg-black transition-all resize-none"
                />
              </div>
              <button className="group w-full bg-black text-white dark:bg-white dark:text-black p-4 text-xl font-black uppercase flex items-center justify-center gap-2 hover:bg-accent dark:hover:bg-accent hover:text-white transition-all">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-24 mt-24 border-t-2 border-black dark:border-white grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-8">
             <h3 className="text-2xl font-black uppercase italic">Najmus Saquib</h3>
             <p className="font-bold text-sm text-muted-foreground uppercase leading-tight">
               Software Engineer — 4+ years architecting production distributed systems with zero critical incidents. Specialized in Spring Boot microservices, Kafka, Redis, and system design.
             </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-xs uppercase text-muted-foreground mb-6 tracking-widest">Menu</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left font-black uppercase text-sm hover:italic hover:translate-x-1 transition-all"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-xs uppercase text-muted-foreground mb-6 tracking-widest">Socials</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="font-black uppercase text-sm hover:italic hover:translate-x-1 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right">
              <h4 className="font-black text-xs uppercase text-muted-foreground mb-2 tracking-widest">Local time</h4>
              <p className="text-2xl font-black uppercase">{time}</p>
              <p className="text-xs font-black uppercase text-muted-foreground">Patna, India</p>
            </div>
            <p className="mt-12 text-xs font-black uppercase text-muted-foreground">
              © {new Date().getFullYear()} Najmus Saquib. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
