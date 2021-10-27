describe('Pruebas dentro del archivo demo.test.js', () => {
    test('Deben ser iguales los strings', () => {

        //1. Inicializacion
        const mensaje = 'Hola mundo';
    
        //2.Estímulo
        const mensaje2 = "Hola mundo";
    
        //3.Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });

    
});


