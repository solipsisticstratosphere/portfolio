import React, { useEffect } from "react";
import AnimatedBackground from "./components/common/AnimatedBackground";
import GeometricBackground from "./components/common/GeometricBackground";
import Navigation from "./components/common/Navigation";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import { useScrollEffect } from "./hooks/useScrollEffect";

const App = () => {
  // Use the custom hook for smooth scrolling
  useScrollEffect();

  // Apply global animation styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 25s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      .animation-delay-6000 {
        animation-delay: 6s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="text-gray-100 min-h-screen relative">
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 z-[-2]" />
        <AnimatedBackground />
        <GeometricBackground />

        <Navigation />

        <main className="pt-16 relative z-0">
          <section id="hero" className="min-h-screen scroll-mt-20">
            <Hero />
          </section>

          <section id="about" className="scroll-mt-20">
            <About />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>

          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
        </main>

        <footer className="bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg border-t border-gray-800/30 py-6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Yaroslav Klimenko. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
