import { Button, Card } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './TileSet.css';

export interface TileSetProps {
  items: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      count: number
      rate: number
    }
  }[]
}

const TileSet = ({
  items
}: TileSetProps) => {
  return (
    <div className="tile-set">
      { items.map((item) => {
        return (
          <Card
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
              <Button danger>
                <DeleteOutlined style={{ fontSize: '18px' }} />
              </Button>
              <div className="tile__count">
                <Button className='tile__count-change'>
                  <MinusOutlined />
                </Button>
                <span className='tile__count-number'>
                  0
                </span>
                <Button className='tile__count-change'>
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
