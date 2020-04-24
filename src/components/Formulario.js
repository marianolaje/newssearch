import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'

const Formulario = ({setCategoria, setPais}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    const COUNTRIES = [
        {value: 'ae', label: 'United Arab Emirates'},
        {value: 'ar', label: 'Argentina'},
        {value: 'at', label: 'Austria'},
        {value: 'au', label: 'Australia'},
        {value: 'be', label: 'Belgium'},
        {value: 'bg', label: 'Bulgaria'},
        {value: 'br', label: 'Brazil'},
        {value: 'ca', label: 'Canada'},
        {value: 'ch', label: 'Switzerland'},
        {value: 'cn', label: 'China'},
        {value: 'co', label: 'Colombia'},
        {value: 'cu', label: 'Cuba'},
        {value: 'cz', label: 'Czechia'},
        {value: 'de', label: 'Germany'},
        {value: 'eg', label: 'Egypt'},
        {value: 'fr', label: 'France'},
        {value: 'gb', label: 'Great Britain'},
        {value: 'gr', label: 'Greece'},
        {value: 'hk', label: 'Hong Kong'},
        {value: 'hu', label: 'Hungary'},
        {value: 'id', label: 'Indonesia'},
        {value: 'ie', label: 'Ireland'},
        {value: 'il', label: 'Israel'},
        {value: 'in', label: 'India'},
        {value: 'it', label: 'Italy'},
        {value: 'jp', label: 'Japan'},
        {value: 'kr', label: 'Korea'},
        {value: 'lt', label: 'Lithuania'},
        {value: 'lv', label: 'Latvia'},
        {value: 'ma', label: 'Morocco'},
        {value: 'mx', label: 'Mexico'},
        {value: 'my', label: 'Malaysia'},
        {value: 'ng', label: 'Nigeria'},
        {value: 'nl', label: 'Netherlands'},
        {value: 'no', label: 'Norway'},
        {value: 'nz', label: 'New Zealand'},
        {value: 'ph', label: 'Philippines'},
        {value: 'pl', label: 'Poland'},
        {value: 'pt', label: 'Portugal'},
        {value: 'ro', label: 'Romania'},
        {value: 'rs', label: 'Serbia'},
        {value: 'ru', label: 'Russia'},
        {value: 'sa', label: 'Saudi Arabia'},
        {value: 'se', label: 'Sweden'},
        {value: 'sg', label: 'Singapore'},
        {value: 'si', label: 'Slovenia'},
        {value: 'sk', label: 'Slovakia'},
        {value: 'th', label: 'Thailand'},
        {value: 'tr', label: 'Turkey'},
        {value: 'tw', label: 'Taiwan'},
        {value: 'ua', label: 'Ukraine'},
        {value: 'us', label: 'United States of America'},
        {value: 've', label: 'Venezuela'},
        {value: 'za', label: 'South Africa'}
    ]
    //utilizar CustomHooks
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)
    const [pais, SelectCountry] = useSelect('', COUNTRIES)

    //submit al form, pasar categoría al app.js
    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria)
        setPais(pais)
    }
    

    return(
        <div className={`${styles.buscador} row`}>
            <div className="row">
                <form
                    onSubmit={buscarNoticias}
                >
                <h2 className={styles.heading}>Search news by categories</h2>
                    <SelectNoticias/>
                    <SelectCountry/>
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