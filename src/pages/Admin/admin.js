import React from 'react';
import LeftBar from '../../components/layoutadmin/LeftBar'; // Nhập LeftBar
import './admin.css'; // Nhập file CSS nếu cần



const Admin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <LeftBar /> {/* Thêm LeftBar vào đây */}
      <div className="admin-content">
        {/* Nội dung của Admin sẽ được hiển thị ở đây */}
        <h1>Chào mừng đến với trang Admin</h1>
        {/* Các route con hoặc nội dung khác */}
      </div>
    </div>
  );
};

export default Admin;
