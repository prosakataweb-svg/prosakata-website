// Smooth scroll للروابط داخل الصفحة
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const targetId = link.getAttribute("href");
  if (targetId.length <= 1) return;

  const targetEl = document.querySelector(targetId);
  if (!targetEl) return;

  event.preventDefault();
  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
});

// AI assistant panel toggle
const fab = document.querySelector(".ai-fab");
const panel = document.getElementById("ai-panel");
const closeBtn = panel?.querySelector(".ai-close");

if (fab && panel) {
  fab.addEventListener("click", () => {
    panel.classList.toggle("open");
  });
}

if (closeBtn && panel) {
  closeBtn.addEventListener("click", () => {
    panel.classList.remove("open");
  });
}
