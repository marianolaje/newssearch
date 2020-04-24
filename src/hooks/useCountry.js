import React, {useState} from 'react';

const useCountry = (stateInicial, countries) => {

    //State del CustomHook
    const [state, actualizarState] = useState(stateInicial)

    const SelectCountry = () => {
        return(
            <select
                className="browser-default"
                value={state}
                onChange={e => actualizarState(e.target.value)}
            >
                {countries.map(opcion => (
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))}
            </select>
        )
    }
    return [state, SelectCountry]
}

export default useCountry
