// Rolagem suave para âncoras (mantido)
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

// Hover do menu (mantido)
const menu = document.querySelector(".menu");
const hoverBg = document.querySelector(".hover-bg");
menu.addEventListener("mouseleave", () => {
  hoverBg.style.opacity = 0;
});

// Menu expansível
const header = document.querySelector('header');

// Ao clicar em qualquer lugar do header, abre o menu
header.addEventListener('click', (e) => {
  e.stopPropagation(); // evita que o clique seja interpretado como fora
  header.classList.add('expanded'); // abre o menu
});

// Fecha ao clicar fora do header
document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    header.classList.remove('expanded'); // fecha o menu
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-up');

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, index * 200); // atraso progressivo entre cada item
  });
});

