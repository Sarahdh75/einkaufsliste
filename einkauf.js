console.log("geladen");
const eingabe = document.getElementById("eingabe");
const knopf = document.getElementById("hinzufuegen");
const liste = document.getElementById("liste");

knopf.addEventListener("click", function () {
  const punkt = document.createElement("li");   // jetzt bei jedem Klick neu
  punkt.textContent = eingabe.value;
  liste.appendChild(punkt);
  eingabe.value = "";
});