import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";


const ItemListContainer = ({ greeting, LoadingComponent }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategory } = useParams();

  const collectionName = collection(db, "products")

  //Obtener los productos,sea por categoría o todos los productos//
  
  const getProducts = async(category = null) => {
    try {
      setLoading(true);
      let dataDb;
  
      if (category) {
        const q = query(collectionName, where("category", "==", category));
        dataDb = await getDocs(q);
      } else {
        dataDb = await getDocs(collectionName);
      }
  
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
  
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getProducts(idCategory);
  }, [idCategory]);
  

  return (
    <div className="itemlistcontainer" >
      <h1 className="hendrix">{greeting}</h1>
      
         {loading ? <LoadingComponent /> : <ItemList products={products} />}
      
    </div>
  );
};

export default ItemListContainer;