/*
Projeto desenvolvido como atividade acadêmica da disciplina Desenvolvimento Web III, sob responsabilidade do
Prof. Dr. Márcio Rodrigo Santos - TADS - IFPR/Campus Colombo, além de figurar no meu portfólio do GitHub 
como projeto de prática e consolidação de habilidades como desenvolvedor web FullStack.

Desenvolvedor: Fabio de Matos
-->
*/

document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === page) link.classList.add("active");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.12});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const msg = document.querySelector("#formMessage");
      msg.textContent = "Mensagem preparada com sucesso! Este formulário é demonstrativo para fins acadêmicos.";
      msg.className = "notice";
      form.reset();
    });
  }
});
