import React, {useEffect, useState} from 'react';
import './App.css';

const GIFS = [
  'https://media1.giphy.com/media/8Ag4AORS8xPYHdeU6f/giphy.webp?cid=ecf05e47g7nc1vegtcsmc4q73xka5od2v022kwxkfythbpd8&rid=giphy.webp&ct=g',
  'https://media1.giphy.com/media/H4DjXQXamtTiIuCcRU/200.webp?cid=ecf05e47g7nc1vegtcsmc4q73xka5od2v022kwxkfythbpd8&rid=200.webp&ct=g'
]

const DIFF_GIFS = [
  'https://media1.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.webp?cid=ecf05e47txy2cqomdwon5zsh3bcfijaq34l4jiswfhuo3n2g&rid=200w.webp&ct=g'
]

function App() {
  const [gifs, setNewGifs] = useState(GIFS)

  //Pasar segundo parametro para evitar que se ejecute en lopp, asi solo se ejecuta una vez al cargar el componente
  useEffect(function () {
    console.log('efecto ejecutado');
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
