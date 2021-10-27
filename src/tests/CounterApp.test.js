import "@testing-library/jest-dom";
import CounterApp from '../CounterApp';
import React from "react";
import { shallow } from "enzyme";

describe('Pruebas sobre el componente CounterApp', () => {

    //Inicialimzamos el wrapper para no tener que definirlo en cada test
    let wrapper = shallow(<CounterApp />);

    //Con el método beforeEach ejecutaremos la funcion que definimos dentro antes de ejecutar cada test
    beforeEach(() => {

        //Reiniciamos la variable wrapper para que no tenga el valor alterado
        wrapper = shallow(<CounterApp />);

    });

    test('el componente CounterApp debe imprimir correctamente el contenido', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('el valor por defecto del contador tiene que ser igual al que pasamos por props', () => {

        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);

        //Ponemos .trim() para eliminar los espacios del texto
        const valorCounter = wrapper.find('h2').text().trim();

        //Ponemos el value de esta manera porque tiene que ser como String ya que así obtenemos el valor del counter
        expect(valorCounter).toBe(`${value}`);
    });

    test('debe incrementar el valor del contador', () => {

        //Hacemos una referencia al botón de incrementar, que es el que se encuentra en primera posición
        const boton1 = wrapper.find('button').at(0);
        //Simulamos el evento click usando el método simulate
        boton1.simulate('click');

        //Obtenemos el valor del counter una vez lanzado el evento click
        const valorCounter = wrapper.find('h2').text().trim();

        //Comprobamos si se ha incrementado el valor poniendo que se espera que sea 6 (por defecto es 5)
        expect(valorCounter).toBe('6');
    });

    test('debe restar 1 al valor del contador', () => {

        const boton1 = wrapper.find('button').at(2);
        boton1.simulate('click');

        const valorCounter = wrapper.find('h2').text().trim();

        expect(valorCounter).toBe('4');
    });

    test('debe restaurar el valor por defecto de counter, el cual es 5', () => {
        
        //Aumentamos el valor del counter simulamos 
        wrapper.find('button').at(0).simulate('click');
        console.log(wrapper.find('h2').text().trim());

        const boton1 = wrapper.find('button').at(1);
        boton1.simulate('click');

        const valorCounter = wrapper.find('h2').text().trim();

        expect(valorCounter).toBe('5');
    })
})