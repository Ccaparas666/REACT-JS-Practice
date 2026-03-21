import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header'
import { ProductGrid } from './ProductsGrid';
import './HomePage.css'



export function HomePage({ cart }) {

    const [products, setproducts] = useState([]);


    useEffect(() => {
        axios.get('api/products')
            .then((response) => {
                setproducts(response.data);
            });
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
            <title>ecommerce-project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );


}