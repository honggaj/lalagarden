import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/login'; // Import component login
import TrangChu from '../src/pages/User/home/TrangChu'; // Import component TrangChu
import ProductPage from './pages/User/product/SanPham';
import GioiThieu from './pages/User/introduce/GioiThieu';
import LienHe from './pages/User/contact/LienHe'
import Cart from './pages/User/cart/GioHang'

// Giả sử bạn có trạng thái để kiểm tra người dùng đã đăng nhập hay chưa


const App = () => {
  const handleLogin = (username, password) => {
    // Xử lý đăng nhập ở đây (ví dụ: gọi API kiểm tra username/password)
    if (username === 'user' && password === 'password') {
      // Nếu đăng nhập thành công, điều hướng đến TrangChu
      return true;
    }
    return false;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<TrangChu />} />
        <Route path="/sanpham" element={<ProductPage />} />
        <Route path="/lienhe" element={<LienHe />} /> *
        <Route path="/gioithieu" element={<GioiThieu />} />
        <Route path="/giohang" element={<Cart />} />
      
      </Routes>
    </Router>
  );
};

export default App;
