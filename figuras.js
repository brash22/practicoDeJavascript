console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("El lado del cuadrado mide: " + ladoCuadrado + "cm. </br>");

function perimetroCuadrado(lado){
    return lado * 4;
};
// perimetroCuadrado();


function areaCuadrado(lado){
return lado * lado;
} 
// console.log("El área del cuadrado mide: " + areaCuadrado + "cm. </br>"); 
console.groupEnd();

// Triángulo
console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del triángulo miden: " 
// + ladoTriangulo1 
// + "cm. " 
// + ladoTriangulo2 
// + "cm. " 
// + baseTriangulo 
// + "cm. </br>"
// );

// const alturatriangulo = 5.5;
// console.log("La altura del triangulo mide: " + alturatriangulo + "cm. </br>");

function perimetroTriangulo(lado1, lado2, base){
return lado1 + lado2 + base;
} 

// console.log("El perímetro del triangulo mide: " + perimetroTriangulo + "cm. </br>");

function areaTriangulo(base, altura,){
    return (base * altura) / 2;
    }
// console.log("El área del triangulo mide: " + aeraTriangulo + "cm^2. </br>");

console.groupEnd();

// Círculos
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + "cm. </br>");


// Diámetro

function diametroCirculo(radio) {
    return radio * 2
}

// Pi
const PI = Math.PI;
console.log("PI mide: " + PI + "cm. </br>");

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm. </br>");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI
// console.log("El área del círculo mide: " + areaCirculo + "cm^2. </br>");
function areaCirculo(radio){
    return (radio * radio) * PI
}
console.groupEnd();


// Aquí interactuamos con HTML

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

// Aqui vamos a calcular la altura de un triángulo isóceles

function calcularAlturaTrianguloIsoceles(){
    const ladoA = document.getElementById("InputLadoA");
    const valueLadoA = ladoA.value;
    const ladoB = document.getElementById("InputLadoB");
    const valueLadoB = ladoB.value;
    const base = document.getElementById("InputBase");
    const valueBase = base.value;

    const cuadradoLados = valueLadoA * valueLadoB;
    const cuadradoBase = valueBase * valueBase;


    if (valueLadoA == valueLadoB && valueLadoA != valueBase){
        const altura = Math.sqrt(cuadradoLados - (cuadradoBase / 4));
        document.write("La altura del triángulo isóceles es: " + altura);
    }
    else {
        document.write("La fórmula es para calcular la altura de un triángulo Isóceles, el cual tiene dos lados iguales, mientras que su base es diferente: </br><strong>Ingresa dos lados iguales, y vuelve a intentar</strong>")
    }
}