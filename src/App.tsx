import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import TileSet from './components/TileSet/TileSet'
import { useTypedSelector } from './store/reducers';
import { getAllItems } from './store/actionCreators';
import IItem from './types/Item';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { itemList } = useTypedSelector((state) => state.items)

  useEffect(() => {
    dispatch(getAllItems());
  }, [])

  const calcSum = () => {
    let result = 0;
    itemList.forEach((item: IItem) => {
      result += item.count * item.price
    })
    return result.toFixed(2);
  }

  return (
    <div className='shop'>
      <div className="shop__items">
        <TileSet items={ itemList } />
      </div>
      <div className="shop__calc">
        { itemList.map((item: IItem) => {
          return (
            <div className='shop__position position'>
              <p className='position__title'>{ item.title }</p>
              <span className='position__count'>{ item.count }</span>
              <span className='position__price'>{ item.price }</span>
            </div>
          )
        })}
        <p className='shop__sum'>Итого: { calcSum() } руб.</p>
      </div>
    </div>
  )
}

export default App
