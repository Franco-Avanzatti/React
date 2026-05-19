import {
    collection,
    getDocs
} from "firebase/firestore";

import db from "../db/db";

export const getFeaturedProducts = async () => {

    try {

        const productsRef = collection(db, "products");

        const snapshot = await getDocs(productsRef);

        const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products.slice(0, 2);

    } catch (error) {

        console.log(error);

        return [];
    }
};