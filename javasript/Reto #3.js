const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-input");
const sortedNames = document.querySelector("#sorted-names");
const clearButton = document.querySelector("#clear-button");
const statusMessage = document.querySelector("#status-message");

const names = [];

function renderNames() {
  sortedNames.value = names.join("\n");
}

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  if (!name) {
    statusMessage.textContent = "Escribe un nombre antes de agregarlo.";
    nameInput.focus();
    return;
  }

  const alreadyExists = names.some(
    (savedName) => savedName.localeCompare(name, "es", { sensitivity: "base" }) === 0
  );
  if (alreadyExists) {
    statusMessage.textContent = "Ese nombre ya está en la lista.";
    nameInput.focus();
    return;
  }

  names.push(name);
  names.sort((first, second) => first.localeCompare(second, "es", { sensitivity: "base" }));
  renderNames();
  nameInput.value = "";
  statusMessage.textContent = "";
  nameInput.focus();
});

clearButton.addEventListener("click", () => {
  names.length = 0;
  renderNames();
  nameInput.value = "";
  statusMessage.textContent = "";
  nameInput.focus();
});