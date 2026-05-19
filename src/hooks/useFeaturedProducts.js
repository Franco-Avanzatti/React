import { useEffect, useState } from "react";

import { getFeaturedProducts } from "../service/ProductsService";

const useFeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const fetchProducts = async () => {

            const data = await getFeaturedProducts();

            setProducts(data);

        };

        fetchProducts();

    }, []);

    useEffect(() => {

        if (products.length === 0) return;

        const interval = setInterval(() => {

            setCurrentIndex(prev =>
                prev === products.length - 1
                    ? 0
                    : prev + 1
            );

        }, 5000);

        return () => clearInterval(interval);

    }, [products]);

    return {

        currentProduct: products[currentIndex],

        loading: products.length === 0
    };
};

export default useFeaturedProducts;