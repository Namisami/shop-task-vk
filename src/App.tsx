import { useEffect, useState } from 'react'
import './App.css'
import TileSet from './components/TileSet/TileSet'
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=5')
      .then((res) => setState(res.data))
      .catch((err) => console.log(err))
  })

  return (
    <div className='shop'>
      <div className="shop__items">
        <TileSet items={ state } />
      </div>
      <div className="shop__calc">

      </div>
    </div>
  )
}

export default App
