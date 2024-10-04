import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Tạo file CSS để định dạng

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State để lưu thông báo lỗi
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Kiểm tra thông tin đăng nhập (ví dụ: giả lập đăng nhập thành công)
        if (username === "adminBao" && password === "123456") {
            onLogin(); // Gọi hàm onLogin từ props
            navigate('/home'); // Điều hướng tới trang chính (TrangChu)
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng!'); // Thiết lập thông báo lỗi
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Đăng Nhập</h2>
                {error && <div className="error-message">{error}</div>} {/* Hiển thị thông báo lỗi nếu có */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-login">
                        <button type="submit">Đăng Nhập</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
