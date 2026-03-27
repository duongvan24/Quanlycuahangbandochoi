import React from 'react';

function App() {
  const toys = [
    { id: 1, name: 'Robot Chiến Binh', price: '550.000đ', img: 'https://via.placeholder.com/200x150?text=Robot' },
    { id: 2, name: 'Siêu Xe Điều Khiển', price: '320.000đ', img: 'https://via.placeholder.com/200x150?text=Car' },
    { id: 3, name: 'Búp Bê Công Chúa', price: '450.000đ', img: 'https://via.placeholder.com/200x150?text=Doll' },
    { id: 4, name: 'Bộ Xếp Hình Lego', price: '890.000đ', img: 'https://via.placeholder.com/200x150?text=Lego' },
  ];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* 1. THANH MENU (NAVBAR) */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '15px 50px', backgroundColor: '#007bff', color: 'white',
        position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ margin: 0 }}>WORLD OF TOYS</h2>
        <div style={{ display: 'flex', gap: '25px', fontWeight: 'bold' }}>
          <span style={{ cursor: 'pointer' }}>Trang Chủ</span>
          <span style={{ cursor: 'pointer' }}>Đồ Chơi Bé Trai</span>
          <span style={{ cursor: 'pointer' }}>Đồ Chơi Bé Gái</span>
          <span style={{ cursor: 'pointer', position: 'relative' }}>
            🛒 Giỏ Hàng (0)
          </span>
        </div>
      </nav>

      {/* 2. BANNER QUẢNG CÁO */}
      <div style={{ 
        height: '200px', backgroundColor: '#ffc107', display: 'flex', 
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        backgroundImage: 'linear-gradient(45deg, #ffc107 0%, #ff9800 100%)', color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>GIẢM GIÁ 30%</h1>
        <p style={{ fontSize: '1.2rem' }}>Dành cho các dòng Robot lắp ráp trong tuần này!</p>
      </div>

      {/* 3. DANH SÁCH SẢN PHẨM */}
      <main style={{ padding: '40px 50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>TẤT CẢ SẢN PHẨM</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '30px' 
        }}>
          {toys.map(toy => (
            <div key={toy.id} style={{ 
              backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: '0.3s'
            }}>
              <img src={toy.img} alt={toy.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '1.1rem', margin: '0 0 10px 0', color: '#444' }}>{toy.name}</h3>
                <p style={{ color: '#ff4d4f', fontWeight: 'bold', fontSize: '1.2rem', margin: '0 0 15px 0' }}>{toy.price}</p>
                <button style={{ 
                  width: '100%', padding: '10px', backgroundColor: '#007bff', 
                  color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Thêm Vào Giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '30px', color: '#999' }}>
        © 2026 World of Toys - Được xây dựng bởi Văn Dương
      </footer>
    </div>
  );
}

export default App;