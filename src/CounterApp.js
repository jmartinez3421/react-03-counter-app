//Para usar el useState tenemos que importarlo
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    //Usaremos el método useState haciendo una deconstruccion del array que lo compone, obteniendo primero el valor y
    //la segunda posición que hace referencia a la función que usaremos para cambiar el valor del state
    const [ counter, setCounter ]  = useState( value );

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            {/* 
               Si al pasarle la función al onclick la ponemos como handleAdd() React la va a ejecutar cuando renderice
                el botón dejandolo inservible, con lo que cuando pasemos las funciones debemos ponerlas sin ().
                Solo las pondremos con () en el caso de que la función que tenemos que lanzar nos devuelva otra función.
            */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 5,
}

export default CounterApp;
