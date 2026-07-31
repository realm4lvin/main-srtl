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

// Import our new RequestForm component
import RequestFormSection from '../components/RequestFormSection';

const Contact = () => {
  // Client & Partner Logo collection with individual scale settings
  const clientLogos = [
    { logo: nuprcLogo, name: "NUPRC", scale: 'scale(1.15)' },
    { logo: ncdmbLogo, name: "NCDMB", scale: 'scale(1.15)' },
    { logo: nipexLogo, name: "NIPEX", scale: 'scale(1.45)' },
    { logo: itfLogo, name: "ITF", scale: 'scale(1.15)' },
    { logo: nesLogo, name: "NES", scale: 'scale(1.15)' },
    { logo: fpanLogo, name: "FPAN", scale: 'scale(1.25)' },
    { logo: neboshBadge, name: "NEBOSH", scale: 'scale(1.65)' },
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

  return (
    <div style={{ backgroundColor: 'var(--color-white)', paddingBottom: '0' }}>

      {/* 🖼️ CONTACT HERO BANNER */}
      <section style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff', 
        padding: '5.5rem 2rem', 
        textAlign: 'center',
        borderBottom: '4px solid var(--color-yellow)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '2.4rem', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            marginBottom: '1rem',
            color: '#ffffff',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)'
          }}>
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#ffffff', 
            lineHeight: '1.6', 
            margin: '0 auto', 
            maxWidth: '820px',
            fontWeight: '500',
            textShadow: '0 1px 5px rgba(0,0,0,0.6)'
          }}>
            Get in touch with our expert QHSE team for course enquiries, registration assistance, corporate quotes, or support services.
          </p>
        </div>
      </section>
      
      {/* 📩 1. NEW SEARCHABLE FORM WITH MESSAGE BOX */}
      <RequestFormSection hasMessage={true} />

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

{/* 🤝 7. MOVING CLIENT LOGO CAROUSEL LOOP */}
<section style={{ padding: '2.5rem 0', textAlign: 'center', backgroundColor: 'var(--color-light-gray)', overflow: 'hidden' }}>
  <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475467', letterSpacing: '1px', marginBottom: '2rem', textTransform: 'uppercase' }}>
    ACCREDITATIONS, AFFILIATIONS AND ASSOCIATIONS
  </div>
  
  <div className="marquee-container" style={{ padding: '12px 0' }}>
    <div className="marquee-content">
      {clientLogos.map((item, idx) => (
        <div 
          key={`loop1-${idx}`} 
          className="marquee-item" 
          style={{ 
            margin: '0 2.5rem', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', 
            cursor: 'pointer' 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={item.logo} 
              alt={item.name} 
              style={{ 
                maxHeight: '75px', 
                maxWidth: '200px', 
                width: 'auto', 
                objectFit: 'contain', 
                transform: item.scale, 
                transformOrigin: 'center', 
                transition: 'transform 0.3s ease' 
              }} 
            />
          </div>
        </div>
      ))}
    </div>

    <div className="marquee-content" aria-hidden="true">
      {clientLogos.map((item, idx) => (
        <div 
          key={`loop2-${idx}`} 
          className="marquee-item" 
          style={{ 
            margin: '0 2.5rem', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', 
            cursor: 'pointer' 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={item.logo} 
              alt={item.name} 
              style={{ 
                maxHeight: '75px', 
                maxWidth: '200px', 
                width: 'auto', 
                objectFit: 'contain', 
                transform: item.scale, 
                transformOrigin: 'center', 
                transition: 'transform 0.3s ease' 
              }} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Contact;