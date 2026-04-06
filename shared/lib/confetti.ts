"use client";

import confetti from "canvas-confetti";

export function fireSuccessConfetti() {
  const duration = 1600;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 28,
    spread: 360,
    ticks: 70,
    zIndex: 9999,
    scalar: 0.9,
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      window.clearInterval(interval);
      return;
    }

    const particleCount = 26 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.2, 0.4),
        y: randomInRange(0.2, 0.45),
      },
      colors: ["#8db7d6", "#9cc2dd", "#dceffc", "#ffffff"],
    });

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.6, 0.8),
        y: randomInRange(0.2, 0.45),
      },
      colors: ["#8db7d6", "#9cc2dd", "#dceffc", "#ffffff"],
    });
  }, 220);
}