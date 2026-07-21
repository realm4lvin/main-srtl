import { Link } from 'react-router-dom';

const Footer = () => {
  // Google Maps Search URLs
  const ukMapUrl = "http://googleusercontent.com/maps.google.com/8";
  const phMapUrl = "http://googleusercontent.com/maps.google.com/9";
  const lagosMapUrl = "https://www.google.com/maps/search/?api=1&query=6+Forces+Ave,+Port+Harcourt,+500101,+Rivers0";

  const addressLinkStyle = {
    color: '#eaecf0',
    textDecoration: 'none',
    fontSize: '0.88rem',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    transition: 'color 0.2s ease, transform 0.2s ease'
  };

  const handleLinkMouseEnter = (e) => {
    e.currentTarget.style.color = 'var(--color-yellow)';
    e.currentTarget.style.transform = 'translateX(4px)';
  };

  const handleLinkMouseLeave = (e) => {
    e.currentTarget.style.color = '#eaecf0';
    e.currentTarget.style.transform = 'translateX(0)';
  };

  return (
    <footer style={{ backgroundColor: '#101828', color: '#ffffff', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '4px solid #2b704a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1.6fr',
          gap: '3.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* 1. CONTACT INFORMATION (MOVED TO LEFT) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h4 style={{ color: 'var(--color-yellow)', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
              CONTACT INFORMATION
            </h4>

            {/* Email Link */}
            <div>
              <div style={{ color: '#98a2b3', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.3rem', letterSpacing: '0.5px' }}>
                Official Email
              </div>
              <a 
                href="mailto:info@safeguardsafety.net" 
                style={{ color: '#eaecf0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-yellow)'}
                onMouseLeave={(e) => e.target.style.color = '#eaecf0'}
              >
                ✉️ info@safeguardsafety.net
              </a>
            </div>

            {/* Direct Phone / WhatsApp Lines */}
            <div>
              <div style={{ color: '#98a2b3', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                Mobile / WhatsApp Direct Line
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                <a href="https://wa.me/447878121965" target="_blank" rel="noreferrer" style={{ color: '#eaecf0', textDecoration: 'none', fontWeight: '500' }}>📞 +44 787 812 1965</a>
                <a href="https://wa.me/447311254738" target="_blank" rel="noreferrer" style={{ color: '#eaecf0', textDecoration: 'none', fontWeight: '500' }}>📞 +44 731 125 4738</a>
                <a href="https://wa.me/2347030162747" target="_blank" rel="noreferrer" style={{ color: '#eaecf0', textDecoration: 'none', fontWeight: '500' }}>📞 +234 703 016 2747</a>
                <a href="https://wa.me/2348033077942" target="_blank" rel="noreferrer" style={{ color: '#eaecf0', textDecoration: 'none', fontWeight: '500' }}>📞 +234 803 309 7942</a>
              </div>
            </div>
          </div>

          {/* 2. QUICK NAVIGATION LINKS */}
          <div>
            <h4 style={{ color: 'var(--color-yellow)', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1.2rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
                { label: 'Get Certified', path: '/get-certified' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    style={{
                      color: '#eaecf0',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'color 0.2s ease, padding-left 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--color-yellow)';
                      e.target.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#eaecf0';
                      e.target.style.paddingLeft = '0px';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 3 LOCATIONS DIRECTORY */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* International Contact Center */}
            <div>
              <h4 style={{ color: 'var(--color-yellow)', fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>
                International Contact Center
              </h4>
              <a 
                href={ukMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={addressLinkStyle}
                onMouseEnter={handleLinkMouseEnter}
                onMouseLeave={handleLinkMouseLeave}
              >
                <span>📍</span>
                <span>4 Highcliffe Terrace, Greenfold Ln, Wetherby LS22 6RG, UK</span>
              </a>
            </div>

            {/* Operational Centers */}
            <div>
              <h4 style={{ color: 'var(--color-yellow)', fontSize: '0.95rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>
                Operational Centers
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* Location 1: Port Harcourt */}
                <a 
                  href={phMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={addressLinkStyle}
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  <span>📍</span>
                  <span>6 Forces Ave, Port Harcourt, 500101, Rivers</span>
                </a>

                {/* Location 2: Lagos */}
                <a 
                  href={lagosMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={addressLinkStyle}
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  <span>📍</span>
                  <span>2 Tokunbo Alli St, Allen, Ikeja 100271, Lagos</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div style={{
          borderTop: '1px solid #1d2939',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#98a2b3'
        }}>
          © {new Date().getFullYear()} Safeguard Safety and Management Center Limited. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;