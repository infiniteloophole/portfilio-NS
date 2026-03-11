import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Highlights', id: 'highlights' },
    { name: 'Works', id: 'works' },
    { name: 'Experience', id: 'experience' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white dark:bg-black border-2 border-black dark:border-white px-4 py-2 shadow-neubrutalism dark:shadow-neubrutalism-dark pointer-events-auto cursor-pointer hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all duration-300 ease-out"
        >
          <span className="font-black text-lg lg:text-xl tracking-tight uppercase">Najmus Saquib</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-3 pointer-events-auto">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white dark:bg-black border-2 border-black dark:border-white px-5 py-2 font-bold text-sm shadow-neubrutalism dark:shadow-neubrutalism-dark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all duration-300 ease-out uppercase"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => window.open('https://docs.google.com/document/d/1fW_kUJKi5y6wC8O035JyrXXzoCj-sqWQ/edit?usp=sharing', '_blank')}
            className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white px-5 py-2 font-bold text-sm shadow-neubrutalism dark:shadow-neubrutalism-dark hover:translate-y-[2px] hover:shadow-neubrutalism-sm transition-all duration-300 ease-out uppercase"
          >
            CV
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden pointer-events-auto bg-black text-white dark:bg-white dark:text-black border-2 border-white dark:border-black p-2 shadow-neubrutalism-dark dark:shadow-neubrutalism transition-all duration-300 ease-out"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 pointer-events-auto p-6 flex flex-col pt-24 gap-4 overflow-y-auto"
          >
             {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="text-4xl sm:text-5xl font-black text-black dark:text-white hover:italic transition-all duration-300 ease-out uppercase text-left border-b-2 border-black dark:border-white pb-2"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://docs.google.com/document/d/1fW_kUJKi5y6wC8O035JyrXXzoCj-sqWQ/edit?usp=sharing', '_blank')}
              className="bg-black text-white dark:bg-white dark:text-black border-4 border-black dark:border-white px-8 py-4 text-2xl font-black shadow-neubrutalism-lg dark:shadow-neubrutalism-dark mt-4 uppercase transition-all duration-300 ease-out hover:translate-y-[2px]"
            >
              Download CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
