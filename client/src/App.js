import React from 'react';
import './App.css'; // Quan trọng nhất là dòng này để kết nối CSS

function App() {
  const toys = [
    { id: 1, name: 'Robot Chiến Binh', price: '550.000đ', img: 'https://via.placeholder.com/200x150?text=Robot' },
    { id: 2, name: 'Siêu Xe Điều Khiển', price: '320.000đ', img: 'https://via.placeholder.com/200x150?text=Car' },
    { id: 3, name: 'Búp Bê Công Chúa', price: '450.000đ', img: 'https://via.placeholder.com/200x150?text=Doll' },
    { id: 4, name: 'Bộ Xếp Hình Lego', price: '890.000đ', img: 'https://via.placeholder.com/200x150?text=Lego' },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <h2>WORLD OF TOYS</h2>
        <div className="nav-links">
          <span>Trang Chủ</span>
          <span>Sản Phẩm</span>
          <span>Giỏ Hàng</span>
        </div>
      </nav>

      <div className="banner">
        <h1>BIG SALE 50%</h1>
        <p>Chào mừng ngày hội đồ chơi toàn cầu</p>
      </div>

      <main className="product-grid">
        {toys.map(toy => (
          <div key={toy.id} className="product-card">
            <img src={toy.img} alt={toy.name} />
            <h3>{toy.name}</h3>
            <p style={{color: '#ff4d4f', fontWeight: 'bold'}}>{toy.price}</p>
            <button className="btn-buy">MUA NGAY</button>
          </div>
        ))}
      </main>

      <footer style={{textAlign: 'center', padding: '20px', color: '#888'}}>
        © 2026 World of Toys - Văn Dương
      </footer>
    </div>
  );
}

export default App;