import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <h1>
            Welcome to AGRO
          </h1>

          <p>
            Your trusted online store for agricultural products.
          </p>

          <Link to="/products">
            <button>
              Shop Now
            </button>
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;