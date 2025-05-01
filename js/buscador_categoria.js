function buscarCategoria() {
  const input = document.getElementById("codigo").value.trim().toUpperCase();
  
  var groupCard = document.getElementById("group-card");
  // const room = document.getElementById("room");
  const lab_group = document.getElementById("lab_group");
  const codigos = document.getElementById("cat_group");

  let foundLabGroup = null;
  for (let group in lab_codes) {
    if (lab_codes[group].includes(input)) {
      foundLabGroup = group;
      break;
    }
  }

  if (codigos[input]) {
    // room.textContent = `You're in the room: ${foundRoom}`;
    cat_group.textContent = `You're in the gymkhana group: ${codigos[codigo]}`;
    groupCard.style.display = "block";
  } else {
    alert("Code not found. Please verify that it is correctly written.");
  }

  if (foundLabGroup){
    lab_group.textContent = `You're in the lab tour: ${foundLabGroup}`;
  }
}
