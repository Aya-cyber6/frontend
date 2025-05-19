import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
  { title: 'Çalışma Geçmişi', icon: 'bi bi-briefcase', url: '/calisma-gecmisi' },
  { title: 'Kişisel Araçlar', icon: 'bi bi-truck', url: '/kisisel-araclar' },
  { title: 'Şirket Araçları', icon: 'bi bi-truck-front', url: '/sirket-araclar' },
  { title: 'Şifre Talebi (Kargo)', icon: 'bi bi-mailbox', url: '/sifre-talebi' },
  { title: 'İkamet Bilgilerim', icon: 'bi bi-house-door', url: '/ikamet-bilgileri' },
  { title: 'Miras İşlemleri', icon: 'bi bi-person-hearts', url: '/miras-islemleri' },
  { title: 'Ulusal Coğrafi Bilgi', icon: 'bi bi-globe-europe-africa', url: '/ulusal-cografya' },
  { title: 'Sigorta Kayıtlarım', icon: 'bi bi-shield-check', url: '/sigorta-kayitlari' }
];

const ServiceGrid = () => {
  // Track hover states individually
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
      <div className="container-fluid px-4">
      <div className="bg-light py-1 px-2">
    <div className="bg-light rounded shadow-sm p-2 mx-auto" style={{ maxWidth: '1200' }}>
      <div className="d-flex flex-wrap justify-content-center" style={{ gap: '8px' }}>
        {services.map((service, idx) => (
          <Link
            key={idx}
            to={service.url}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="text-center text-decoration-none"
            style={{
              width: '90px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: hoveredIndex === idx ? '#0d6efd' : 'inherit', // bootstrap primary blue on hover
            }}
          >
            <i className={`${service.icon} text-primary`} style={{ fontSize: '1.2rem' }}></i>
            <div className="small text-wrap mt-1">{service.title}</div>
          </Link>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ServiceGrid;
