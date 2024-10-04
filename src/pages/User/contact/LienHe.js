import React from 'react';
import './LienHe.css'; // Tạo file CSS để trang trí cho trang này
import NavBar from '../home/Navbar'; 

const LienHe = () => {
  return (
    <div>
      <NavBar />
      <div className="lienhe-container">
        <h1>Liên hệ với chúng tôi</h1>
        <p>Chúng tôi rất mong nhận được ý kiến và phản hồi từ bạn!</p>
        
        <div className="lienhe-info">
          <h2>Thông tin liên hệ</h2>
          <p><strong>Địa chỉ:</strong> 123 Đường Sống Đẹp, Quận 1, TP. Hồ Chí Minh</p>
          <p><strong>Điện thoại:</strong> 0123 456 789</p>
          <p><strong>Email:</strong> lalagarden@gmail.com</p>
        </div>

        <div className="lienhe-form">
          <h2>Biểu mẫu liên hệ</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Họ và tên:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Nội dung:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
