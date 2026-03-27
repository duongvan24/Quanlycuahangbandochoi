import React from 'react';

function App() {
  // 1. Tạo danh sách đồ chơi mẫu
  const toys = [
    { id: 1, name: 'Robot Chiến Binh', price: '550.000đ', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Siêu Xe Điều Khiển', price: '320.000đ', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Búp Bê Công Chúa', price: '450.000đ', img: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Bộ Xếp Hình Lego', price: '890.000đ', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#007bff', padding: '20px', color: 'white' }}>
        <h1>WORLD OF TOYS</h1>
        <p>Chào mừng đến với thế giới đồ chơi</p>
      </header>

      <main style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {/* 2. Dùng hàm map để hiển thị danh sách */}
        {toys.map(toy => (
          <div key={toy.id} style={{ 
            backgroundColor: 'white', 
            padding: '15px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '200px'
          }}>
            <img src={toy.img} alt={toy.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h3 style={{ fontSize: '1.1rem', margin: '10px 0' }}>{toy.name}</h3>
            <p style={{ color: '#ff4d4f', fontWeight: 'bold' }}>{toy.price}</p>
            <button style={{ 
              backgroundColor: '#ffc107', 
              border: 'none', 
              padding: '8px 15px', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>Mua ngay</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;