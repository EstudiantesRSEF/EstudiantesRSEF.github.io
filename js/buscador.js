function buscarGrupo() {
  const input = document.getElementById("codigo").value.trim().toLowerCase();
  const codigo = input.toUpperCase();
  const resultado = document.getElementById("resultado");
  if (codigos[codigo]) {
    resultado.textContent = `Tu grupo es: ${codigos[codigo]}`;
  } else {
    resultado.textContent = "Código no encontrado. Verifica que esté bien escrito.";
  }
}
