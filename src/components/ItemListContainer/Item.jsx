import { Link } from "react-router-dom"
import "./itemListContainer.css"

const Item = ({ product }) => {
  return (
    <div className="item">
        <img src={product.image} className="img-item" alt="" width={200} />
        <p className="text-item"> {product.name}</p>
        <p className="text-item">${product.price.toLocaleString("es-ES")}</p>

        <Link to={ "/detail/"+product.id }>
         <p className="curtain">Mas información</p>
        </Link>
    </div>
  )
}

export default Item