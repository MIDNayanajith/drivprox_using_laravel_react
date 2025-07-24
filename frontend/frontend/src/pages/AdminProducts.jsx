import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setProducts(response.data.data))
      .catch((error) => {
        console.error("Error fetching products:", error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login"); // Redirect to login if unauthorized
        }
      });
  }, [navigate]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/products/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then(() => setProducts(products.filter((p) => p.id !== id)))
        .catch((error) => console.error("Error deleting product:", error));
    }
  };

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
          <h1>Products</h1>
          <div className="user-info">
            <div className="user-avatar">A</div>
            <div>
              <div>Admin</div>
              <div className="text-sm text-gray-500">Administrator</div>
            </div>
          </div>
        </header>
        <Container>
          <div className="products-management">
            <div className="page-header">
              <h1>Products</h1>
              <Link to="/admin/products/create" className="btn btn-primary">
                Add Product
              </Link>
            </div>
            <div className="products-table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={`http://127.0.0.1:8000/storage/${product.image}`}
                          alt={product.name}
                          className="product-thumb"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>
                        <span
                          className={`status ${
                            product.is_active ? "active" : "inactive"
                          }`}
                        >
                          {product.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td
                        className={`featured ${
                          product.is_featured ? "yes" : "no"
                        }`}
                      >
                        {product.is_featured ? "Yes" : "No"}
                      </td>
                      <td className="actions">
                        <Link
                          to={`/admin/products/edit/${product.id}`}
                          className="btn btn-sm btn-info"
                        >
                          Edit
                        </Link>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            {/* Add pagination if needed */}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AdminProducts;
