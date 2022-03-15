// Codigo Cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perimetro del cuadrado es de: "+ perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es de: "+ areaCuadrado + "cm^2");
console.groupEnd();

// Codigo Triangulo

console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triangulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de: "+ perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return  (base * altura) / 2;
}
//console.log("El area del Triangulo es de: "+ areaTriangulo + "cm^2");

console.groupEnd();

// Codigo Circulo 
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo mide: "+ radioCirculo + "cm");

// Diametro 
function diametroCirculo(radio) {
    return radio * 2;
}
//console.log("El diametro del circulo: "+ diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: "+ PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo: "+ perimetroCirculo + "cm");

// Area 
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo: "+ areaCirculo + "cm^2");
console.groupEnd();

//Aqui intercatuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//function calcularPerimetroTriangulo(){
    //const input = document.getElementById("InputTriangulo");
    //const value = Number(input.value);
    //const input1 = document.getElementById("InputTriangulo2");
   // const value1 = Number(input1.value1);
    //const input2 = document.getElementById("InputTriangulo3");
    //const value2 = Number(input2.value2);

    //const perimetro = perimetroTriangulo(value, value1, value2);
    //alert (perimetro);
//}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const altura = document.getElementById("InputAlturaTriangulo");
    const value4 = Number(altura.value);

    const area = areaTriangulo(value3, value4);
    alert("El area del triangulo es: " + area);
}


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}