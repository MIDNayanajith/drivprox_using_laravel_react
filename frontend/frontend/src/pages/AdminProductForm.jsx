import React, { useEffect, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdminProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    original_price: "",
    image: null,
    reviews_count: 0,
    rating: 0,
    is_featured: false,
    is_active: true,
    category: "fast_moving",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (id) {
      // Fetch product data for editing
      axios
        .get(`http://127.0.0.1:8000/api/products/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          const { data } = response;
          setFormData({
            name: data.name,
            description: data.description,
            price: data.price,
            original_price: data.original_price || "",
            image: null, // Image is handled separately
            reviews_count: data.reviews_count,
            rating: data.rating,
            is_featured: data.is_featured,
            is_active: data.is_active,
            category: data.category,
          });
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setError("Failed to load product data.");
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const data = new FormData();

    // Handle all form fields properly
    Object.keys(formData).forEach((key) => {
      if (key === "image" && formData[key]) {
        data.append("image", formData[key]);
      } else if (key === "is_active" || key === "is_featured") {
        // Ensure booleans are sent as strings that Laravel can parse
        data.append(key, formData[key] ? "1" : "0");
      } else if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });

    // Add method spoofing for PUT requests
    if (id) {
      data.append("_method", "PUT");
    }

    const request = id
      ? axios.post(`http://127.0.0.1:8000/api/products/${id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        })
      : axios.post("http://127.0.0.1:8000/api/products", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        });

    request
      .then((response) => {
        setSuccess(
          id ? "Product updated successfully!" : "Product created successfully!"
        );
        setTimeout(() => navigate("/admin/products"), 2000);
      })
      .catch((error) => {
        console.error("Error saving product:", error);

        // Log the actual validation errors for debugging
        if (error.response && error.response.data) {
          console.error("Validation errors:", error.response.data);
          setError(
            `Failed to save product: ${JSON.stringify(
              error.response.data.errors || error.response.data.message
            )}`
          );
        } else {
          setError("Failed to save product. Please check the form data.");
        }
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setSuccess("");

  //   const data = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     if (key === "image" && formData[key]) {
  //       data.append("image", formData[key]);
  //     } else {
  //       data.append(key, formData[key]);
  //     }
  //   });

  //   const request = id
  //     ? axios.put(`http://127.0.0.1:8000/api/products/${id}`, data, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       })
  //     : axios.post("http://127.0.0.1:8000/api/products", data, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //   request
  //     .then((response) => {
  //       setSuccess(
  //         id ? "Product updated successfully!" : "Product created successfully!"
  //       );
  //       setTimeout(() => navigate("/admin/products"), 2000);
  //     })
  //     .catch((error) => {
  //       console.error("Error saving product:", error);
  //       setError("Failed to save product. Please check the form data.");
  //     });
  // };

  const handleLogout = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="M3.27 6.96 12 12.01 20.73 6.96" />
            <path d="M12 22.08V12" />
          </svg>
          <h2>DriveProX Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Dashboard
          </Link>
          <Link to="/admin/products" className="nav-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            Products
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>{id ? "Edit Product" : "Add Product"}</h1>
          <div className="user-info">
            <div className="user-avatar">A</div>
            <div>
              <div>Admin</div>
              <div className="text-sm text-gray-500">Administrator</div>
            </div>
          </div>
        </header>
        <Container>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit} className="form-grid">
            <Form.Group className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                required
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Original Price</Form.Label>
              <Form.Control
                type="number"
                name="original_price"
                value={formData.original_price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
                required={!id}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Reviews Count</Form.Label>
              <Form.Control
                type="number"
                name="reviews_count"
                value={formData.reviews_count}
                onChange={handleInputChange}
                min="0"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="5"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="fast_moving">Fast Moving</option>
                <option value="accessories">Accessories</option>
                <option value="spare_parts">Spare Parts</option>
              </Form.Control>
            </Form.Group>
            <div className="form-checkboxes">
              <Form.Group className="checkbox-label">
                <Form.Check
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  label="Active"
                />
              </Form.Group>
              <Form.Group className="checkbox-label">
                <Form.Check
                  type="checkbox"
                  name="is_featured"
                  checked={formData.is_featured}
                  onChange={handleInputChange}
                  label="Featured"
                />
              </Form.Group>
            </div>
            <div className="form-actions">
              <Button type="submit" variant="primary">
                {id ? "Update Product" : "Create Product"}
              </Button>
              <Link to="/admin/products" className="btn btn-secondary ms-2">
                Cancel
              </Link>
            </div>
          </Form>
        </Container>
      </main>
    </div>
  );
};

export default AdminProductForm;
