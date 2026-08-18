import { Link } from 'react-router-dom';

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

const Services = () => {
  // Client & Partner Logo collection (BIGGER & BOOSTED SCALES)
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

  // Course Data Arrays
  const neboshAwards = [
    "NEBOSH Environmental Awareness at Work (EAW)",
    "NEBOSH HSE Managing Risks & Risk Assessment at Work (RAW)",
    "NEBOSH HSE Introduction to Incident Investigation (INV)",
    "NEBOSH Health & Safety at Work (HSA)",
    "NEBOSH Working with Wellbeing (WEL)"
  ];

  const ioshCourses = [
    "IOSH Working Safely",
    "IOSH Managing Safely"
  ];

  const neboshCertificates = [
    "NEBOSH HSE Certificate in Health & Safety Leadership Excellence (HSL)",
    "NEBOSH HSE Certificate in Managing Stress at Work (MSW)",
    "NEBOSH Certificate in Fire Safety (FSC)",
    "NEBOSH Environmental Mgt. Certificate (EMC)",
    "NEBOSH HSE Certificate in Process Safety Mgt. (PSM)",
    "NEBOSH Int'l General Certificate in Occ. Health & Safety (IGC)",
    "NEBOSH National General Certificate in Occ. Health & Safety (GNC)",
    "NEBOSH IIRSM Certificate in Managing Risk (MAR)",
    "NEBOSH Health & Safety Management for Construction (International - CI)",
    "NEBOSH Health & Safety Management for Construction (UK - CN)",
    "NEBOSH HSE Certificate in Manual Handling Risk Assessment (MHR)"
  ];

  const neboshDiplomas = [
    "International Diploma for Occ. Health & Safety Mgt. (DI)",
    "International Diploma in Environmental Mgt. (IDE)",
    "National Diploma for Occ. Health & Safety Mgt. (DN)",
    "National Diploma in Environmental Mgt. (NDE)"
  ];

  const isoCourses = [
    "ISO 14001:2015 EMS Lead Auditor",
    "ISO 9001:2015 QMS Lead Auditor",
    "ISO 45001:2018 OHSMS Lead Auditor",
    "ISO 22000:2018 FSMS Lead Auditor",
    "ISO 27001:2022 ISMS Lead Auditor",
    "ISO 50001:2018 EnMS Lead Auditor"
  ];

  // QHSE Services Data Arrays
  const isoAudits = [
    "ISO 9001: Audit & Certification",
    "ISO 14001: Audit & Certification",
    "ISO 45001: Audit & Certification",
    "ISO 22000: Audit & Certification",
    "ISO 27001: Audit & Certification",
    "ISO 50001: Audit & Certification"
  ];

  const healthSafetyStudies = [
    "HAZOP Study",
    "HAZID Study",
    "Gas Leak Survey",
    "Safety Case Study",
    "Fire and Explosion Study",
    "Risk Assessment Study",
    "Accident Investigation Study",
    "Safety Facility Management Services",
    "Pre-Qualification & Tender Documentation"
  ];

  const environmentalStudies = [
    "Environmental Audit Report",
    "Environmental Evaluation Report",
    "Environmental Impact Assessment",
    "Oil Spill Contingency Plan"
  ];

  // UPDATED PATHS TO MATCH /public/docs/
  const registrationDocs = [
    { 
      label: "Download International Training Calendar", 
      file: "/docs/international-training-calendar.pdf",
      downloadName: "INTERNATIONAL TRAINING CALENDAR.pdf"
    },
    { 
      label: "Download International Course Registration Form", 
      file: "/docs/international-course-registration-form.docx",
      downloadName: "INTERNATIONAL COURSE REGISTRATION FORM.docx"
    },
    { 
      label: "Download International Course Selection Guide", 
      file: "/docs/international-course-selection-guide.pdf",
      downloadName: "INTERNATIONAL COURSE SELECTION GUIDE.pdf"
    },
    { 
      label: "Download International Terms and Conditions", 
      file: "/docs/international-terms-and-conditions.docx",
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

  // Helper rendering functions
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
  
  const renderRequestButton = () => (
    <Link 
      to="/contact" 
      style={{
        display: 'block',
        backgroundColor: '#2b704a',
        color: '#ffffff',
        textAlign: 'center',
        padding: '0.7rem',
        fontWeight: '700',
        fontSize: '0.82rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
        letterSpacing: '0.5px',
        borderRadius: '4px',
        transition: 'all 0.25s ease',
        marginTop: 'auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#1e5235';
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#2b704a';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      }}
    >
      Request For Course Details
    </Link>
  );

  const renderQuoteButton = () => (
    <Link 
      to="/contact" 
      style={{
        display: 'block',
        backgroundColor: '#2b704a',
        color: '#ffffff',
        textAlign: 'center',
        padding: '0.7rem',
        fontWeight: '700',
        fontSize: '0.82rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
        letterSpacing: '0.5px',
        borderRadius: '4px',
        transition: 'all 0.25s ease',
        marginTop: 'auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#1e5235';
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#2b704a';
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      }}
    >
      Request For Proposal Or Quote
    </Link>
  );

  return (
    <div style={{ backgroundColor: 'var(--color-white)', paddingBottom: '0' }}>

      {/* 🖼️ HERO BANNER SECTION */}
      <section style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.60)), url("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80")`,
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
            Our Courses & QHSE Services
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
            Explore our comprehensive suite of accredited international training, specialized safety competency programs, ISO auditing, and environmental studies.
          </p>
        </div>
      </section>
      
      {/* 🌍 1. OUR INTERNATIONAL COURSES SECTION */}
      <section style={{ backgroundColor: '#ffffff', padding: '3rem 2rem 4rem 2rem' }}>
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
            Our International Courses
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div 
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #eaecf0',
                  borderTop: '4px solid #2b704a',
                  borderRadius: '8px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  ...cardHoverStyle
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  NEBOSH Award Courses
                </h3>
                {renderListItems(neboshAwards)}
                {renderRequestButton()}
              </div>

              <div 
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #eaecf0',
                  borderTop: '4px solid #2b704a',
                  borderRadius: '8px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  ...cardHoverStyle
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  IOSH Courses
                </h3>
                {renderListItems(ioshCourses)}
                {renderRequestButton()}
              </div>
            </div>

            <div 
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eaecf0',
                borderTop: '4px solid #2b704a',
                borderRadius: '8px',
                padding: '2rem',
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
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  NEBOSH Certificate Courses
                </h3>
                {renderListItems(neboshCertificates)}
              </div>
              {renderRequestButton()}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div 
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #eaecf0',
                  borderTop: '4px solid #2b704a',
                  borderRadius: '8px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  ...cardHoverStyle
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  NEBOSH Diploma Courses
                </h3>
                {renderListItems(neboshDiplomas)}
                {renderRequestButton()}
              </div>

              <div 
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #eaecf0',
                  borderTop: '4px solid #2b704a',
                  borderRadius: '8px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  ...cardHoverStyle
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                  CQI - IRCA ISO Courses
                </h3>
                {renderListItems(isoCourses)}
                {renderRequestButton()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ 2. OUR QHSE SERVICES SECTION */}
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
            Our QHSE Services
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {[
              { title: "ISO Audit and Certifications", list: isoAudits },
              { title: "Health & Safety Studies", list: healthSafetyStudies },
              { title: "Environmental Studies", list: environmentalStudies }
            ].map((srv, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #eaecf0',
                  borderTop: '4px solid #2b704a',
                  borderRadius: '8px',
                  padding: '2rem',
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
                  <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    {srv.title}
                  </h3>
                  {renderListItems(srv.list)}
                </div>
                {renderQuoteButton()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💳 3. COURSE REGISTRATION PROCESS */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem', borderTop: '1px solid #f2f4f7' }}>
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
            gridTemplateColumns: '1fr 1fr 1fr',
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

      {/* COURSE REGISTRATION CONFIRMATION */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem', borderTop: '1px solid #eaecf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
            Course Registration Confirmation
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'stretch' }}>
            
            {/* Card 1: Submit Registration Documents */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Submit Registration Documents</h3>
                {renderListItems(submissionDocs)}
              </div>

              <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '1rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#475467', fontWeight: '600' }}>Shall be returned to:{' '}</span>
                <a href="mailto:admin@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>admin@safeguardsafety.net</a>
              </div>
            </div>

            {/* Card 2: For Registration Enquiries */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>For Registration Enquiries</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#344054', marginBottom: '0.6rem' }}>
                    WhatsApp:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.92rem' }}>
                    <a href="https://wa.me/447878121965" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +44 787 812 1965</a>
                    <a href="https://wa.me/2347030162747" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +234 703 016 2747</a>
                    <a href="https://wa.me/447311254738" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +44 731 125 4738</a>
                    <a href="https://wa.me/2348033097942" target="_blank" rel="noreferrer" style={{ color: '#2b704a', textDecoration: 'none', fontWeight: '600' }}>📞 +234 803 309 7942</a>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '1rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#475467', fontWeight: '600' }}>Or Send Query to:{' '}</span>
                <a href="mailto:admin@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>admin@safeguardsafety.net</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 5. OUR 3 STEPS PROCESS */}
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
            OUR 3 STEPS PROCESS TO UNLOCK YOUR POTENTIAL WITH NEBOSH, IOSH AND CQI-IRCA ISO COURSES
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
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
                  borderTop: '4px solid #2b704a',
                  borderRadius: '8px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  ...cardHoverStyle
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justify: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#2b704a',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '1.1rem'
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

      {/* 📩 6. REQUEST FOR FULL DETAILS FORM SECTION */}
      <RequestFormSection hasMessage={false} />

      {/* REASONS TO ENROL IN OUR COURSES */}
      <section style={{ backgroundColor: '#f9fafb', padding: '5rem 2rem', borderTop: '1px solid #eaecf0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
            Reasons To Enrol In Our NEBOSH, IOSH And CQI-IRCA Courses
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
            {enrolmentReasons.map((reason, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderLeft: '4px solid #2b704a', borderRadius: '8px', padding: '1.8rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', gap: '0.6rem', ...cardHoverStyle }} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--color-yellow)', backgroundColor: '#2b704a', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>✓</span>
                  <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', margin: 0 }}>{reason.title}</h3>
                </div>
                <p style={{ color: '#475467', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{reason.desc}</p>
              </div>
            ))}
          </div>
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
                  justify: 'center',
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
                  justify: 'center',
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

export default Services;