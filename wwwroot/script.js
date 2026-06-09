// INTERAÇÃO 1 — Alternância de tema claro/escuro
function alternarTema() {
  const body = document.body;
  const btn = document.getElementById("btn-tema");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "\u2600\uFE0F Modo Claro";
  } else {
    btn.textContent = "\uD83C\uDF19 Modo Escuro";
  }
}

// INTERAÇÃO 2 — Alerta de boas-vindas
function mostrarBoasVindas() {
  alert(
    "👋 Olá! Seja bem-vindo ao meu portfólio!\n\n" +
    "Aqui você vai encontrar minhas habilidades, projetos e formas de contato.\n\n" +
    "Fique à vontade para explorar! 🚀"
  );
}

// INTERAÇÃO 3 — Envio de formulário via Formspree
const form = document.getElementById("meu-form");
const feedback = document.getElementById("feedback-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      feedback.textContent = "\u2705 Mensagem enviada! Entrarei em contato em breve.";
      feedback.style.color = "#38a169";
      form.reset();
    } else {
      feedback.textContent = "\u26A0\uFE0F Erro ao enviar. Tente novamente mais tarde.";
      feedback.style.color = "#e53e3e";
    }
  } catch (error) {
    feedback.textContent = "\u26A0\uFE0F Erro de conexão. Verifique sua internet.";
    feedback.style.color = "#e53e3e";
  }
});

// EXTRA — Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const alvo = document.querySelector(this.getAttribute("href"));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});