import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminProductForm from "./pages/AdminProductForm";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute>
              <AdminProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/create"
          element={
            <PrivateRoute>
              <AdminProductForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <PrivateRoute>
              <AdminProductForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
