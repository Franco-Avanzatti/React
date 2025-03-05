import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
        {
            products.map((product) => (
                <Item product={product} key={product.id} />
            ))
        }
    </div>
  )
}

export default ItemList