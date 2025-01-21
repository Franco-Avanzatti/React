import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { doc,getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import "./itemdetail.css";


const itemDetailContainer = ({ LoadingComponent }) => {
    const [product, setProduct] = useState(null,{})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    

    const {idProduct} = useParams()

    const getProduct = async() => {
      try {
        setLoading(true);
        const docRef = doc(db, "products", idProduct)
        const dataDb = await getDoc(docRef)

        if (dataDb.exists()) {
          const data = { id: dataDb.id, ...dataDb.data() }
          setProduct(data)
          setError(null)  // Reseteo el error si encuentro el producto
        } else {
          setError("ESTE PRODUCTO NO EXISTE") // Si no existe el producto
          setProduct(null)  // Limpiamos el producto
        }

        setLoading(false);



      } catch (error) {
        console.error(error)
        setError("Ocurrió un error al obtener el producto")
        setLoading(false)
      }
    }

    useEffect(()=> {
      getProduct()
    }, [idProduct])

    return (
      <div className="detail">
        {loading ? (
          LoadingComponent ? <LoadingComponent /> : <p>Cargando...</p>
        ) : error ? (
          <h2>{error}</h2>  
        ) : (
          product && <ItemDetail product={product} />
        )}
      </div>
    )
}

export default itemDetailContainer