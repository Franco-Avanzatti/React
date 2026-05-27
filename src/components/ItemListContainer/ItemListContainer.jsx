import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

import db from "../../db/db.js";

import ItemList from "./ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";

import "./iteme.css";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  const collectionName = collection(db, "products");

  const categoryInfo = {

    "bajo-electrico": {
      title: "Bajos Electricos",
      subtitle: "Potencia y profundidad para marcar el ritmo."
    },

    "guitarras-electricas": {
      title: "Guitarras Eléctricas",
      subtitle: "Encontrá el sonido perfecto para tu estilo."
    },

    "bateria-percusion": {
      title: "Batería y Percusión",
      subtitle: "Ritmo y energía para cada presentación."
    },

    "audio-sonido": {
      title: "Audio y SonÍdo",
      subtitle: "Versatilidad y creatividad musical."
    }
  };

  const currentCategory = categoryInfo[idCategory];

  const getProducts = async (category = null) => {

    try {

      setLoading(true);

      let dataDb;

      if (category) {

        const q = query(
          collectionName,
          where("category", "==", category)
        );

        dataDb = await getDocs(q);

      } else {

        dataDb = await getDocs(collectionName);
      }

      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data()
      }));

      setProducts(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    getProducts(idCategory);

  }, [idCategory]);

  return (

    <div className="itemListContainer">

      {idCategory && currentCategory && (

        <SectionTitle
          title={currentCategory.title}
          subtitle={currentCategory.subtitle}
        />

      )}

      {
        loading
          ? <Loading />
          : <ItemList products={products} />
      }

    </div>
  );
};

export default ItemListContainer;