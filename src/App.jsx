import React, { useEffect, lazy, Suspense, useState } from "react";
import Navigation from "./components/common/Navigation";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Hero from "./components/sections/Hero";
import { useScrollEffect } from "./hooks/useScrollEffect";

const About = lazy(() => import("./components/sections/About"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));

const AnimatedBackground = lazy(() =>
  import("./components/common/AnimatedBackground")
);
const GeometricBackground = lazy(() =>
  import("./components/common/GeometricBackground")
);

const LoadingFallback = () => <div className="min-h-screen"></div>;

const App = () => {
  const [showNonCritical, setShowNonCritical] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false);

  useScrollEffect();

  useEffect(() => {
    const reportLCP = () => {
      const perfEntries = performance.getEntriesByType("paint");
      const lcpEntry = perfEntries.find(
        (entry) => entry.name === "largest-contentful-paint"
      );
      if (lcpEntry) {
        console.log("LCP time:", lcpEntry.startTime);
      }
    };

    const nonCriticalTimer = setTimeout(() => {
      setShowNonCritical(true);
      reportLCP();
    }, 1000);

    const backgroundsTimer = setTimeout(() => {
      setShowBackgrounds(true);
    }, 2500);

    return () => {
      clearTimeout(nonCriticalTimer);
      clearTimeout(backgroundsTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 2000);
    return () => {
      clearTimeout(timer);
      const style = document.head.querySelector("style:last-child");
      if (style) document.head.removeChild(style);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="text-gray-100 min-h-screen relative">
        {/* Simple gradient background for initial render */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 z-[-2]" />

        {/* Priority content - Navigation and Hero */}
        <Navigation />
        <main className="pt-16 relative z-0">
          <section id="hero" className="min-h-screen scroll-mt-20">
            <Hero />
          </section>

          {/* Defer non-critical components */}
          {showNonCritical && (
            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          )}

          {/* Load backgrounds after everything else */}
          {showBackgrounds && (
            <Suspense fallback={null}>
              <AnimatedBackground />
              <GeometricBackground />
            </Suspense>
          )}
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
