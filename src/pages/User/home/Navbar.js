import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';




const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logolala.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/home">Trang chủ</Link>
        </li>
        <li>
          <Link to="/gioithieu">Giới thiệu</Link>
        </li>
        <li>
          <Link to="/sanpham">Sản phẩm</Link>
        </li>
        <li>
          <Link to="/lienhe">Liên hệ</Link>
        </li>
      </ul>
      <div className="right-menu">
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm..." className="search-input" />
        </div>
        <Link to="/giohang">
          <FontAwesomeIcon icon={faShoppingCart} /> {/* Biểu tượng giỏ hàng */}
        </Link>
        <Link to="/taikhoan">
          <FontAwesomeIcon icon={faUser} /> {/* Biểu tượng tài khoản */}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
