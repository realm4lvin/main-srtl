import { useState } from 'react';

// Online HD Unsplash Image for Hero Banner (Matches style of About page)
const heroBgImg = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80";

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

const GetCertified = () => {
  // Client & Partner Logo collection
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

  // Registration Documents List Items
  const registrationDocs = [
    { 
      label: "Download International Training Calendar", 
      file: "/docs/INTERNATIONAL TRAINING CALENDAR.pdf",
      downloadName: "INTERNATIONAL TRAINING CALENDAR.pdf"
    },
    { 
      label: "Download International Course Registration Form", 
      file: "/docs/INTERNATIONAL COURSE REGISTRATION FORM.docx",
      downloadName: "INTERNATIONAL COURSE REGISTRATION FORM.docx"
    },
    { 
      label: "Download International Course Selection Guide", 
      file: "/docs/INTERNATIONAL COURSE SELECTION GUIDE.pdf",
      downloadName: "INTERNATIONAL COURSE SELECTION GUIDE.pdf"
    },
    { 
      label: "Download International Terms and Conditions", 
      file: "/docs/INTERNATIONAL TERMS AND CONDITIONS.docx",
      downloadName: "INTERNATIONAL TERMS AND CONDITIONS.docx"
    }
  ];

  const submissionDocs = [
    "Proof or Evidence of Payment",
    "Completed Registration Form",
    "Signed Terms and Conditions",
    "Scanned Copy of Valid Photo ID"
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
  const [courseForm, setCourseForm] = useState({ name: '', email: '', phone: '', organisation: '', choice: '', country: '' });
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '', organisation: '', service: '', country: '' });

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:register@safeguardsafety.net?subject=${encodeURIComponent('Individual or Personal Request')}&body=${encodeURIComponent(
      `Name of Contact Person: ${courseForm.name}\n` +
      `Official email: ${courseForm.email}\n` +
      `Mobile/WhatsApp: ${courseForm.phone}\n` +
      `Name of Organisation: ${courseForm.organisation}\n` +
      `Course or Service of Choice: ${courseForm.choice}\n` +
      `Country of location: ${courseForm.country}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:register@safeguardsafety.net?subject=${encodeURIComponent('Company or Corporate Request')}&body=${encodeURIComponent(
      `Name of Contact Person: ${quoteForm.name}\n` +
      `Official email: ${quoteForm.email}\n` +
      `Mobile/WhatsApp: ${quoteForm.phone}\n` +
      `Name of Organisation: ${quoteForm.organisation}\n` +
      `Course or Service of Choice: ${quoteForm.service}\n` +
      `Country of location: ${quoteForm.country}`
    )}`;
    window.location.href = mailtoUrl;
  };

  // Safe Hover Effects (Does NOT touch border colors to avoid stripping top green accent)
  const cardHoverStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(43, 112, 74, 0.12)';
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.02)';
  };

  const renderListItems = (items) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
      {items.map((item, idx) => (
        <li key={idx} style={{ 
          fontSize: '0.88rem', 
          color: '#344054',
          lineHeight: '1.6', 
          marginBottom: '0.7rem',
          display: 'flex',
          alignItems: 'start',
          gap: '0.5rem'
        }}>
          <span style={{ color: '#2b704a', fontWeight: 'bold' }}>▪</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  const renderDownloadItems = (items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', margin: '0 0 1.5rem 0' }}>
      {items.map((item, idx) => {
        const isDocx = item.file.endsWith('.docx');
        return (
          <a
            key={idx}
            href={item.file}
            download={item.downloadName || true}
            style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              padding: '0.85rem 1.1rem',
              backgroundColor: '#ffffff',
              border: '1.5px solid #eaecf0',
              borderLeft: '5px solid #2b704a',
              borderRadius: '8px',
              color: '#101828',
              fontWeight: '800',
              fontSize: '0.88rem',
              textDecoration: 'none',
              boxShadow: '0 3px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.25s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2b704a';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#2b704a';
              e.currentTarget.style.transform = 'translateX(5px)';
              e.currentTarget.style.boxShadow = '0 8px 18px rgba(43, 112, 74, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#101828';
              e.currentTarget.style.borderColor = '#eaecf0';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.04)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span style={{ fontSize: '1.1rem' }}>📥</span>
              <span style={{ letterSpacing: '0.2px' }}>{item.label}</span>
            </div>

            <span style={{
              fontSize: '0.7rem',
              fontWeight: '900',
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              backgroundColor: isDocx ? '#0078d4' : '#d92d20',
              color: '#ffffff',
              letterSpacing: '0.5px'
            }}>
              {isDocx ? 'DOCX' : 'PDF'}
            </span>
          </a>
        );
      })}
    </div>
  );

  const inputStyle = {
    width: '100%',
    padding: '0.65rem 0.8rem',
    borderRadius: '6px',
    border: '1px solid #d0d5dd',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box'
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

{/* 🖼️ 1. HERO BANNER (CLEAN NATURAL IMAGE - NO GREEN TINT) */}
      <section style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.70)), url(${heroBgImg})`,
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
            textShadow: '0 2px 6px rgba(0,0,0,0.6)'
          }}>
            Get Certified & Accredited
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#ffffff', 
            lineHeight: '1.6', 
            margin: '0 auto', 
            maxWidth: '820px',
            fontWeight: '500',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)'
          }}>
            Take the next step in your professional QHSE career with internationally recognized NEBOSH, IOSH, and CQI-IRCA ISO certifications.
          </p>
        </div>
      </section>

      {/* 💳 2. COURSE REGISTRATION PROCESS */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem', borderTop: '1px solid #eaecf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#2b704a',
            fontWeight: '800',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textAlign: 'center'
          }}>
            Course Registration Process
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Registration Documents
              </h3>
              {renderDownloadItems(registrationDocs)}
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                Payment Instruction
              </h3>
              <p style={{
                color: '#344054',
                fontSize: '0.92rem',
                lineHeight: '1.7',
                textAlign: 'justify',
                margin: 0
              }}>
                Payment may be made in convenient instalments, provided that at least 50% of the total fees is paid before the release of training materials and the commencement of the course. However, the candidate must ensure that the full payment is completed before examination closing date, or you will be moved to the next exam date.
              </p>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  Card Payment
                </h3>
                <p style={{ color: '#475467', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 1.5rem 0' }}>
                  International card payments can be made securely online via Stripe using our official payment link processing framework below.
                </p>
              </div>

              <a 
                href="https://book.stripe.com/fZubJ32VQgz13T6c783ZK00" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'block',
                  backgroundColor: '#2b704a',
                  color: '#ffffff',
                  textAlign: 'center',
                  padding: '0.8rem',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  transition: 'all 0.25s ease'
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
                Pay Online Via Stripe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 📄 3. COURSE REGISTRATION CONFIRMATION */}
      <section style={{ backgroundColor: '#f9fafb', padding: '5rem 2rem', borderTop: '1px solid #eaecf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h2 style={{
            fontSize: '1.8rem',
            color: '#2b704a',
            fontWeight: '800',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textAlign: 'center'
          }}>
            Course Registration Confirmation
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  Submit Registration Documents
                </h3>
                {renderListItems(submissionDocs)}
              </div>

              <div style={{
                backgroundColor: '#f9fafb',
                borderLeft: '4px solid #2b704a',
                padding: '1rem 1.2rem',
                borderRadius: '0 6px 6px 0',
                marginTop: '1rem'
              }}>
                <span style={{ fontSize: '0.9rem', color: '#475467', fontWeight: '600' }}>
                  Shall be returned to:{' '}
                </span>
                <a href="mailto:admin@safeguardsafety.net" style={{
                  color: '#2b704a',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}>
                  admin@safeguardsafety.net
                </a>
              </div>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaecf0',
              borderTop: '4px solid #2b704a',
              borderRadius: '8px',
              padding: '2.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  For Registration Enquiries
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#344054', marginBottom: '0.6rem' }}>
                    WhatsApp:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.92rem' }}>
                    <a href="https://wa.me/447878121965" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +44 787 812 1965</a>
                    <a href="https://wa.me/447311254738" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +44 731 125 4738</a>
                    <a href="https://wa.me/2347030162747" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +234 703 016 2747</a>
                    <a href="https://wa.me/2348033097942" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +234 803 309 7942</a>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#f9fafb',
                borderLeft: '4px solid #2b704a',
                padding: '1rem 1.2rem',
                borderRadius: '0 6px 6px 0',
                marginTop: '1rem'
              }}>
                <span style={{ fontSize: '0.9rem', color: '#475467', fontWeight: '600' }}>
                  Or Send Query to:{' '}
                </span>
                <a href="mailto:admin@safeguardsafety.net" style={{
                  color: '#2b704a',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}>
                  admin@safeguardsafety.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 4. OUR 3 STEPS PROCESS (FIXED NUMBERS & LOCKED BORDERS) */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem', borderTop: '1px solid #eaecf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h2 style={{
            fontSize: '1.6rem',
            color: '#2b704a',
            fontWeight: '800',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            textAlign: 'center'
          }}>
            OUR 3 STEPS PROCESS TO UNLOCK YOUR POTENTIAL WITH NEBOSH, IOSH AND CQI-IRCA ISO COURSES
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {[
              { num: "1", title: "ENQUIRE", desc: "Contact us via phone, email or website to enquire about your desired course." },
              { num: "2", title: "REGISTRATION", desc: "Complete registration, submit required documents and make payment." },
              { num: "3", title: "TRAINING & CERTIFICATION", desc: "Attend interactive training and achieve globally recognized certification." }
            ].map((step, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #eaecf0',
                  borderTop: '4px solid #2b704a', /* Permanent top green accent on ALL cards */
                  borderRadius: '8px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxSizing: 'border-box',
                  ...cardHoverStyle
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Clean, Dead-Centered Flex Circle for Numbering */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#2b704a',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                  lineHeight: '1',
                  flexShrink: 0
                }}>
                  {step.num}
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#2b704a', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#475467', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 📩 5. REQUEST FOR FULL DETAILS FORM SECTION */}
      <section style={{ backgroundColor: '#f9fafb', padding: '5rem 2rem', borderTop: '1px solid #eaecf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
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
            
            {/* Form 1: INDIVIDUAL OR PERSONAL REQUEST */}
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
                justify: 'space-between',
                ...cardHoverStyle
              }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  INDIVIDUAL OR PERSONAL REQUEST
                </h3>

                <form onSubmit={handleCourseSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Name of Contact Person:</label>
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
                    <label style={labelStyle}>Official email:</label>
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
                    <label style={labelStyle}>WhatsApp:</label>
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
                    <label style={labelStyle}>Name of Organisation:</label>
                    <input 
                      type="text" 
                      value={courseForm.organisation} 
                      onChange={(e) => setCourseForm({ ...courseForm, organisation: e.target.value })} 
                      style={inputStyle} 
                      placeholder="Organisation / Self-employed"
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
                    <label style={labelStyle}>Country of location:</label>
                    <input 
                      type="text" 
                      required 
                      value={courseForm.country} 
                      onChange={(e) => setCourseForm({ ...courseForm, country: e.target.value })} 
                      style={inputStyle} 
                      placeholder="e.g. Nigeria / UK"
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
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1e5235';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2b704a';
                      e.target.style.transform = 'translateY(0)';
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

            {/* Form 2: COMPANY OR CORPORATE REQUEST */}
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
                justify: 'space-between',
                ...cardHoverStyle
              }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  COMPANY OR CORPORATE REQUEST
                </h3>

                <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Name of Contact Person:</label>
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
                    <label style={labelStyle}>Official email:</label>
                    <input 
                      type="email" 
                      required 
                      value={quoteForm.email} 
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })} 
                      style={inputStyle} 
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>WhatsApp:</label>
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
                    <label style={labelStyle}>Name of Organisation:</label>
                    <input 
                      type="text" 
                      required
                      value={quoteForm.organisation} 
                      onChange={(e) => setQuoteForm({ ...quoteForm, organisation: e.target.value })} 
                      style={inputStyle} 
                      placeholder="Company / Organisation Name"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Course or Service of Choice:</label>
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
                    <label style={labelStyle}>Country of location:</label>
                    <input 
                      type="text" 
                      required 
                      value={quoteForm.country} 
                      onChange={(e) => setQuoteForm({ ...quoteForm, country: e.target.value })} 
                      style={inputStyle} 
                      placeholder="e.g. Nigeria / UK"
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
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1e5235';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#2b704a';
                      e.target.style.transform = 'translateY(0)';
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
        </div>
      </section>

      {/* 🌟 6. REASONS TO ENROL IN OUR COURSES */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem', borderTop: '1px solid #f2f4f7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
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
            gridTemplateColumns: 'repeat(3, 1fr)',
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

        </div>
      </section>

      {/* 🤝 MOVING CLIENT LOGO CAROUSEL LOOP */}
      <section style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--color-light-gray)', overflow: 'hidden' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#475467', letterSpacing: '1px', marginBottom: '2.5rem', textTransform: 'uppercase' }}>
          ACCREDITATIONS, AFFILIATIONS AND ASSOCIATIONS
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {clientLogos.map((item, idx) => (
              <div key={`loop1-${idx}`} className="marquee-item" style={{ margin: '0 2rem' }}>
                <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.name} style={{ maxHeight: '80px', maxWidth: '180px', width: 'auto', objectFit: 'contain', transform: item.scale, transformOrigin: 'center' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {clientLogos.map((item, idx) => (
              <div key={`loop2-${idx}`} className="marquee-item" style={{ margin: '0 2rem' }}>
                <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.name} style={{ maxHeight: '80px', maxWidth: '180px', width: 'auto', objectFit: 'contain', transform: item.scale, transformOrigin: 'center' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default GetCertified;