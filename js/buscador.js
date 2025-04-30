function buscarGrupo() {
  const input = document.getElementById("codigo").value.trim().toLowerCase();
  var groupCard = document.getElementById("group-card");
  const codigo = input.toUpperCase();
  const resultado = document.getElementById("resultado");
  if (codigos[codigo]) {
    resultado.textContent = `You're in the group named: ${codigos[codigo]}`;
    groupCard.style.display = "block";
  } else {
    resultado.textContent = "Code not found. Please verify that it is correctly written.";
  }
}
