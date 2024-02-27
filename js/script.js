const listaSpesa = [
"pane",
"frutta",
"verdura",
"carne",
];

console.log(listaSpesa);
let contatore = 0;
const lista = document.querySelector("ul");

while (contatore < listaSpesa.length ) {
  console.log(contatore);
  const listaContatore = listaSpesa[contatore];
  contatore++;
  lista.innerHTML += `<li>${listaContatore}</li>`
  
}
