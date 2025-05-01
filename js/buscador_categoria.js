function buscarCategoria() {
  const input = document.getElementById("codigo").value.trim().toUpperCase();

  // Get the group card and the elements where we will display the group info
  var groupCard = document.getElementById("group-card");
  const lab_group = document.getElementById("lab_group");
  const cat_group = document.getElementById("cat_group");

  let foundLabGroup = null;

  // Check if the input code exists in the 'codigos' object
  if (codigos[input]) {
    // Update the category group info
    cat_group.textContent = `You're in the gymkhana group: ${codigos[input]}`;
    groupCard.style.display = "block"; // Show the group card
  } else {
    alert("Code not found. Please verify that it is correctly written.");
  }

  // Check if the input code exists in any of the lab groups
  for (let group in lab_codes) {
    if (lab_codes[group].includes(input)) {
      foundLabGroup = group;
      break; // Exit the loop once the lab group is found
    }
  }

  // If a lab group is found, update the lab group text
  if (foundLabGroup) {
    lab_group.textContent = `You're in the lab tour: ${foundLabGroup}`;
  } else {
    lab_group.textContent = "No lab tour assigned.";
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
  }
}
