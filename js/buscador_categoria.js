function buscarCategoria() {
  const input = document.getElementById("codigo").value.trim().toUpperCase();
  
  var groupCard = document.getElementById("group-card");
  const resultado = document.getElementById("resultado");

  let foundGroup = null;
  for (let group in grupos) {
    if (grupos[group].includes(input)) {
      foundGroup = group;
      break;
    }
  }

  if (foundGroup) {
    resultado.textContent = `You're in the lab tour: ${foundGroup}`;
    groupCard.style.display = "block";
  } else {
    alert("Code not found. Please verify that it is correctly written.");
  }
}
