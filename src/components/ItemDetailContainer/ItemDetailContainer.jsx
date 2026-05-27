import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import "./detail.css";

const ItemDetailContainer = () => {  // ← mayúscula, React lo requiere
    const [product, setProduct] = useState(null); // ← null solo, no null,{}
    const [loading, setLoading] = useState(true); // ← arranca en true
    const [error, setError] = useState(null);

    const { idProduct } = useParams();

    const getProduct = async () => {
        try {
            setLoading(true);
            const docRef = doc(db, "products", idProduct);
            const dataDb = await getDoc(docRef);

            if (dataDb.exists()) {
                setProduct({ id: dataDb.id, ...dataDb.data() });
                setError(null);
            } else {
                setError("Este producto no existe.");
                setProduct(null);
            }

        } catch (error) {
            console.error(error);
            setError("Ocurrió un error al obtener el producto.");
        } finally {
            setLoading(false); // ← finally reemplaza los tres setLoading(false)
        }
    };

    useEffect(() => {
        getProduct();
    }, [idProduct]);

    return (
        <div className="detail">
            {loading ? (
                <Loading />
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                product && <ItemDetail product={product} />
            )}
        </div>
    );
};

export default ItemDetailContainer;