import React from 'react';
import PropTypes from 'prop-types';
// import { Fragment } from 'react/cjs/react.production.min';


const PrimeraApp = ( {saludo, subtitulo} ) => {
    /*Para devolver más de un elemento en un return debemos envolverlo en un div, ya que el return solo puede devolver
        un solo elemento
      
      Si queremos devolver más de un elemento pero no queremos envolverlo en un div para no sobrecargar de div el DOM,
        podemos usar el elemento <Fragment></Fragment>, el cual envolverá los distintos elementos pero sin mostrar un 
        DIV en el HTML
      
      Tambien podemos abrir <> y cerrar </> para envolver los elementos y así ahorrarnos la importación de Fragment

      Para introducir variables en el return de nuestro componente debemos indicar el nombre de estas entre {}, entre
        los corchetes podremos introducir cualquier código JS que devuelva un valor. ¡No va a imprimir booleanos ni
        objetos! Si queremos imprimir objetos podemos usar el método JSON.stringify(obj, null, lineas).
    */

    const miVariable = 'Esto es una variable JS';
    // const miObjeto = {
    //     nombre: "Jordi",
    //     edad: 20,
    // };
    
    return (
        <>
                <h1>Hola mundo</h1>
                <p>Esta es mi primera aplicación</p>
                <p> {miVariable} </p>
                {/* <pre> {JSON.stringify(miObjeto, null, 3)} </pre> */}

                {/* 
                    Para usar las props que recibimos en nuestro componente lo haremos como si fuera un atributo
                    de un objeto. En los parámetros de la función hemos usado la desestructuración para obtener
                    directamente una variable con el valor que le pasamos.
                */}
                <p>{saludo}</p>
                <p id='subtitulo'>{subtitulo}</p>
        </>
        
    );
}

/*Para indicar de que tipo deben ser los props de nuestro componente usaremos el método propTypes que se obtiene importando
    la libreria PropTypes (import PropTypes from 'prop-types').
    Dentro del objeto indicaremos el nombre de la prop y seguidamente el tipo de valor que es, en el caso de que sea
    obligadorio incluirlo pondremos .isRequired */
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

/*Para mandar un valor por defecto a una props lo haremos de esta manera, ya que así nos aparecerá la prop como que
    existe en nuestro navegador, de la forma tradicional no nos aparecería. Dentro de defaultProps podemos poner el valor
    de varias props. */
PrimeraApp.defaultProps = {
    subtitulo: 'Soy el subtitulo por defecto',
}

export default PrimeraApp;