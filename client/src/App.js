function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Thanh Header */}
      <header style={{ backgroundColor: '#007bff', padding: '30px', color: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '2px' }}>WORLD OF TOYS</h1>
        <p style={{ margin: '10px 0 0', opacity: 0.9 }}>Khám phá thế giới niềm vui cho bé yêu</p>
      </header>

      {/* Phần thân trang web */}
      <main style={{ padding: '40px 20px' }}>
        <h2 style={{ color: '#333', marginBottom: '30px' }}>Sản Phẩm Bán Chạy</h2>
        
        {/* Một cái Card sản phẩm mẫu */}
        <div style={{ 
          backgroundColor: 'white', 
          border: 'none', 
          padding: '20px', 
          display: 'inline-block', 
          borderRadius: '15px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s'
        }}>
          <img 
            src="https://via.placeholder.com/200" 
            alt="Toy" 
            style={{ borderRadius: '10px', marginBottom: '15px' }} 
          />
          <h3 style={{ color: '#007bff' }}>Robot Chiến Binh</h3>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>550.000đ</p>
          <button style={{ 
            backgroundColor: '#ffc107', 
            color: '#333', 
            border: 'none', 
            padding: '12px 25px', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            borderRadius: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            MUA NGAY
          </button>
        </div>
      </main>

      {/* Footer chân trang */}
      <footer style={{ marginTop: '50px', padding: '20px', color: '#888' }}>
        <p>© 2026 World of Toys - Đồ án Phát triển ứng dụng Web</p>
      </footer>
    </div>
  );
}

export default App;