import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    //Para hacer pruebas con tareas asincronas debemos pasar el parámetro done y llamarlo una vez hecho el expect
    test('getHeroeByIdAsync debe devolver un heroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes.find(h => h.id === id));
            done();
        })
    });

    test('getHeroeByIdAsync debe devolver un error si el heroe no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
        .catch( error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });
    
})
