'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
//import {platzom} from 'platzom'

function platzom(str) {
    var translation = str;
    //si la palabra terminan en "ar" se le quitan esos 2 caracteres
    if (str.toLowerCase().endsWith('ar')) {
        //le pasamos los caracteres que queremos pasar con ellos o no 
        translation = str.slice(0, -2); //cortamos los 2 caracteres, desde e final al inicio
    }
    //si la palabra inicia con Z, se le anade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion del medio
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    var reverse = function reverse(str) {
        return str.split(',').reverse().join('');
    };
    //si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayusculas y minusculas
    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }
    return translation;
}
/*console.log(platzom("Programar"))
console.log(platzom("Zorro")) //Zorrope
console.log(platzom("Zarpar")) //Zarppe
console.log(platzom("abecedario")) //abece-dario
console.log(platzom("sometemos")) //SoMeTeMoS*/