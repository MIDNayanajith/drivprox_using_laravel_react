import React from "react";

const ProductCard = ({ product }) => {
  // API base URL for images
  const API_BASE_URL = "http://127.0.0.1:8000";

  // Helper function to get the full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/images/placeholder.jpg"; // fallback image
    return `${API_BASE_URL}/storage/${imagePath}`;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={getImageUrl(product.image)}
          alt={product.name}
          loading="lazy"
          width="250"
          height="200"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        />
        <div className="product-badge">4%</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${i < product.rating ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="review-count">{product.reviews_count} Review</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.original_price && (
            <span className="original-price">${product.original_price}</span>
          )}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
