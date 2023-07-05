localStorage.setItem("numeros", JSON.stringify([1,3,5,7]));

localStorage.setItem("booleano", JSON.stringify(true));

localStorage.setItem ("palabra", JSON.stringify ("casa"))

console.log(JSON.parse(localStorage.getItem("numeros")));
console.log(typeof JSON.parse(localStorage.getItem("numeros")));

console.log(JSON.parse(localStorage.getItem("booleano")));
console.log(typeof JSON.parse(localStorage.getItem("booleano")));

console.log(JSON.parse(localStorage.getItem("palabra")));
console.log(typeof JSON.parse(localStorage.getItem("palabra")));


localStorage.removeItem ("probando2");
localStorage.removeItem ("caracter");