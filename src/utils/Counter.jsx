import React, { useState, useEffect } from "react";

function Counter({ title, upto = 10000, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now(); // Record the start time
    const endTime = startTime + duration; // Calculate the end time

    const updateCounter = () => {
      const now = Date.now(); // Current time
      const elapsed = now - startTime; // Time elapsed since start

      if (now >= endTime) {
        // If the duration has passed, set the count to the final value
        setCount(upto);
        return;
      }

      // Use an easing function to calculate the current count
      const progress = elapsed / duration; // Progress as a fraction (0 to 1)
      const easedProgress = easeOutCubic(progress); // Apply easing for slowing effect
      const newCount = Math.min(Math.floor(easedProgress * upto), upto); // Calculate the new count

      setCount(newCount);

      // Continue updating until the duration is complete
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    // Start the animation loop
    updateCounter();
  }, [upto, duration]);

  // Easing function for slowing effect
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  return (
    <div className="border-t border-red-300 flex flex-col">
      {/* Gradient Text */}
      <span
        className="text-3xl font-bold"
        style={{
          background: "linear-gradient(to right, #000, #feb47b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count} +
      </span>
      <span>{title}</span>
    </div>
  );
}

export default Counter;
