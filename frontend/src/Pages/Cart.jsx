import React from "react";

const Cart = ({ cart }) => {

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <>
          {cart.map((product, index) => (

            <div className="cart-item" key={index}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

            </div>

          ))}

          <h2>
            Total: ₹{total}
          </h2>
        </>

      )}

    </div>
  );
};

export default Cart;
