import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ onAddToCart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

  }, []);

  return (
    <div>

      <h1>Our Products</h1>

      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />

        ))}

      </div>

    </div>
  );
}

export default Products;