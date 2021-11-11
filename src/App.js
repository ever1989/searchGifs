import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';



function App() {
  const [gifs, setNewGifs] = useState([])

  //Pasar segundo parametro para evitar que se ejecute en lopp, asi solo se ejecuta una vez al cargar el componente
  useEffect(function () {
    getGifs({ keyword: 'rick'}).then(gifs => setNewGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          //Map se usa porque devuelve algo y el foreach no
          gifs.map(singleGif => <img src={singleGif} />)
        }
        
        {/* <button onClick={() => setNewGifs(DIFF_GIFS)}>Cambiar gifs</button> */}
      </section>
    </div>
  );
}

export default App;
