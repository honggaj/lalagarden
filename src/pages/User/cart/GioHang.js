import React from 'react';
import './GioHang.css'; // Tạo file CSS để style nếu cần
import NavBar from '../home/Navbar'; 

const GioHang = () => {
  const items = [
    {
      id: 1,
      name: 'Cây Xương Rồng',
      quantity: 2,
      price: 100000,
      image: 'public/images/cay_xuong_rong.png', // Đường dẫn đến hình ảnh
    },
    {
      id: 2,
      name: 'Cây Sen Đá',
      quantity: 1,
      price: 80000,
      image: 'public/images/cay_sen_da.png', // Đường dẫn đến hình ảnh
    },
    // Thêm nhiều sản phẩm hơn nếu cần
  ];

  const handleRemove = (id) => {
    console.log(`Xóa sản phẩm với ID: ${id}`);
    // Thêm logic để xóa sản phẩm nếu cần
  };

  return (
    <div className="giohang">
      <NavBar />
      <div className="gio-hang">
        <h2>Giỏ Hàng</h2>
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price.toLocaleString()} VNĐ</td>
                <td>
                  <img src={item.image} alt={item.name} className="product-image" />
                </td>
                <td>
                  <button onClick={() => handleRemove(item.id)} className="delete-icon">
                    &#10006; {/* Icon xóa (dấu X) */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GioHang;
