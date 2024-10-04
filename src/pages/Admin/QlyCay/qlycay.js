import React, { useState } from 'react';
import LeftBar from '../../../components/layoutadmin/LeftBar';
import './qlycay.css';

const QuanLyCay = () => {
  const [plants, setPlants] = useState([]); // Danh sách cây
  const [newPlant, setNewPlant] = useState({ name: '', price: '', image: '', quantity: '' }); // Cây mới
  const [editingIndex, setEditingIndex] = useState(null); // Chỉ số cây đang chỉnh sửa
  const [error, setError] = useState(''); // Thông báo lỗi

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPlant({ ...newPlant, image: reader.result }); // Lưu URL ảnh vào state
      };
      reader.readAsDataURL(file); // Đọc tệp như URL
    }
  };

  const addPlant = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (!newPlant.name || !newPlant.price || !newPlant.image || !newPlant.quantity) {
      setError('Vui lòng nhập đầy đủ thông tin cây!');
      return;
    }
    setError(''); // Reset thông báo lỗi

    try {
      const response = await fetch('/api/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlant), // Chuyển đổi cây mới thành JSON
      });

      if (response.ok) {
        const savedPlant = await response.json(); // Nhận cây đã lưu từ server
        setPlants([...plants, savedPlant]); // Thêm cây vào danh sách
        setNewPlant({ name: '', price: '', image: '', quantity: '' }); // Reset input
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Hiển thị thông báo lỗi
      }
    } catch (err) {
      setError('Đã xảy ra lỗi trong quá trình lưu cây!'); // Thông báo lỗi chung
    }
  };

  const editPlant = (index) => {
    setNewPlant(plants[index]); // Đặt thông tin cây đang sửa vào input
    setEditingIndex(index); // Lưu chỉ số cây đang sửa
  };

  const deletePlant = (index) => {
    const updatedPlants = plants.filter((_, i) => i !== index); // Lọc cây ra khỏi danh sách
    setPlants(updatedPlants); // Cập nhật danh sách cây
  };

  return (
    <div style={{ display: 'flex' }}>
      <LeftBar />
      <div className="quan-ly-cay-content">
        <h1>Quản Lý Cây</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="form-container">
          <input
            type="text"
            name="name"
            placeholder="Tên cây"
            value={newPlant.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Giá cây"
            value={newPlant.price}
            onChange={handleInputChange}
          />
          <input
            type="file"
            accept="image/*" // Chỉ cho phép các tệp ảnh
            onChange={handleImageChange} // Gọi hàm khi tệp được chọn
          />
          <input
            type="number"
            name="quantity"
            placeholder="Số lượng"
            value={newPlant.quantity}
            onChange={handleInputChange}
          />
          <button onClick={addPlant}>{editingIndex !== null ? 'Xong' : 'Thêm'}</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Tên cây</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Ảnh</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={index}>
                <td>{plant.name}</td>
                <td>{plant.price}đ</td>
                <td>{plant.quantity}</td>
                <td><img src={plant.image} alt={plant.name} /></td>
                <td>
                  <button onClick={() => editPlant(index)}>Sửa</button>
                  <button onClick={() => deletePlant(index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuanLyCay;
