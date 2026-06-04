
// INTERAÇÃO 1 — Alternância de tema claro/escuro
function alternarTema() {
  const body = document.body;
  const btn = document.getElementById("btn-tema");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "\u2600\uFE0F Modo Claro";
  } else {
    btn.textContent = "\u1F319 Modo Escuro";
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


// INTERAÇÃO 3 — Validação e envio do formulário
function enviarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const feedback = document.getElementById("feedback-form");

  // Validação dos campos
  if (!nome || !email || !mensagem) {
    feedback.textContent = "\u26A0\uFE0F Por favor, preencha todos os campos antes de enviar.";
    feedback.style.color = "#e53e3e";
    return;
  }

  // Validação básica de e-mail
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    feedback.textContent = "\u26A0\uFE0F Informe um e-mail válido.";
    feedback.style.color = "#e53e3e";
    return;
  }

  // Sucesso
  feedback.textContent = `\u2705 Mensagem enviada com sucesso! Obrigado, ${nome}. Entrarei em contato em breve.`;
  feedback.style.color = "#38a169";

  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
}

// EXTRA — Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const alvo = document.querySelector(this.getAttribute("href"));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});
