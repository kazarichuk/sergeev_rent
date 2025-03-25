'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      borderRadius: '24px',
      margin: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
        padding: '1.2rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(20px, 5vw, 28px)',
            fontWeight: '600',
            color: '#1d1d1f',
            margin: 0,
            letterSpacing: '-0.5px',
            width: '100%'
          }}>
            Аренда Авто Калининград
          </h1>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a 
              href="tel:+79622699148"
              style={{
                backgroundColor: '#0071e3',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '980px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0077ED';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#0071e3';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Позвонить
            </a>
            <a 
              href="https://t.me/persmeet"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#f5f5f7',
                color: '#1d1d1f',
                padding: '12px 24px',
                borderRadius: '980px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#e8e8ed';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f7';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.633 4.937c-.272.272-.272.714 0 .986l2.857 2.857c.272.272.714.272.986 0l2.857-2.857c.272-.272.272-.714 0-.986l-2.857-2.857c-.272-.272-.714-.272-.986 0l-2.857 2.857z"></path>
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Галерея изображений */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://imgur.com/r4xFEDN.jpg" 
              alt="Car 1"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              borderRadius: '0 0 16px 16px',
              display: 'flex',
              gap: '8px',
              justifyContent: 'center'
            }}>
              <a 
                href="tel:+79622699148"
                style={{
                  backgroundColor: '#0071e3',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077ED';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#0071e3';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Позвонить
              </a>
              <a 
                href="https://t.me/persmeet"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8ed';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.633 4.937c-.272.272-.272.714 0 .986l2.857 2.857c.272.272.714.272.986 0l2.857-2.857c.272-.272.272-.714 0-.986l-2.857-2.857c-.272-.272-.714-.272-.986 0l-2.857 2.857z"></path>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src="https://imgur.com/qRjYlbi.jpg" 
              alt="Car 2"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              borderRadius: '0 0 16px 16px',
              display: 'flex',
              gap: '8px',
              justifyContent: 'center'
            }}>
              <a 
                href="tel:+79622699148"
                style={{
                  backgroundColor: '#0071e3',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077ED';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#0071e3';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Позвонить
              </a>
              <a 
                href="https://t.me/persmeet"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8ed';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.633 4.937c-.272.272-.272.714 0 .986l2.857 2.857c.272.272.714.272.986 0l2.857-2.857c.272-.272.272-.714 0-.986l-2.857-2.857c-.272-.272-.714-.272-.986 0l-2.857 2.857z"></path>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src="https://imgur.com/ozCrk0L.jpg" 
              alt="Car 3"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              borderRadius: '0 0 16px 16px',
              display: 'flex',
              gap: '8px',
              justifyContent: 'center'
            }}>
              <a 
                href="tel:+79622699148"
                style={{
                  backgroundColor: '#0071e3',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077ED';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#0071e3';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Позвонить
              </a>
              <a 
                href="https://t.me/persmeet"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8ed';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.633 4.937c-.272.272-.272.714 0 .986l2.857 2.857c.272.272.714.272.986 0l2.857-2.857c.272-.272.272-.714 0-.986l-2.857-2.857c-.272-.272-.714-.272-.986 0l-2.857 2.857z"></path>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                </svg>
                Telegram
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img 
              src="https://imgur.com/tVbqDf7.jpg" 
              alt="Car 4"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
              borderRadius: '0 0 16px 16px',
              display: 'flex',
              gap: '8px',
              justifyContent: 'center'
            }}>
              <a 
                href="tel:+79622699148"
                style={{
                  backgroundColor: '#0071e3',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077ED';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#0071e3';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Позвонить
              </a>
              <a 
                href="https://t.me/persmeet"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#f5f5f7',
                  color: '#1d1d1f',
                  padding: '8px 16px',
                  borderRadius: '980px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8ed';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.633 4.937c-.272.272-.272.714 0 .986l2.857 2.857c.272.272.714.272.986 0l2.857-2.857c.272-.272.272-.714 0-.986l-2.857-2.857c-.272-.272-.714-.272-.986 0l-2.857 2.857z"></path>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
