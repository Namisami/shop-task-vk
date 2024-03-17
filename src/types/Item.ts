export default interface IItem {
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
  count: number
}
