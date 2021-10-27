import "@testing-library/jest-dom";

import {getUser, getUsuarioActivo} from "../../base/05-funciones";

describe('Pruebas sobre el archivo 05-funciones.js', () => {
    test('getUser debe devoler un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe devolver un usuario con el username que le pasamos por parámetros ', () => {
        const userTest = {
            uid: 'ABC567',
            username: "Jordi"
        };

        const user = getUsuarioActivo("Jordi");

        expect(user).toEqual(userTest);
    })
    
    
});