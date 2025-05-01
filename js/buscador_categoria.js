function buscarGrupo() {
  const input = document.getElementById("codigo").value.trim().toLowerCase();
  var groupCard = document.getElementById("group-card");
  const codigo = input.toUpperCase();
  const resultado = document.getElementById("resultado");
  const labtour = document.getElementById("labtour");

  let foundLabGroup = null;
  for (let group in lab_codes) {
    if (lab_codes[group].includes(input)) {
      foundLabGroup = group;
      break;
    }
  }
  
  if (codigos[codigo]) {
    resultado.textContent = `You're in the group named: ${codigos[codigo]}`;
    if(foundLabGroup) {
      labtour.textContent = `You're in the lab tour to ${foundLabGroup}`;
    } else {
      labtour.textContent = `No lab tour assigned`;
    }
    groupCard.style.display = "block";
  } else {
    // resultado.textContent = "Code not found. Please verify that it is correctly written.";
    alert("Code not found. Please verify that it is correctly written.")
  }
}

/*
function buscarCategoria() {
  const input = document.getElementById("codigo").value.trim().toLowerCase();
  const codigo = input.toUpperCase();
  
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

  if (codigos[codigo]) {
    // room.textContent = `You're in the room: ${foundRoom}`;
    cat_group.textContent = `You're in the gymkhana group: ${codigos[codigo]}`;
    groupCard.style.display = "block";
  } else {
    alert("Code not found. Please verify that it is correctly written.");
  }

  if (foundLabGroup){
    lab_group.textContent = `You're in the lab tour: ${foundLabGroup}`;
  } else {
    lab_group.textContent = `No lab tour assigned`
}
