import { Button, Card } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import IItem from '../../types/Item';
import { incrementItemCountById, decrementItemCountById, deleteItemById } from '../../store/actionCreators';
import { useDispatch } from 'react-redux';
import './TileSet.css';

export interface TileSetProps {
  items: IItem[]
}

const TileSet = ({
  items
}: TileSetProps) => {
  const dispatch = useDispatch();
  
  const decrementItemCount = (id: number) => {
    dispatch(decrementItemCountById(id));
  }
  
  const incrementItemCount = (id: number) => {
    dispatch(incrementItemCountById(id));
  }
  
  const deleteItem = (id: number) => {
    dispatch(deleteItemById(id));
  }

  return (
    <div className="tile-set">
      { items.map((item) => {
        return (
          <Card
            key={ item.id }
            className='tile-set__tile tile'
            hoverable
            cover={
              <img className='tile__image' src={ item.image }/>
            }
          >
            <div className="tile__content">
              <p className='tile__extra'>{ item.price }$</p>
              <p className='tile__title'>{ item.title }</p>
              <p className='tile__description'>{ item.description }</p>
            </div>
            <div className="tile__actions">
              <Button danger
                onClick={ () => deleteItem(item.id) }
              >
                <DeleteOutlined style={{ fontSize: '18px' }} />
              </Button>
              <div className="tile__count">
                <Button className='tile__count-change'
                  onClick={ () => decrementItemCount(item.id) }
                >
                  <MinusOutlined />
                </Button>
                <span className='tile__count-number'>
                  { item.count }
                </span>
                <Button className='tile__count-change'
                  onClick={ () => incrementItemCount(item.id) }
                >
                  <PlusOutlined />
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
};

export default TileSet;
