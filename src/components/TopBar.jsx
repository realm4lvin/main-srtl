import { useState, useEffect } from 'react';

const TopBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      backgroundColor: 'var(--color-dark)',
      color: 'var(--color-white)',
      padding: isMobile ? '0.6rem 1rem' : '0.5rem 2rem',
      fontSize: '0.8rem',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: isMobile ? '0.5rem' : '1.2rem',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      {/* Phone Numbers & Email */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '0.4rem' : '1.2rem', 
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Phone Numbers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" style={{ flexShrink: 0 }}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span style={{ fontWeight: '500', fontSize: isMobile ? '0.75rem' : '0.82rem', lineHeight: '1.4' }}>
            Whatsapp: +44 787 812 1965 | +234 703 016 2747 | +44 731 125 4738 | +234 803 309 7942
          </span>
        </div>

        {!isMobile && <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>}

        {/* Email */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" style={{ flexShrink: 0 }}>
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <a href="mailto:info@safeguardsafety.net" style={{ color: 'inherit', textDecoration: 'none' }}>info@safeguardsafety.net</a>
        </div>
      </div>

      {/* Social Links */}
<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  <a 
    href="https://www.facebook.com/share/1GcFUzeXPK/" 
    target="_blank" 
    rel="noreferrer" 
    className="social-icon"
    aria-label="Facebook"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  </a>

  <a 
    href="https://www.instagram.com/safeguard_safety" 
    target="_blank" 
    rel="noreferrer" 
    className="social-icon"
    aria-label="Instagram"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
  </a>

  <a 
    href="https://www.linkedin.com/company/safeguard-safety-and-management-center/" 
    target="_blank" 
    rel="noreferrer" 
    className="social-icon"
    aria-label="LinkedIn"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  </a>
</div>
    </div>
  );
};

export default TopBar;