document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const menu = document.querySelector(".menu");
const hoverBg = document.querySelector(".hover-bg");
const items = document.querySelectorAll(".menu li");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const rect = item.getBoundingClientRect();
    const parentRect = menu.getBoundingClientRect();

    hoverBg.style.width = `${rect.width}px`;
    hoverBg.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    hoverBg.style.opacity = 1; // mostra a barra
  });
});

// quando o mouse sair do menu, só muda a opacidade
menu.addEventListener("mouseleave", () => {
  hoverBg.style.opacity = 0;
});
