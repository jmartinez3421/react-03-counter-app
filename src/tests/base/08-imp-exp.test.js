import "@testing-library/jest-dom";
import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas sobre el archivo 08-imp-exp.js', () => {
    test('getHeroeById debe devolver el heroe correpondiente a la id que mandamos ', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('getHeroeById debe devolver undefined si el heroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('getHeroeByOwner debe devolver un array con los heroes que tengan el owner que indiquemos', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });

    test('getHeroeByOwner debe devolver un array de la misma longitud que los heroes con ese owner', () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes.length).toBe(heroesData.length);
    });
    
})