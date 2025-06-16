// import {Sumas, Restas, Calculadora} from './clases.js';
// //####### INSTANCIAS DAS CLASSES #######
// let instanciaSumas = new Sumas(); //instancia a clase Sumas, mediante a palabra chave 'new'
// let instanciaRestas = new Restas(); //instancia a clase Restas, mediante a palabra chave 'new'
// let instanciaCalculadora = new Calculadora();

// //####### MÉTODOS DAS CLASSES #######
// let sumaDeDousNumeros = instanciaSumas.sumaDousNumeros(2,3); //chama a funcao sumaDousNumeros da instancia sumas
// let sumaDeTresNumeros = instanciaSumas.sumaTresNumeros(2,3,4); //chama a funcao sumaTresNumeros da instancia sumas
// let restaDousNumeros = instanciaRestas.restaDousNumeros(2,3); //chama a funcao restaDousNumeros da instancia restas
// let calculadora1 = instanciaCalculadora.suma(2,2);
// let calculadora2 = instanciaCalculadora.resta(2,2);
// let calculadora3 = instanciaCalculadora.multiplicacion(2,2);
// let calculadora4 = instanciaCalculadora.division(2,2);
// //###### SAÍDAS POR CONSOLA
// console.log(sumaDeDousNumeros);
// console.log(sumaDeTresNumeros);
// console.log(restaDousNumeros);
// console.log("suma de dous numeros: ", calculadora1);
// console.log("resta de dous numeros: ", calculadora2);
// console.log("multiplicacion de dous numeros: ", calculadora3);
// console.log("division de dous numeros: ", calculadora4);

import { Calculadora } from './clases.js';

let calc = new Calculadora(10, 5);

console.log('Suma:', calc.suma());                 
console.log('Resta:', calc.resta());               
console.log('Multiplicación:', calc.multiplicacion()); 
console.log('División:', calc.division());         