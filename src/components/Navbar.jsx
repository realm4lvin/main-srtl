import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/brand/safeguard-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Screen resize & scroll event handlers
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 850;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    const handleScroll = () => {
      // Trigger sticky state after scrolling past TopBar height (40px)
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#2b704a' : '#101828',
    fontWeight: isActive ? '700' : '500',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    padding: isMobile ? '0.6rem 0' : '0'
  });

  return (
    <>
      {/* Invisible spacer div prevents content jumping when Navbar becomes fixed */}
      {isSticky && <div style={{ height: isMobile ? '60px' : '72px' }} />}

      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0.8rem 1rem' : '1rem 2rem',
        backgroundColor: '#ffffff',
        boxShadow: isSticky ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
        position: isSticky ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease'
      }}>
        {/* Brand Logo */}
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img 
            src={logo} 
            alt="Safeguard Safety Logo" 
            style={{ height: isMobile ? '40px' : '50px', objectFit: 'contain' }} 
          />
        </Link>

        {/* Hamburger Toggle Button (Mobile Only) */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
              color: '#101828',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {isOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        )}

        {/* Navigation Links */}
        <div style={{ 
          display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : 'auto',
          gap: isMobile ? '0.8rem' : '2rem', 
          alignItems: isMobile ? 'flex-start' : 'center',
          paddingTop: isMobile ? '1rem' : '0',
          borderTop: isMobile ? '1px solid #eaecf0' : 'none',
          marginTop: isMobile ? '0.8rem' : '0'
        }}>
          <NavLink to="/" onClick={closeMenu} style={linkStyle}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} style={linkStyle}>About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu} style={linkStyle}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu} style={linkStyle}>Contact</NavLink>
          
          <Link 
            to="/get-certified" 
            onClick={closeMenu}
            className="btn-get-certified"
            style={{
              backgroundColor: '#2b704a',
              color: '#ffffff',
              padding: '0.6rem 1.4rem',
              fontWeight: '700',
              borderRadius: '4px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              marginTop: isMobile ? '0.4rem' : '0',
              width: isMobile ? '100%' : 'auto',
              textAlign: 'center',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e5235'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2b704a'}
          >
            Get Certified
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;