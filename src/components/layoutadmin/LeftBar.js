import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBar.css'; // Nhập file CSS của bạn

const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="logo">
        {/* Thay đổi đường dẫn theo vị trí thực tế của logo */}
        <img src="/images/logolala.png" alt="Logo" style={{ height: '50px' }} /> 
      </div>
      <div className="menu">
        <div>
          <Link to="/qlycay">Quản lý cây</Link>
        </div>
        <div>
          <Link to="/quanlytaikhoan">Quản lý tài khoản</Link>
        </div>
        <div>
          <Link to="/quanlydonhang">Quản lý đơn hàng</Link>
        </div>
        {/* Thêm các mục khác nếu cần */}
      </div>
    </div>
  );
};

export default LeftBar;
