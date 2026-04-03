import React from 'react';
import './App.css';

function App() {
  const toys = [
    { id: 1, name: 'Robot Optimus Prime', price: '1.250.000đ', img: 'https://images.unsplash.com/photo-1531693251400-38df35776dc7?w=400' },
    { id: 2, name: 'Siêu Xe Porsche 911', price: '850.000đ', img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400' },
    { id: 3, name: 'Lego Star Wars', price: '2.100.000đ', img: 'https://images.unsplash.com/photo-1585366119957-e556f4d0484c?w=400' },
    { id: 4, name: 'Gấu Bông Totoro', price: '350.000đ', img: 'https://images.unsplash.com/photo-1559449182-263d81d4285e?w=400' },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">WORLD OF TOYS</div>
        <div className="nav-links">
          <span>Khám phá</span>
          <span>Bán chạy</span>
          <span>Liên hệ</span>
          <span style={{color: '#2563eb'}}>🛒 (0)</span>
        </div>
      </nav>

      <header className="banner">
        <h1>Vương Quốc Đồ Chơi</h1>
        <p>Mang niềm vui trọn vẹn đến cho bé yêu của bạn</p>
      </header>

      <main>
        <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Sản phẩm mới về</h2>
        <div className="product-grid">
          {toys.map(toy => (
            <div key={toy.id} className="product-card">
              <img src={toy.img} alt={toy.name} />
              <div className="product-info">
                <h3>{toy.name}</h3>
                <p className="price">{toy.price}</p>
                <button className="btn-buy">Thêm vào giỏ</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{textAlign: 'center', padding: '3rem', color: '#94a3b8', fontSize: '0.9rem'}}>
        <hr style={{border: '0', borderTop: '1px solid #e2e8f0', marginBottom: '2rem'}} />
        <p>© 2026 World of Toys - Thiết kế bởi Vũ Văn Dương</p>
      </div>
    </div>
  );
}

export default App;