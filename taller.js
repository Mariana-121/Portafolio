//Datos del usuario 

let nombre = prompt("Ingresa tu nombre completo:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let tipoDeDocumento = prompt("Ingresa tu tipo de documento (CC, TI, CE, etc):");
let numerodedocumento = prompt("Ingresa tu número de documento:");

//Mostrar info

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Tipo de documento: " + tipoDeDocumento);
console.log("Número de documento: " + numeroDeDocumento);

// Validación de la edad

if (edad < 18) {
    console.log("El usuario es menor de edad, no puede continuar");
} 
else if (edad < 25) {
    console.log("El usuario es beneficiario por cotizante, no continúa");
} 
else if (edad >= 60) {
    console.log("El usuario solo aplica para pensión");
} 
else {
    console.log("El usuario puede continuar con el proceso");
}
