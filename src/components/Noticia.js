import React from 'react';
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {

    //extraer los datos
    const { urlToImage, url, title, description, source } = noticia

    const imagen = (urlToImage) 
    ?
    <div className="card-image">
        <img src={urlToImage} alt={title}></img>
        <span className="card-title">{source.name}</span>
    </div>
    : null;

    return(
        <div className="col s12 m6 l4 alto">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a 
                        href={url}
                        tartet="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light button btn"
                    >See full news</a>
                </div>
            </div>
        </div>
    )
}
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
export default Noticia