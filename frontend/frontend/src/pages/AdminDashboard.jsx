import React, { useEffect, useState } from "react";
import { Container, Card, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    featuredProducts: 0,
    recentProducts: [],
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/dashboard", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setStats(response.data))
      .catch((error) =>
        console.error("Error fetching dashboard stats:", error)
      );
  }, []);

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
          <Link to="/admin" className="nav-link active">
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
          <Link to="/admin/products" className="nav-link">
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
          <button
            className="logout-btn"
            onClick={() => {
              axios
                .post(
                  "http://127.0.0.1:8000/api/logout",
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                )
                .then(() => localStorage.removeItem("token"))
                .catch((error) => console.error("Error logging out:", error));
            }}
          >
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
          <h1>Dashboard</h1>
          <div className="user-info">
            <div className="user-avatar">A</div>
            <div>
              <div>Admin</div>
              <div className="text-sm text-gray-500">Administrator</div>
            </div>
          </div>
        </header>
        <Container>
          <div className="stats-grid">
            <Card className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-info">
                <h3>{stats.totalProducts}</h3>
                <p>Total Products</p>
              </div>
            </Card>
            <Card className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-info">
                <h3>{stats.activeProducts}</h3>
                <p>Active Products</p>
              </div>
            </Card>
            <Card className="stat-card">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.049 2.927C11.3483 2.00603 12.6517 2.00603 12.951 2.927L14.4697 7.60081C14.6035 8.01284 14.9875 8.29751 15.4207 8.29751H20.4329C21.4016 8.29751 21.8045 9.56885 21.0596 10.1008L17.2409 12.8583C16.8893 13.1177 16.7434 13.5645 16.8772 13.9766L18.3959 18.6504C18.6952 19.5713 17.6122 20.3393 16.8673 19.8073L13.0486 17.0498C12.6970 16.7904 12.3030 16.7904 11.9514 17.0498L8.13268 19.8073C7.38776 20.3393 6.30477 19.5713 6.60407 18.6504L8.12279 13.9766C8.25659 13.5645 8.11064 13.1177 7.75909 12.8583L3.94038 10.1008C3.19546 9.56885 3.59841 8.29751 4.56707 8.29751H9.57925C10.0125 8.29751 10.3965 8.01284 10.5303 7.60081L11.049 2.927Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-info">
                <h3>{stats.featuredProducts}</h3>
                <p>Featured Products</p>
              </div>
            </Card>
          </div>
          <div className="recent-products">
            <h2>Recent Products</h2>
            <div className="products-table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={`http://127.0.0.1:8000/storage/${product.image}`}
                          alt={product.name}
                          className="product-thumb"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.formatted_price}</td>
                      <td>
                        <span
                          className={`status ${
                            product.is_active ? "active" : "inactive"
                          }`}
                        >
                          {product.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        {new Date(product.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AdminDashboard;
