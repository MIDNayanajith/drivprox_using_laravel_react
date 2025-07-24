import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CarCard from "../components/CarCard";

const Home = () => {
  const [products, setProducts] = useState({
    fastMovingProducts: [],
    featuredProducts: [],
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/home")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Header />
      <section className="hero">
        <Container>
          <div className="hero-content">
            <div className="hero-text text-white">
              <h1>Powering Every Mile</h1>
              <p>
                Explore every journey with the finest auto parts and
                accessories, designed to deliver unmatched performance and
                comfort.
              </p>
              <div className="search-filters">
                <div className="filter-group">
                  <label>Select Vehicle Make</label>
                  <select className="form-select bg-white text-dark">
                    <option>Choose Make</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Select Vehicle Model</label>
                  <select className="form-select bg-white text-dark">
                    <option>Choose Model</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label>Select Vehicle Year</label>
                  <select className="form-select bg-white text-dark">
                    <option>Choose Year</option>
                  </select>
                </div>
                <button className="search-btn btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="categories">
        <Container>
          <div className="categories-grid">
            {[...Array(10)].map((_, i) => (
              <div className="category-item" key={i}>
                <div className="category-icon">
                  <img src="/images/maintanance.png" alt="Category" />
                </div>
                <div className="category-info">
                  <h3>Maintenance & Service Parts</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="sub-category-tags mt-4">
            {[
              "All",
              "Wipor Blades",
              "Oil Filters",
              "Brake Pads",
              "Spark Plugs",
              "Air Filters",
              "Belts",
              "Coolants",
              "Batteries",
              "Lights",
            ].map((tag) => (
              <div className="sub-tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="fast-moving">
        <Container>
          <div className="section-header">
            <h2>Fast Moving</h2>
            <a href="#" className="view-all">
              View All →
            </a>
          </div>
          <div className="products-grid">
            {products.fastMovingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
      <section className="promotion">
        <Container>
          <div className="promotion-content">
            <div className="promotion-text">
              <span className="promotion-badge">On Sale This Week</span>
              <h2>Wide Selection of Quality Auto Parts at the Lowest Prices</h2>
              <p>
                Praesent mauris mauris, ultricies ultrices. Duis Morbi nisi.
                Fuisait rutrum pede vela.
              </p>
              <a href="#" className="shop-btn">
                Shop Now →
              </a>
            </div>
            <div className="promotion-image">
              {/* <img src="/images/slider image.png" alt="Promotion" /> */}
            </div>
          </div>
        </Container>
      </section>
      <section className="dream-cars">
        <Container>
          <div className="section-header">
            <h2>Your Dream Car</h2>
            <a href="#" className="view-all">
              View All →
            </a>
          </div>
          <div className="cars-grid">
            {[...Array(6)].map((_, i) => (
              <CarCard key={i} />
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;
