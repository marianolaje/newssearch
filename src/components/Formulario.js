import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    //utilizar CustomHooks
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    //submit al form, pasar categoría al app.js
    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria)
    }

    return(
        <div className={`${styles.buscador} row`}>
            <div className="row">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Search news by categories</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btnBlock} btn-large amber darken-2`}
                            value="Search" 
                        />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default Formulario