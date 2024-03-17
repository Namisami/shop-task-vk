import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import TileSet from './components/TileSet/TileSet'
import { useTypedSelector } from './store/reducers';
import { getAllItems } from './store/actionCreators';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { itemList } = useTypedSelector((state) => state.items)

  useEffect(() => {
    (async function() {
      await dispatch(getAllItems());
    })()
  }, [])

  return (
    <div className='shop'>
      <div className="shop__items">
        <TileSet items={ itemList } />
      </div>
      <div className="shop__calc">

      </div>
    </div>
  )
}

export default App
