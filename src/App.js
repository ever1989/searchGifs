import React, {useState} from 'react';
import './App.css';

const GIFS = [
  'https://media1.giphy.com/media/8Ag4AORS8xPYHdeU6f/giphy.webp?cid=ecf05e47g7nc1vegtcsmc4q73xka5od2v022kwxkfythbpd8&rid=giphy.webp&ct=g',
  'https://media1.giphy.com/media/H4DjXQXamtTiIuCcRU/200.webp?cid=ecf05e47g7nc1vegtcsmc4q73xka5od2v022kwxkfythbpd8&rid=200.webp&ct=g'
]

function App() {
  const [gifs, setNewGifs] = useState(GIFS)

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
        
      </section>
    </div>
  );
}

export default App;
