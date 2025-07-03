// Welcome Message
window.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Jherome's Portfolio!");
  alert("Hello, Jherome! Enjoy browsing your portfolio 🎯");
  fadeInBody();
  setupScrollToTop();
  setupDarkModeToggle();
});

// Smooth fade-in animation
function fadeInBody() {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1s ease-in-out";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
}

// Scroll to top button
function setupScrollToTop() {
  const btn = document.createElement('button');
  btn.innerText = "↑ Top";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "0.5rem 1rem";
  btn.style.background = "#38bdf8";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.color = "#fff";
  btn.style.cursor = "pointer";
  btn.style.zIndex = 1000;
  btn.style.display = "none";
  btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Auto dark mode toggle with a button
function setupDarkModeToggle() {
  const toggle = document.createElement('button');
  toggle.innerText = "🌃 Toggle Theme";
  toggle.style.position = "fixed";
  toggle.style.top = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "0.4rem 0.8rem";
  toggle.style.borderRadius = "8px";
  toggle.style.background = "#1e293b";
  toggle.style.color = "#f1f5f9";
  toggle.style.border = "none";
  toggle.style.cursor = "pointer";
  toggle.style.zIndex = 1001;
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('light-theme');
    toggle.innerText = isDark ? "🌙 Dark Mode" : "🌞 Light Mode";
  });
}
