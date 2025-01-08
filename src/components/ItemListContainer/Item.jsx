import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="item">
        <img src={product.image} className="img-item" alt="" width={200} />
        <p className="text-item"> {product.name}</p>
        <p className="text-item">${product.price.toLocaleString("es-ES")}</p>

        <Link to={ "/detail/"+product.id }> <button className="button-detail">Ver detalles</button> </Link>
    </div>
  )
}

export default Item