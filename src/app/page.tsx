'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          infinite: false,
          speed: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  };

  const images = [
    "https://imgur.com/NerIFX8.jpg",
    "https://imgur.com/yWSmAmG.jpg",
    "https://imgur.com/iBV4SDo.jpg",
    "https://imgur.com/04JsrOY.jpg"
  ];

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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
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
        padding: '20px'
      }}>
        {/* Карусель */}
        <div style={{
          marginBottom: '40px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          aspectRatio: '3/2',
          maxHeight: '853px'
        }}>
          <style jsx global>{`
            .slick-prev, .slick-next {
              width: 40px;
              height: 40px;
              background: rgba(255, 255, 255, 0.9) !important;
              border-radius: 50%;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              z-index: 1;
              transition: all 0.2s ease;
            }
            .slick-prev:hover, .slick-next:hover {
              background: white !important;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }
            .slick-prev {
              left: 20px !important;
            }
            .slick-next {
              right: 20px !important;
            }
            .slick-prev:before, .slick-next:before {
              color: #1d1d1f !important;
              font-size: 20px !important;
            }
            .slick-dots {
              bottom: 20px !important;
            }
            .slick-dots li button:before {
              color: rgba(255, 255, 255, 0.5) !important;
              font-size: 8px !important;
            }
            .slick-dots li.slick-active button:before {
              color: white !important;
            }
            .slick-slide {
              height: 100% !important;
            }
            .slick-slide img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
              object-position: center !important;
            }
            @media (max-width: 1024px) {
              .slick-slide {
                height: auto !important;
                margin-bottom: 16px !important;
              }
              .slick-slide img {
                height: auto !important;
                aspect-ratio: 3/2 !important;
                object-fit: cover !important;
                border-radius: 12px !important;
              }
              .slick-list {
                margin: 0 !important;
                padding: 0 !important;
              }
              .slick-track {
                display: flex !important;
                flex-direction: column !important;
                gap: 16px !important;
              }
            }
          `}</style>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <img 
                  src={image}
                  alt={`Car ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}
