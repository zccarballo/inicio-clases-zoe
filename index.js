import {Sumas, Restas} from './clases.js';
//####### INSTANCIAS DAS CLASSES #######
let instanciaSumas = new Sumas(); //instancia a clase Sumas, mediante a palabra chave 'new'
let instanciaRestas = new Restas(); //instancia a clase Restas, mediante a palabra chave 'new'

//####### MÉTODOS DAS CLASSES #######
let sumaDeDousNumeros = instanciaSumas.sumaDousNumeros(2,3); //chama a funcao sumaDousNumeros da instancia sumas
let sumaDeTresNumeros = instanciaSumas.sumaTresNumeros(2,3,4); //chama a funcao sumaTresNumeros da instancia sumas
let restaDousNumeros = instanciaRestas.restaDousNumeros(2,3); //chama a funcao restaDousNumeros da instancia restas
//###### SAÍDAS POR CONSOLA
console.log(sumaDeDousNumeros);
console.log(sumaDeTresNumeros);
console.log(restaDousNumeros);