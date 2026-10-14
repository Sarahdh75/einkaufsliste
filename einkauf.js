const eingabe = document.getElementById("eingabe");
const knopf = document.getElementById("hinzufuegen");
const liste = document.getElementById("liste");
const anzahl = document.getElementById("anzahl");
let count = 0;

knopf.addEventListener("click", function () {
  if (eingabe.value === "") {
    return;
  }
  const punkt = document.createElement("li");
  punkt.textContent = eingabe.value;
  liste.appendChild(punkt);
  eingabe.value = "";
  count++;
  anzahl.textContent = "Artikel: " + count;
});