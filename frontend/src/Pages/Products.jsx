import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = ({ onAddToCart }) => {

  return (
    <div className="products-page">

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
};

export default Products;