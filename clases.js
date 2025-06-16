/**
 * Palabras clave: 
 * class
 * new -> serve para solicitar a instancia dunha clase
 */

//CLASES
// export class Sumas{

//     sumaDousNumeros(a,b){
//         return a+b;
//     }

//     sumaTresNumeros(a,b,c){
//         return a+b+c;
//     }

// }


// export class Restas{
//     restaDousNumeros(a,b){
//         return a-b;
//     }
// }

// export class Calculadora {
//     suma(a, b){
//         return a+b;
//     }
//     resta(a,b){
//         return a-b;
//     }
//     multiplicacion(a,b){
//         return a*b;
//     }
//     division(a,b){
//         return a/b;
//     }
// }

//CONSTRUCTOR
export class Calculadora {
  valor1;
  valor2;

  constructor(variable1, variable2) {
    this.valor1 = variable1;
    this.valor2 = variable2;
    console.log('Instancia de clase Calculadora creada');
  }

  suma() {
    return this.valor1 + this.valor2;
  }

  resta() {
    return this.valor1 - this.valor2;
  }

  multiplicacion() {
    return this.valor1 * this.valor2;
  }

  division() {
    if (this.valor2 === 0) {
      return 'Error: división por cero';
    }
    return this.valor1 / this.valor2;
  }
}