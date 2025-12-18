document.addEventListener("DOMContentLoaded", () => {
  const patternContainer = document.getElementById("beige-pattern-container");

  // Dynamically generate pattern elements
  const createPatterns = (count = 5) => {
    for (let i = 0; i < count; i++) {
      const pattern = document.createElement("div");
      pattern.className = "beige-pattern";
      pattern.style.left = `${50 + i * 10}%`;
      pattern.style.top = `${50 - i * 10}%`;
      patternContainer.appendChild(pattern);
    }
  };

  // Initialize the patterns
  createPatterns();

  // Parallax animation effect for mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const patterns = document.querySelectorAll(".beige-pattern");

    patterns.forEach((pattern, index) => {
      const speed = (index + 1) * 0.05;
      pattern.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  };

  // Attach mousemove event
  window.addEventListener("mousemove", handleMouseMove);
});