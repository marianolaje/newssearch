import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticia from './components/ListadoNoticia';

function App() {
  console.log("Developed by Mariano Laje Arrigoni")

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('')
  const [pais, setPais] = useState('')
  const [noticias, setNoticias] = useState([])

  let paisDefault = ''
  const cambioPais = () => {
    if(pais === ''){
      paisDefault = 'us'
    } else {
      paisDefault = pais
    }
  }
  //hola
  cambioPais()

  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${paisDefault}&category=${categoria}&apiKey=c8baf4284313415591f537112d57ecb4`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria, paisDefault])

  return (
    <Fragment>
      <Header
        titulo={"Searching news"}
      />
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
          setPais={setPais}
        />
        <ListadoNoticia
          noticias={noticias}
        />
      </div>
    </Fragment>
  )
}

export default App;
