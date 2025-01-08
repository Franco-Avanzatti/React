import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"


const itemDetailContainer = ({ LoadingComponent }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false);
    

    const {idProduct} = useParams()

    useEffect(() => {
        setLoading(true)
        
        
        getProducts()
        .then( (data) => {
            const productfind = data.find( (dataProduct) => dataProduct.id === idProduct )
            setProduct(productfind)
        })
        .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false); 
          });
        
        
    }, [idProduct])

    return (
        <div>
          {loading ? (
            LoadingComponent ? <LoadingComponent /> : <p>Cargando...</p>
          ) : (
            product && <ItemDetail product={product} /> 
          )}
        </div>
        
      );
}

export default itemDetailContainer