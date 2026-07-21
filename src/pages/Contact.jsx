import { useState } from 'react';

// Import local brand assets
import neboshBadge from '../assets/brand/nebosh-silver-partner.png';
import ioshBadge from '../assets/brand/iosh-logo.png';
import cqiBadge from '../assets/brand/cqi-irca-logo.png';

// Import client logos for the automated looping carousel
import nuprcLogo from '../assets/clients/nuprc-logo.png';
import ncdmbLogo from '../assets/clients/ncdmb-logo.png';
import nipexLogo from '../assets/clients/nipex-logo.png';
import itfLogo from '../assets/clients/itf-logo.png';
import nesLogo from '../assets/clients/nes-logo.png';
import fpanLogo from '../assets/clients/fpan-logo.png';

const Contact = () => {
  // Client & Partner Logo collection with individual scale settings
  const clientLogos = [
    { logo: nuprcLogo, name: "NUPRC", scale: 'scale(1.15)' },
    { logo: ncdmbLogo, name: "NCDMB", scale: 'scale(1.15)' },
    { logo: nipexLogo, name: "NIPEX", scale: 'scale(1.45)' },
    { logo: itfLogo, name: "ITF", scale: 'scale(1.15)' },
    { logo: nesLogo, name: "NES", scale: 'scale(1.15)' },
    { logo: fpanLogo, name: "FPAN", scale: 'scale(1.25)' },
    { logo: neboshBadge, name: "NEBOSH", scale: 'scale(1.35)' },
    { logo: ioshBadge, name: "IOSH", scale: 'scale(1.2)' },
    { logo: cqiBadge, name: "CQI-IRCA", scale: 'scale(1.85)' }
  ];

  // Reasons to Enrol Data
  const enrolmentReasons = [
    { title: "Improve Safety Culture", desc: "Build a proactive, risk-aware culture across teams and operational sites." },
    { title: "Enhance Career Prospects", desc: "Unlock rapid professional advancement with internationally recognized certifications." },
    { title: "Gain Practical Knowledge", desc: "Acquire real-world, actionable skills directly applicable to industrial safety." },
    { title: "Globally Recognized", desc: "Earn qualifications accredited by NEBOSH, IOSH, and CQI-IRCA worldwide." },
    { title: "Comply with Legal Requirements", desc: "Ensure complete alignment with statutory safety and health regulations." },
    { title: "Increase Employability", desc: "Stand out in high-demand global job markets within energy, construction, and oil & gas." }
  ];

  // Form State Handlers
  const [courseForm, setCourseForm] = useState({
    name: '',
    email: '',
    phone: '',
    choice: '',
    country: '',
    message: ''
  });

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:register@safeguardsafety.net?subject=Request for Course Details&body=Name: ${encodeURIComponent(courseForm.name)}%0AEmail: ${encodeURIComponent(courseForm.email)}%0AMobile/WhatsApp: ${encodeURIComponent(courseForm.phone)}%0ACourse or Service: ${encodeURIComponent(courseForm.choice)}%0ACountry: ${encodeURIComponent(courseForm.country)}%0AMessage/Description: ${encodeURIComponent(courseForm.message)}`;
    window.location.href = mailtoUrl;
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:register@safeguardsafety.net?subject=Request for Proposal or Quote&body=Name: ${encodeURIComponent(quoteForm.name)}%0AEmail: ${encodeURIComponent(quoteForm.email)}%0AMobile/WhatsApp: ${encodeURIComponent(quoteForm.phone)}%0AService of Choice: ${encodeURIComponent(quoteForm.service)}%0ACountry: ${encodeURIComponent(quoteForm.country)}%0AMessage/Description: ${encodeURIComponent(quoteForm.message)}`;
    window.location.href = mailtoUrl;
  };

  // Reusable Card Hover Helpers
  const cardHoverStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
  };

  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(43, 112, 74, 0.12)';
    e.currentTarget.style.borderColor = '#2b704a';
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.02)';
    e.currentTarget.style.borderColor = '#eaecf0';
  };

  const inputStyle = {
    width: '100%',
    padding: '0.65rem 0.8rem',
    borderRadius: '6px',
    border: '1px solid #d0d5dd',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#344054',
    marginBottom: '0.3rem'
  };

  return (
    <div style={{ backgroundColor: 'var(--color-white)', paddingBottom: '0' }}>
      
      {/* 📩 1. REQUEST FOR FULL DETAILS OF ANY COURSE OR SERVICE OF CHOICE */}
      <section style={{ maxWidth: '1200px', margin: '3rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{
          fontSize: '1.6rem',
          color: '#2b704a',
          fontWeight: '800',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          textAlign: 'center'
        }}>
          Request For Full Details Of Any Course Or Service Of Choice
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Form 1: Request For Course Details */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ...cardHoverStyle
            }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Request For Course Details
              </h3>

              <form onSubmit={handleCourseSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Name:</label>
                  <input 
                    type="text" 
                    required 
                    value={courseForm.name} 
                    onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} 
                    style={inputStyle} 
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email:</label>
                  <input 
                    type="email" 
                    required 
                    value={courseForm.email} 
                    onChange={(e) => setCourseForm({ ...courseForm, email: e.target.value })} 
                    style={inputStyle} 
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Mobile / WhatsApp:</label>
                  <input 
                    type="tel" 
                    required 
                    value={courseForm.phone} 
                    onChange={(e) => setCourseForm({ ...courseForm, phone: e.target.value })} 
                    style={inputStyle} 
                    placeholder="+234 / +44 Phone Number"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Course or Service of Choice:</label>
                  <input 
                    type="text" 
                    required 
                    value={courseForm.choice} 
                    onChange={(e) => setCourseForm({ ...courseForm, choice: e.target.value })} 
                    style={inputStyle} 
                    placeholder="e.g. NEBOSH IGC"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Country of Location:</label>
                  <input 
                    type="text" 
                    required 
                    value={courseForm.country} 
                    onChange={(e) => setCourseForm({ ...courseForm, country: e.target.value })} 
                    style={inputStyle} 
                    placeholder="e.g. Nigeria / UK"
                  />
                </div>

                <div>
                  <label style={labelStyle}>YOUR MESSAGE:</label>
                  <textarea 
                    rows={4}
                    value={courseForm.message} 
                    onChange={(e) => setCourseForm({ ...courseForm, message: e.target.value })} 
                    style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }} 
                    placeholder="Add a description or specific questions..."
                  />
                </div>

                <button 
                  type="submit" 
                  style={{
                    backgroundColor: '#2b704a',
                    color: '#ffffff',
                    fontWeight: '800',
                    padding: '0.8rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginTop: '0.5rem',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1e5235';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2b704a';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                  }}
                >
                  Submit
                </button>
              </form>
            </div>

            <div style={{
              backgroundColor: '#f9fafb',
              borderLeft: '4px solid #2b704a',
              padding: '0.8rem 1.2rem',
              borderRadius: '0 6px 6px 0',
              marginTop: '1.5rem',
              fontSize: '0.85rem'
            }}>
              <span style={{ color: '#475467', fontWeight: '600' }}>
                Your request will be sent to:{' '}
              </span>
              <a href="mailto:register@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', textDecoration: 'none' }}>
                register@safeguardsafety.net
              </a>
            </div>
          </div>

          {/* Form 2: Request For Proposal Or Quote */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ...cardHoverStyle
            }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Request For Proposal Or Quote
              </h3>

              <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Name:</label>
                  <input 
                    type="text" 
                    required 
                    value={quoteForm.name} 
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} 
                    style={inputStyle} 
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email:</label>
                  <input 
                    type="email" 
                    required 
                    value={quoteForm.email} 
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })} 
                    style={inputStyle} 
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Mobile / WhatsApp:</label>
                  <input 
                    type="tel" 
                    required 
                    value={quoteForm.phone} 
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })} 
                    style={inputStyle} 
                    placeholder="+234 / +44 Phone Number"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Service of Choice:</label>
                  <input 
                    type="text" 
                    required 
                    value={quoteForm.service} 
                    onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })} 
                    style={inputStyle} 
                    placeholder="e.g. ISO 9001 Audit"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Country of Location:</label>
                  <input 
                    type="text" 
                    required 
                    value={quoteForm.country} 
                    onChange={(e) => setQuoteForm({ ...quoteForm, country: e.target.value })} 
                    style={inputStyle} 
                    placeholder="e.g. Nigeria / UK"
                  />
                </div>

                <div>
                  <label style={labelStyle}>YOUR MESSAGE:</label>
                  <textarea 
                    rows={4}
                    value={quoteForm.message} 
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })} 
                    style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }} 
                    placeholder="Add a description or project specifications..."
                  />
                </div>

                <button 
                  type="submit" 
                  style={{
                    backgroundColor: '#2b704a',
                    color: '#ffffff',
                    fontWeight: '800',
                    padding: '0.8rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginTop: '0.5rem',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1e5235';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2b704a';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                  }}
                >
                  Submit
                </button>
              </form>
            </div>

            <div style={{
              backgroundColor: '#f9fafb',
              borderLeft: '4px solid #2b704a',
              padding: '0.8rem 1.2rem',
              borderRadius: '0 6px 6px 0',
              marginTop: '1.5rem',
              fontSize: '0.85rem'
            }}>
              <span style={{ color: '#475467', fontWeight: '600' }}>
                Your request will be sent to:{' '}
              </span>
              <a href="mailto:register@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', textDecoration: 'none' }}>
                register@safeguardsafety.net
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 🌟 2. REASONS TO ENROL IN OUR COURSES */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{
          fontSize: '1.6rem',
          color: '#2b704a',
          fontWeight: '800',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          textAlign: 'center'
        }}>
          Reasons To Enrol In Our NEBOSH, IOSH And CQI-IRCA Courses
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {enrolmentReasons.map((reason, idx) => (
            <div 
              key={idx} 
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaecf0',
                borderLeft: '4px solid #2b704a',
                borderRadius: '8px',
                padding: '1.8rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                ...cardHoverStyle
              }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: 'var(--color-yellow)', backgroundColor: '#2b704a', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>✓</span>
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', margin: 0 }}>
                  {reason.title}
                </h3>
              </div>
              <p style={{ color: '#475467', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🤝 3. MOVING CLIENT LOGO CAROUSEL LOOP (UNIFORM & BALANCED) */}
      <section style={{ padding: '5rem 0', textAlign: 'center', backgroundColor: 'var(--color-light-gray)', overflow: 'hidden', marginTop: '5rem' }}>
        <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#475467', letterSpacing: '1px', marginBottom: '3rem', textTransform: 'uppercase' }}>
          Trained Teams & Corporate Partners Across Major Industries
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {clientLogos.map((item, idx) => (
              <div key={`loop1-${idx}`} className="marquee-item" style={{ margin: '0 3.5rem' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    style={{ 
                      maxHeight: '95px', 
                      maxWidth: '240px', 
                      width: 'auto', 
                      objectFit: 'contain', 
                      transform: item.scale, 
                      transformOrigin: 'center', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#344054', marginTop: '0.5rem' }}>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {clientLogos.map((item, idx) => (
              <div key={`loop2-${idx}`} className="marquee-item" style={{ margin: '0 3.5rem' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    style={{ 
                      maxHeight: '95px', 
                      maxWidth: '240px', 
                      width: 'auto', 
                      objectFit: 'contain', 
                      transform: item.scale, 
                      transformOrigin: 'center', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#344054', marginTop: '0.5rem' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;