const login_btn = document.querySelector("#login-btn");
const cadastro_btn = document.querySelector("#cadastro-btn");
const container = document.querySelector(".container");

cadastro_btn.addEventListener('click', () => {
  container.classList.add("cadastro-mode");
});

login_btn.addEventListener('click', () => {
  container.classList.remove("cadastro-mode");
});

