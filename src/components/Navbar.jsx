import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/brand/safeguard-logo.webp';

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

  return (
    <>
      {/* Custom styles for links and hover states */}
      <style>{`
        .nav-link-item {
          position: relative;
          text-decoration: none;
          color: #475467;
          font-size: 0.95rem;
          font-weight: 600;
          padding-bottom: 4px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #2b704a;
          transition: width 0.3s ease, background-color 0.25s ease;
        }

        .nav-link-item:hover {
          color: #2b704a;
        }

        .nav-link-item:hover::after {
          width: 100%;
        }

        .nav-link-item.active {
          color: #101828;
        }

        .nav-link-item.active:hover {
          color: #113823;
        }

        .nav-link-item.active::after {
          background-color: #113823;
        }

        .nav-link-item.active:hover::after {
          width: 100%;
        }

        .btn-get-certified {
          background-color: #2b704a;
          color: #ffffff;
          padding: 0.65rem 1.4rem;
          font-weight: 700;
          border-radius: 4px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.85rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          display: inline-block;
          white-space: nowrap;
        }

        .btn-get-certified:hover {
          background-color: #fdb813 !important;
          color: #101828 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(253, 184, 19, 0.35);
        }
      `}</style>

      {/* Invisible spacer div prevents content jumping when Navbar becomes fixed */}
      {isSticky && <div style={{ height: isMobile ? '68px' : '90px' }} />}

      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0.7rem 1rem' : '0.7rem 2rem',
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
        {/* Prominent Horizontally Scaled Logo */}
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Safeguard Safety Logo" 
            style={{ 
              height: isMobile ? '52px' : '78px', 
              width: 'auto',
              objectFit: 'contain',
              transition: 'all 0.2s ease'
            }} 
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
          gap: isMobile ? '1rem' : '2rem', 
          alignItems: isMobile ? 'flex-start' : 'center',
          paddingTop: isMobile ? '1rem' : '0',
          borderTop: isMobile ? '1px solid #eaecf0' : 'none',
          marginTop: isMobile ? '0.8rem' : '0'
        }}>
          <NavLink to="/" onClick={closeMenu} className="nav-link-item">Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className="nav-link-item">About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu} className="nav-link-item">Courses and Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="nav-link-item">Contact</NavLink>
          
          <Link 
            to="/get-certified" 
            onClick={closeMenu}
            className="btn-get-certified"
            style={{
              marginTop: isMobile ? '0.4rem' : '0',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            Get Certified
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;