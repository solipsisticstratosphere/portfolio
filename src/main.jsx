import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const addCriticalStyles = () => {
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    body, html { margin: 0; padding: 0; background-color: #111827; }
    h1 { font-size: 2.5rem; line-height: 1.2; }
    .min-h-screen { min-height: 100vh; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .justify-center { justify-content: center; }
    .px-8 { padding-left: 2rem; padding-right: 2rem; }
    .text-transparent { color: transparent; }
    @media (min-width: 768px) {
      .md\\:px-16 { padding-left: 4rem; padding-right: 4rem; }
      h1 { font-size: 3.5rem; }
    }
  `;

  document.head.insertBefore(styleEl, document.head.firstChild);
};

const addResourceHints = () => {
  const preloadLinks = [
    {
      rel: "preload",
      href: "/fonts/main-font.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];

  const preconnectLinks = [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
  ];

  [...preloadLinks, ...preconnectLinks].forEach((linkAttributes) => {
    if (linkAttributes.as === "font") {
      try {
        fetch(linkAttributes.href, { method: "HEAD" }).catch(() => {
          return;
        });
      } catch {
        return;
      }
    }

    const link = document.createElement("link");
    Object.entries(linkAttributes).forEach(([key, value]) => {
      link[key] = value;
    });
    document.head.appendChild(link);
  });
};

const optimizeLCP = () => {
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.setAttribute("fetchpriority", "high");

    h1.getBoundingClientRect();
  }
};

const addMetadata = () => {
  const meta = document.createElement("meta");
  meta.name = "priority";
  meta.content = "highest";
  document.head.appendChild(meta);
};

addCriticalStyles();
addResourceHints();
addMetadata();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

optimizeLCP();

const runWhenIdle = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: 2000 });
  } else {
    setTimeout(callback, 1000);
  }
};

runWhenIdle(() => {
  if ("PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime);
        }
      });
    });
    observer.observe({ type: "largest-contentful-paint", buffered: true });
  }
});
