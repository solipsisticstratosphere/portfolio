export const blobAnimation = `
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

export const buttonHoverAnimation = {
  scale: 1.05,
  boxShadow: "0 0 15px rgba(129, 140, 248, 0.5)",
};

export const buttonTapAnimation = {
  scale: 0.95,
};

export const cardHoverAnimation = {
  y: -8,
  transition: { duration: 0.2 },
};

export const cardEntryAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (delay) => ({ delay, duration: 0.5 }),
};

export const modalBackdropAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export const modalContentAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.3 },
};
