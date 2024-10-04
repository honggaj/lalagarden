import React from 'react';
import './TrangChu.css'; // Đảm bảo bạn đã import CSS
import ImageSlider from './Slider';
import NavBar from './Navbar'; // Nếu bạn đang ở trong thư mục pages/home

import '@fortawesome/fontawesome-free/css/all.min.css';

const TrangChu = () => {
  return (
    <div className="trang-chu">
      <NavBar /> {/* Đưa NavBar vào đây */}

      <ImageSlider /> {/* Chèn slider vào đây */}

      <div className="content">
        <div className="thu-hut">
          <h2>Câu thu hút mua cây cảnh</h2>
          <div className="items">
            <div className="item">
              <img src="/images/banner1.jpg" alt="Câu thu hút 1" />
              <p>Cây xanh mang lại không khí trong lành cho không gian sống!</p>
            </div>
            <div className="item">
              <img src="/images/banner2.jpg" alt="Câu thu hút 2" />
              <p>Cùng chăm sóc cây cảnh để thêm phần tươi đẹp cho ngôi nhà!</p>
            </div>
            <div className="item">
              <img src="/images/banner3.jpg" alt="Câu thu hút 3" />
              <p>Cây cảnh giúp giảm stress và tăng cường sức khỏe tinh thần!</p>
            </div>
          </div>
        </div>

        <div className="product-section">
          <h2>Sản phẩm mới</h2>
          <div className="products">
            <div className="product-item">
              <img src="/images/cayluoiho.png" alt="Sản phẩm mới 1" />
              <h3>Cây lưỡi hổ</h3>
              <p>Giá: 120.000đ</p>
            </div>
            <div className="product-item">
              <img src="/images/daiphugia.png" alt="Sản phẩm mới 2" />
              <h3>Cây đại phú gia</h3>
              <p>Giá: 180.000đ</p>
            </div>
            <div className="product-item">
              <img src="/images/ngocvan.png" alt="Sản phẩm mới 3" />
              <h3>Cây ngọc vân</h3>
              <p>Giá: 250.000đ</p>
            </div>
            <div className="product-item">
              <img src="/images/trucbachhop.png" alt="Sản phẩm mới 4" />
              <h3>Cây trúc bách hợp</h3>
              <p>Giá: 300.000đ</p>
            </div>
          </div>
          <div className="products">
            <div className="product-item">
              <img src="/images/cayluoiho.png" alt="Sản phẩm mới 1" />
              <h3>Cây lưỡi hổ</h3>
              <p>Giá: 120.000đ</p>
            </div>
            <div className="product-item">
              <img src="/images/daiphugia.png" alt="Sản phẩm mới 2" />
              <h3>Cây đại phú gia</h3>
              <p>Giá: 180.000đ</p>
            </div>
            <div className="product-item">
              <img src="/images/ngocvan.png" alt="Sản phẩm mới 3" />
              <h3>Cây ngọc vân</h3>
              <p>Giá: 250.000đ</p>
            </div>
            <div className="product-item">
              <img src="/images/trucbachhop.png" alt="Sản phẩm mới 4" />
              <h3>Cây trúc bách hợp</h3>
              <p>Giá: 300.000đ</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="bb">
        <i className="fas fa-leaf"></i> {/* Biểu tượng lá bên trái */}
        <h2>Hãy mang thiên nhiên vào ngôi nhà của bạn!</h2>
        <i className="fas fa-leaf"></i> {/* Biểu tượng lá bên phải */}
      </div>

      <footer className="lien-he">
        <h2>Liên hệ với chúng tôi</h2>
        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        <p>Số điện thoại: 0123456789</p>
      </footer>
    </div>
  );
};

export default TrangChu;
