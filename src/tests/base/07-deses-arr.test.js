import "@testing-library/jest-dom";

import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas sobre el archivo 07-deses-arr.js', () => {
    test('retornaArreglo debe devolver un Array de dos posiciones ', () => {
        const arrayTest = ['ABC', 123];

        // const array = retornaArreglo();
        // expect(array).toEqual(array);

        const [letras, numeros] = retornaArreglo();

        //Para comprobar si el tipo de las letras es string
        expect(typeof letras).toBe('string');

        expect(typeof numeros).toBe('number');
    })
    
})