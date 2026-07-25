import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#101828', color: '#ffffff', padding: '3.5rem 2rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '2.5rem'
        }}>
          
          {/* Column 1: Contact Information */}
          <div>
            <h4 style={{ color: '#fdb813', fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
              CONTACT INFORMATION
            </h4>
            
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#98a2b3', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                OFFICIAL EMAIL
              </div>
              <a href="mailto:info@safeguardsafety.net" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                ✉ info@safeguardsafety.net
              </a>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#98a2b3', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
    WHATSAPP
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', fontWeight: '600' }}>
    <a href="https://wa.me/447878121965" target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>📞 +44 787 812 1965</a>
    <a href="https://wa.me/447311254738" target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>📞 +44 731 125 4738</a>
    <a href="https://wa.me/2347030162747" target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>📞 +234 703 016 2747</a>
    <a href="https://wa.me/2348033097942" target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>📞 +234 803 309 7942</a>
  </div>
            </div>

            {/* Social Links (Matching TopBar Icons) */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#98a2b3', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                CONNECT WITH US
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#ffffff', transition: 'color 0.2s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#ffffff', transition: 'color 0.2s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#ffffff', transition: 'color 0.2s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#fdb813', fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.5px' }}>
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem', fontWeight: '600' }}>
              <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About Us</Link>
              <Link to="/services" style={{ color: '#ffffff', textDecoration: 'none' }}>Courses and Services</Link>
              <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
              <Link to="/get-certified" style={{ color: '#ffffff', textDecoration: 'none' }}>Get Certified</Link>
            </div>
          </div>

          {/* Column 3: Display Locations with Distinct Headings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {/* 1. International Contact Center */}
            <div>
              <h4 style={{ color: '#fdb813', fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>
                INTERNATIONAL CONTACT CENTER
              </h4>
              <p style={{ color: '#d0d5dd', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=4+Highcliffe+Court+Greenfold+Lane+Wetherby+Leeds+LS22+6RG+United+Kingdom" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  📍 <strong>Safeguard Safety and Management Center Limited</strong><br />
                  1st Floor Office Suite,<br />
                  4 Highcliffe Court, Greenfold Lane,<br />
                  Wetherby, Leeds, LS22 6RG, United Kingdom
                </a>
              </p>
            </div>

            {/* 2. Port Harcourt */}
            <div>
              <h4 style={{ color: '#fdb813', fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>
                PORT HARCOURT CORPORATE CENTER
              </h4>
              <p style={{ color: '#d0d5dd', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=6C+Forces+Avenue+Old+GRA+Port+Harcourt+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  📍 <strong>Safeguard Safety and Management Center Limited</strong><br />
                  6C Forces Avenue, Old G.R.A.,<br />
                  Port Harcourt, Nigeria
                </a>
              </p>
            </div>

            {/* 3. Lagos */}
            <div>
              <h4 style={{ color: '#fdb813', fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>
                LAGOS OPERATIONS CENTER
              </h4>
              <p style={{ color: '#d0d5dd', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=2+Tokunbo+Alli+Street+Off+Toyin+Street+Ikeja+Lagos+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  📍 <strong>Safeguard Safety and Management Center Limited</strong><br />
                  Left Wing, 3rd Floor, No. 2 Tokunbo Alli Street,<br />
                  Off Toyin Street, Ikeja, Lagos, Nigeria
                </a>
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#98a2b3' }}>
          © {new Date().getFullYear()} Safeguard Safety and Management Center Limited. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;