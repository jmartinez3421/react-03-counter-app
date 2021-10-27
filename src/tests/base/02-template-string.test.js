import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string';

describe('Preubas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Jordi', () => {
        const nombre = 'Jordi';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })
    
    test('getSaludo debe retornar Hola Joan si no le pasamos ningún parámetro ', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Joan');
    })
    
})