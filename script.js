window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.staggered-fade');
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
    });

    const starContainer = document.getElementById('star-container');
    const numStars = 800;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 200}vh`;
      star.style.left = `${Math.random() * 98}vw`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starContainer.appendChild(star);
      stars.push(star);
    }

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      stars.forEach(star => {
        const rect = star.getBoundingClientRect();
        const dx = rect.left + 1 - mouseX;
        const dy = rect.top + 1 - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const intensity = 1 - dist / 50;
          star.style.boxShadow = `0 0 ${10 * intensity}px white`;
          star.style.transform = `scale(${1 + 0.5 * intensity})`;
        } else {
          star.style.boxShadow = 'none';
          star.style.transform = 'scale(1)';
        }
      });
    });
  });

function copyDiscord() {
    const discordUsername = "gameboyfunny101";

    // Use Clipboard API
    navigator.clipboard.writeText(discordUsername)
      .then(() => {
        alert("Copied Discord username to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
    });
}
window.onload = () => {
  const follower = document.getElementById("follower");
  const halfSize = 25; // 50px / 2

  // Initial position at center of screen
  let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let mouse = { x: pos.x, y: pos.y };

  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    // Smooth movement toward mouse
    pos.x += (mouse.x - pos.x) * 0.1;
    pos.y += (mouse.y - pos.y) * 0.1;

    // Clamp position so it stays in window
    pos.x = Math.min(window.innerWidth - halfSize, Math.max(halfSize, pos.x));
    pos.y = Math.min(window.innerHeight - halfSize, Math.max(halfSize, pos.y));

    // Calculate rotation angle
    const dx = mouse.x - pos.x;
    const dy = mouse.y - pos.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Apply transform
    follower.style.left = `${pos.x}px`;
    follower.style.top = `${pos.y}px`;
    follower.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    requestAnimationFrame(animate);
  }

  animate();
};