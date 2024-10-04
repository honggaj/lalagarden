import React from 'react';
import './SanPham.css'; // File CSS
import NavBar from '../home/Navbar'; 

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <div className="product-container">
        {/* Thẻ đầu tiên */}
        <div className="product-images">
          <div className="main-image">
            <img src="/images/sale_image.png" alt="Cây cảnh chính" />
          </div>
          <div className="side-images">
            <div className="side-image-item">
              <img src="/images/sale_image.png" alt="Cây cảnh" />
              <a href="/">
              <p>Cây cảnh</p>
              </a>
              
            </div>
            <div className="side-image-item">
              <img src="/images/sale_image.png" alt="Chậu cây" />
              <a href="/">
              <p>Chậu cây</p>
              </a>
             
            </div>
            <div className="side-image-item">
              <img src="/images/sale_image.png" alt="Phân bón" />
              <a href="/">
              <p>Phân bón</p>
              </a>
            </div>
          </div>
        </div>

        {/* Thẻ thứ hai */}
        <div className="product-section">
          <h2>Cây cảnh</h2>
          <div className="products">
            {/* Danh sách sản phẩm */}
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
    </div>
  );
};

export default ProductPage;
