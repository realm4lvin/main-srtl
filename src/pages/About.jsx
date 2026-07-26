import { useState } from 'react';

// Import local brand assets
import whoWeAreImg from '../assets/brand/who-we-are.webp';
import companyLogo from "../assets/brand/safeguard-logo.webp";
import neboshBadge from '../assets/brand/nebosh-silver-partner.png';
import ioshBadge from '../assets/brand/iosh-logo.png';
import cqiBadge from '../assets/brand/cqi-irca-logo.png';

// Import primary partner badges for bottom marquee
import nuprcLogo from '../assets/clients/nuprc-logo.png';
import ncdmbLogo from '../assets/clients/ncdmb-logo.png';
import nipexLogo from '../assets/clients/nipex-logo.png';
import itfLogo from '../assets/clients/itf-logo.png';
import nesLogo from '../assets/clients/nes-logo.png';
import fpanLogo from '../assets/clients/fpan-logo.png';

// =========================================================================
// 🚀 BULLETPROOF ASSET AUTO-LOADER (Vite Glob)
// Automatically loads all PNG, SVG, JPG, WEBP files in src/assets/clients/
// =========================================================================
const logoModules = import.meta.glob('../assets/clients/*.{png,svg,jpg,jpeg,webp}', { eager: true, import: 'default' });

// Helper function: Finds an imported image matching any of the search keys
const getLogo = (...searchKeys) => {
  for (const path in logoModules) {
    const filename = path.split('/').pop().toLowerCase();
    for (const key of searchKeys) {
      if (filename.includes(key.toLowerCase())) {
        return logoModules[path];
      }
    }
  }
  return null; // Safe fallback if file isn't found
};

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visionBuildingImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80";
  const missionGlobeImg = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80";

  // Partner Logo collection for bottom carousel
  const clientLogos = [
    { logo: nuprcLogo, name: "NUPRC", scale: 'scale(1.15)' },
    { logo: ncdmbLogo, name: "NCDMB", scale: 'scale(1.15)' },
    { logo: nipexLogo, name: "NIPEX", scale: 'scale(1.45)' },
    { logo: itfLogo, name: "ITF", scale: 'scale(1.15)' },
    { logo: nesLogo, name: "NES", scale: 'scale(1.15)' },
    { logo: fpanLogo, name: "FPAN", scale: 'scale(1.25)' },
    { logo: neboshBadge, name: "NEBOSH", scale: 'scale(1.65)' }, // 👈 Increased scale here
    { logo: ioshBadge, name: "IOSH", scale: 'scale(1.2)' },
    { logo: cqiBadge, name: "CQI-IRCA", scale: 'scale(1.85)' }
  ];

// 🏢 Verified Working Logo Grid Clients (Mantrac and MTN removed)
  const corporateClients = [
    { name: "AIICO Insurance", logo: getLogo("aiico-insurance") },
    { name: "Air France", logo: getLogo("air-france", "air--france"), scale: "scale(1.45)" }, // 🔍 Scaled up
    { name: "Alcon", logo: getLogo("alcon") },
    { name: "APM Terminals", logo: getLogo("apm-terminals"), scale: "scale(1.45)" }, // 🔍 Scaled up
    { name: "Arkleen Oil", logo: getLogo("arkleen-oil"), scale: "scale(1.35)" }, // 🔍 Scaled up
    { name: "Aveon Offshore", logo: getLogo("aveon-offshore") },
    { name: "Axxela", logo: getLogo("axxela") },
    { name: "BOC Gases", logo: getLogo("boc-gases") },
    { name: "Ciscon", logo: getLogo("ciscon") },
    { name: "Conoil", logo: getLogo("conoil") },
    { name: "Dangote Group", logo: getLogo("dangote"), scale: "scale(1.35)" }, // 🔍 Scaled up
    { name: "Delta Environmental", logo: getLogo("delta-environmental") },
    { name: "DHL", logo: getLogo("dhl") },
    { name: "Drillog", logo: getLogo("drillog") },
    { name: "Drillpet", logo: getLogo("drillpet") },
    { name: "Dufil Prima Foods", logo: getLogo("dufil") },
    { name: "FIPL", logo: getLogo("fipl") },
    { name: "Halliburton", logo: getLogo("halliburton") },
    { name: "Intels", logo: getLogo("intels") },
    { name: "International Breweries", logo: getLogo("international-breweries", "international breweries") },
    { name: "Mainstream Energy", logo: getLogo("mainstream-energy") },
    { name: "NASCON", logo: getLogo("nascon") },
    { name: "Oando Energy", logo: getLogo("oando-energy") },
    { name: "Okmas", logo: getLogo("okmas") },
    { name: "Philips Project Centre (PPC)", logo: getLogo("philips-project") },
    { name: "Prodeco", logo: getLogo("prodeco") },
    { name: "UPS", logo: getLogo("ups") },
    { name: "Weafri", logo: getLogo("weafri") },
    { name: "Weltec", logo: getLogo("weltek") }
  ];

  const coreValues = [
    { title: "Integrity", desc: "We conduct our business with honesty, transparency, accountability, and the highest ethical standards." },
    { title: "Positive Attitude", desc: "We cultivate a culture of teamwork, respect, innovation, and a solution-oriented mindset." },
    { title: "Knowledge", desc: "We continuously develop our people and leverage industry best practices, technology, and expertise to deliver world-class solutions." },
    { title: "Hard Work", desc: "We are dedicated, disciplined, and committed to excellence in every assignment, consistently exceeding expectations." }
  ];

  const neboshAwards = [
    "NEBOSH Environmental Awareness at Work (EAW)",
    "NEBOSH HSE Managing Risks & Risk Assessment at Work (RAW)",
    "NEBOSH HSE Introduction to Incident Investigation (INV)",
    "NEBOSH Health & Safety at Work (HSA)",
    "NEBOSH Working with Wellbeing (WEL)"
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

  const ioshCourses = ["IOSH Working Safely", "IOSH Managing Safely"];

  const isoCourses = [
    "ISO 14001:2015 EMS Lead Auditor",
    "ISO 9001:2015 QMS Lead Auditor",
    "ISO 45001:2018 OHSMS Lead Auditor",
    "ISO 22000:2018 FSMS Lead Auditor",
    "ISO 27001:2022 ISMS Lead Auditor",
    "ISO 50001:2018 EnMS Lead Auditor"
  ];

  const fireCourses = [
    "Basic Fire Fighting",
    "Practical Fire Fighting",
    "Fire Prevention, Protection & Practical Fire Fighting",
    "Fire Warden, Fire Watch & Emergency Team Member",
    "Advance Fire Fighting & Fire Emergency Response"
  ];

  const firstAidCourses = [
    "First Aid at Work",
    "Basic First Aid & CPR",
    "Practical First Aid & CPR",
    "Designated First Aider & Emergency Response",
    "First Aid, CPR & AED",
    "Advanced First Aid & Emergency Response",
    "Basic Life Support (BLS)",
    "Advanced Cardiac Life Support (ACLS)"
  ];

  const hseTechnicalCourses = [
    "Gas Testing",
    "Gas Testing & B. A. Wearer",
    "Confined Space Entry",
    "Confined Space & Gas Testing",
    "Confined Space, Gas Testing & B. A. Wearer",
    "Confined Space, B.A. Wearer & Emergency Evacuation",
    "Crane, Sling and Rigging Safety",
    "Rigging Safety & Rigging Inspectors Course",
    "Rig Floor Safety Course",
    "Lock Out & Tag Out Procedures",
    "Forklift Safety Training",
    "Lift Truck, Empty Container Handler & Reach Stacker Safety",
    "Hydrogen Sulphide Safety"
  ];

  const hseCompetencyCol1 = [
    "Professional General Certificate in HSE",
    "Professional Advanced Certificate in HSE",
    "Behaviour Based Safety (BBS)",
    "Defensive Driving Techniques",
    "Journey Management",
    "Manual Handling and Safe Lifting",
    "Safe Handling of Chemicals (SHOC)",
    "Control of Substances Hazardous to Health (COSHH)",
    "Incident/ Accident Investigation",
    "Permit to Work System",
    "Job Safety (Hazard) Analysis"
  ];

  const hseCompetencyCol2 = [
    "Bow-Tie & Fault-Tree Program",
    "Environmental Health and Waste Management",
    "Environmental Risk Control and Management",
    "Food Handling Safety and Hygiene",
    "Workplace Hazard Management",
    "Workplace Ergonomics",
    "Crime Prevention Techniques",
    "Security Awareness & Crime Control",
    "Basic Electrical Safety",
    "Working at Height"
  ];

  const isoAuditCertifications = [
    "ISO 9001: Audit & Certification",
    "ISO 14001: Audit & Certification",
    "ISO 45001: Audit & Certification",
    "ISO 22000: Audit & Certification",
    "ISO 27001: Audit & Certification",
    "ISO 50001: Audit & Certification"
  ];

  const environmentalStudies = [
    "Environmental Audit Report",
    "Environmental Evaluation Report",
    "Environmental Impact Assessment",
    "Oil Spill Contingency Plan"
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

  const equipmentSupplies = [
    "HSE Equipment Supply & Services",
    "Environmental Equipment Supply & Services",
    "Fire Equipment Supply & Services",
    "Security Equipment Supply & Services"
  ];

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

  const enrolmentReasons = [
    { title: "Improve Safety Culture", desc: "Build a proactive, risk-aware culture across teams and operational sites." },
    { title: "Enhance Career Prospects", desc: "Unlock rapid professional advancement with internationally recognized certifications." },
    { title: "Gain Practical Knowledge", desc: "Acquire real-world, actionable skills directly applicable to industrial safety." },
    { title: "Globally Recognized", desc: "Earn qualifications accredited by NEBOSH, IOSH, and CQI-IRCA worldwide." },
    { title: "Comply with Legal Requirements", desc: "Ensure complete alignment with statutory safety and health regulations." },
    { title: "Increase Employability", desc: "Stand out in high-demand global job markets within energy, construction, and oil & gas." }
  ];

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

  const renderNumberedList = (items, startNum = 1) => (
    <ol start={startNum} style={{ paddingLeft: '1.2rem', margin: '0 0 1.5rem 0' }}>
      {items.map((item, idx) => (
        <li key={idx} style={{ fontSize: '0.88rem', color: '#344054', lineHeight: '1.6', marginBottom: '0.5rem', fontWeight: '500' }}>
          {item}
        </li>
      ))}
    </ol>
  );

  const renderBulletList = (items) => (
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
          download={item.downloadName || true} /* 👈 Forces the exact downloaded file name */
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
      
      {/* 🏢 1. BACKGROUND INFORMATION */}
      <section style={{ maxWidth: '1200px', margin: '3rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          BACKGROUND INFORMATION
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', marginBottom: '2rem' }}></div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          <div style={{ flex: '1 1 520px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#344054', lineHeight: '1.8', fontSize: '1.02rem', textAlign: 'justify' }}>
              <p style={{ margin: 0 }}>
                Safeguard Safety and Management Center Limited is a leading provider of internationally recognized Quality, Health, Safety, and Environment (QHSE) training, studies, and workforce solutions. As an accredited provider of training leading to qualifications from the United Kingdom's National Examination Board in Occupational Safety and Health (NEBOSH), the Institution of Occupational Safety and Health (IOSH), and the Chartered Quality Institute–International Register of Certificated Auditors (CQI-IRCA), we are committed to developing competent professionals and helping organizations achieve world-class safety and operational excellence.
              </p>
              
              <p style={{ margin: 0 }}>
                As one of the world's leading and largest NEBOSH Learning Partners, we offer over 20 internationally accredited NEBOSH qualifications through innovative learning solutions, including state-of-the-art virtual classrooms that enable professionals and organizations across the globe to access high-quality training anytime and anywhere. Our digital learning platform is designed to deliver an engaging, flexible, and effective learning experience that meets internationally recognized standards.
              </p>

              {isExpanded && (
                <>
                  <p style={{ margin: 0 }}>
                    Since 1999, Safeguard has served as a trusted international training partner and facilitator, delivering globally recognized QHSE training, studies, and capacity-building services. Our team of highly experienced indigenous and international instructors combines extensive industry experience with academic excellence, enabling us to bridge the gap between theory and practical application.
                  </p>
                  
                  <p style={{ margin: 0 }}>
                    Supported by modern multimedia training laboratories and advanced virtual learning technologies, we deliver training programs that consistently meet international standards of quality and performance.
                  </p>
                  
                  <p style={{ margin: 0 }}>
                    Beyond training, Safeguard offers comprehensive QHSE support services, including QHSE studies, facility management, manpower solutions and audits, and specialized QHSE resource support.
                  </p>
                  
                  <p style={{ margin: 0 }}>
                    Through strategic collaboration with national and international organizations, regulatory bodies, professional institutions, and industry stakeholders, Safeguard remains committed to delivering innovative, practical, and sustainable solutions that create safer workplaces.
                  </p>
                </>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: '0.8rem',
                  backgroundColor: 'transparent',
                  color: '#2b704a',
                  border: '2px solid #2b704a',
                  padding: '0.5rem 1.3rem',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2b704a';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2b704a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{isExpanded ? 'Read Less ▲' : 'Read More ▼'}</span>
              </button>
            </div>
          </div>

          <div style={{ flex: '1 1 400px', width: '100%' }}>
            <div style={{ width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0,0,0,0.06)', border: '1px solid #eaecf0' }}>
              <img 
                src={whoWeAreImg} 
                alt="Safeguard Facilities Hub" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  cursor: 'pointer'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.00)'}
                onError={(e) => { e.target.src = companyLogo; e.target.style.objectFit = 'contain'; e.target.style.padding = '2rem'; }} 
              />
            </div>
          </div>
        </div>
      </section>

{/* 🤝 2. ACCREDITATION PARTNER BADGES ROW */}
      <section style={{
        backgroundColor: 'var(--color-white)',
        padding: '4.5rem 2rem',
        borderBottom: '1px solid #eaecf0',
        marginTop: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem',
          alignItems: 'stretch'
        }}>
          
          {/* 1. NEBOSH Badge */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justify: 'space-between', 
              height: '210px',
              transition: 'transform 0.3s ease', 
              cursor: 'pointer' 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img 
                src={neboshBadge} 
                alt="NEBOSH Logo" 
                loading="lazy" 
                style={{ 
                  maxHeight: '130px', 
                  maxWidth: '100%', 
                  width: 'auto', 
                  objectFit: 'contain',
                  transform: 'scale(1.35)',
                  transformOrigin: 'center'
                }} 
              />
            </div>
            <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--color-dark)', letterSpacing: '0.5px', textAlign: 'center' }}>
              NEBOSH TRAINING CENTER
            </span>
          </div>

          {/* 2. IOSH Badge */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justify: 'space-between', 
              height: '210px',
              transition: 'transform 0.3s ease', 
              cursor: 'pointer' 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img 
                src={ioshBadge} 
                alt="IOSH Logo" 
                loading="lazy" 
                style={{ 
                  maxHeight: '130px', 
                  maxWidth: '100%', 
                  width: 'auto', 
                  objectFit: 'contain'
                }} 
              />
            </div>
            <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--color-dark)', letterSpacing: '0.5px', textAlign: 'center' }}>
              IOSH TRAINING CENTER
            </span>
          </div>

          {/* 3. CQI-IRCA Badge (SLIGHTLY BOOSTED TO MATCH WEIGHT) */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justify: 'space-between', 
              height: '210px',
              transition: 'transform 0.3s ease', 
              cursor: 'pointer' 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img 
                src={cqiBadge} 
                alt="CQI-IRCA Logo" 
                loading="lazy" 
                style={{ 
                  maxHeight: '130px', 
                  maxWidth: '100%', 
                  width: 'auto', 
                  objectFit: 'contain',
                  transform: 'scale(1.60)', /* 👈 Boosted slightly from 1.45 to 1.60 */
                  transformOrigin: 'center'
                }} 
              />
            </div>
            <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--color-dark)', letterSpacing: '0.5px', textAlign: 'center' }}>
              CQI-IRCA ISO TRAINING CENTER
            </span>
          </div>

        </div>
      </section>

      {/* 🎯 3. CORPORATE VISION & MISSION CARDS */}
      <section style={{ maxWidth: '1150px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Corporate Vision Card */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              border: '1px solid #eaecf0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'stretch',
              ...cardHoverStyle
            }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div style={{ minHeight: '280px', width: '100%', overflow: 'hidden' }}>
              <img 
                src={visionBuildingImg} 
                alt="Corporate Vision - Modern Facilities" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.00)'}
              />
            </div>

            <div style={{ padding: '2.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#1b5e32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1b5e32', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                CORPORATE VISION
              </h3>

              <p style={{ color: '#344054', lineHeight: '1.7', fontSize: '0.94rem', margin: 0 }}>
                To be a globally recognized, world-class provider of Quality, Health, Safety and Environment (QHSE) solutions by 2030, renowned for innovation, excellence, and outstanding performance.
              </p>

              <p style={{ color: '#475467', lineHeight: '1.7', fontSize: '0.92rem', margin: 0 }}>
                We aspire to remain at the forefront of emerging global quality, health, safety, environmental challenges by delivering forward-thinking solutions that enable our clients to achieve operational excellence, regulatory compliance, sustainable growth, and a safer workplace.
              </p>
            </div>
          </div>

          {/* Corporate Mission Card */}
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              border: '1px solid #eaecf0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'stretch',
              ...cardHoverStyle
            }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div style={{ padding: '2.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#1b5e32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1b5e32', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                CORPORATE MISSION
              </h3>

              <p style={{ color: '#344054', lineHeight: '1.7', fontSize: '0.94rem', margin: 0 }}>
                To help organizations effectively manage risk, enhance productivity, and strengthen their reputation by delivering high-quality solutions that meet internationally recognized standards of performance.
              </p>

              <p style={{ color: '#475467', lineHeight: '1.7', fontSize: '0.92rem', margin: 0 }}>
                We are committed to achieving zero customer defection by consistently exceeding customer expectations through innovation, excellence, and exceptional service delivery.
              </p>

              <p style={{ color: '#475467', lineHeight: '1.7', fontSize: '0.92rem', margin: 0 }}>
                We strive to build and sustain a knowledgeable, hardworking, motivated, satisfied, and highly ethical workforce that embraces teamwork, professionalism, and a positive attitude.
              </p>
            </div>

            <div style={{ minHeight: '320px', width: '100%', overflow: 'hidden' }}>
              <img 
                src={missionGlobeImg} 
                alt="Corporate Mission - Sustainable Environment" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.00)'}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 💎 4. CORPORATE CORE VALUES */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CORPORATE CORE VALUES</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 1.5rem auto' }}></div>
          <p style={{ color: '#344054', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '900px', margin: '0 auto 2rem auto', textAlign: 'center' }}>At the heart of our organization is an unwavering commitment to excellence, integrity, and customer satisfaction.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          {coreValues.map((val, idx) => (
            <div 
              key={idx} 
              style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #eaecf0', 
                borderTop: '4px solid #2b704a', 
                borderRadius: '8px', 
                padding: '2rem 1.5rem', 
                textAlign: 'center', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                ...cardHoverStyle
              }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2b704a', marginBottom: '0.8rem', textTransform: 'uppercase' }}>{val.title}</div>
              <p style={{ fontSize: '0.9rem', color: '#475467', lineHeight: '1.6', margin: 0 }}>{val.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#f9fafb', borderLeft: '5px solid #2b704a', padding: '2.5rem', borderRadius: '0 8px 8px 0', color: '#344054', lineHeight: '1.8', fontSize: '1.02rem', textAlign: 'justify' }}>
          <p style={{ marginBottom: '1.2rem', fontWeight: '500' }}>These four pillars form the foundation upon which our organization continues to grow and excel. We are committed to building long-term relationships with our clients by consistently delivering exceptional value.</p>
          <p style={{ margin: 0 }}>Customer feedback is central to our continual improvement process. If you are satisfied with our products and services, we encourage you to recommend us to others. If, however, we fall short of your expectations, we welcome your feedback and will take prompt corrective action to ensure your satisfaction.</p>
        </div>
      </section>

      {/* 🌍 5. INTERNATIONAL COURSES */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          INTERNATIONAL COURSES
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 2.5rem auto' }}></div>

        <div 
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #eaecf0',
            borderTop: '4px solid #2b704a',
            borderRadius: '8px',
            padding: '3rem 2.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            ...cardHoverStyle
          }}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <div>
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>NEBOSH AWARD COURSES</h3>
            {renderNumberedList(neboshAwards)}

            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase' }}>NEBOSH DIPLOMA COURSES</h3>
            {renderNumberedList(neboshDiplomas)}

            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase' }}>IOSH COURSES</h3>
            {renderNumberedList(ioshCourses)}
          </div>

          <div>
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>NEBOSH CERTIFICATE COURSES</h3>
            {renderNumberedList(neboshCertificates)}

            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase' }}>CQI - IRCA ISO LEAD AUDITOR COURSES</h3>
            {renderNumberedList(isoCourses)}
          </div>
        </div>
      </section>

      {/* 🧯 6. QHSE COURSES */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          QHSE COURSES
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 2.5rem auto' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <div 
            style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', ...cardHoverStyle }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>FIRE COURSES</h3>
            {renderNumberedList(fireCourses)}

            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase' }}>FIRST AID COURSES</h3>
            {renderNumberedList(firstAidCourses)}
          </div>

          <div 
            style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', ...cardHoverStyle }}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>HSE TECHNICAL COURSES</h3>
            {renderNumberedList(hseTechnicalCourses)}
          </div>
        </div>

        <div 
          style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', ...cardHoverStyle }}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>HSE COMPETENCY COURSES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>{renderNumberedList(hseCompetencyCol1, 1)}</div>
            <div>{renderNumberedList(hseCompetencyCol2, 12)}</div>
          </div>
        </div>
      </section>

      {/* 🛠️ 7. QHSE SUPPORT SERVICES */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          QHSE SUPPORT SERVICES
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 2.5rem auto' }}></div>

        <div 
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #eaecf0',
            borderTop: '4px solid #2b704a',
            borderRadius: '8px',
            padding: '3rem 2.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            ...cardHoverStyle
          }}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <div>
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>ISO COMPANY AUDIT AND CERTIFICATIONS</h3>
            {renderNumberedList(isoAuditCertifications)}

            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase' }}>ENVIRONMENTAL STUDIES</h3>
            {renderNumberedList(environmentalStudies)}
          </div>

          <div>
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>HEALTH & SAFETY STUDIES</h3>
            {renderNumberedList(healthSafetyStudies)}

            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', borderBottom: '2px solid #2b704a', paddingBottom: '0.4rem', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase' }}>EQUIPMENT SUPPLIES & SERVICES</h3>
            {renderNumberedList(equipmentSupplies)}
          </div>
        </div>
      </section>

      {/* 💳 8. COURSE REGISTRATION PROCESS */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          Course Registration Process
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Registration Documents</h3>
            {renderDownloadItems(registrationDocs)}
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Payment Instruction</h3>
            <p style={{ color: '#344054', fontSize: '0.92rem', lineHeight: '1.7', textAlign: 'justify', margin: 0 }}>
              Payment may be made in convenient instalments, provided that at least 50% of the total fees is paid before the release of training materials and the commencement of the course. However, the candidate must ensure that the full payment is completed before examination closing date, or you will be moved to the next exam date.
            </p>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Card Payment</h3>
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
      </section>

      {/* 📄 9. COURSE REGISTRATION CONFIRMATION */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          Course Registration Confirmation
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'stretch' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>Submit Registration Documents</h3>
              {renderBulletList(submissionDocs)}
            </div>

            <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '1rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#475467', fontWeight: '600' }}>Shall be returned to:{' '}</span>
              <a href="mailto:admin@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>admin@safeguardsafety.net</a>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>For Registration Enquiries</h3>
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

            <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '1rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#475467', fontWeight: '600' }}>Or Send Query to:{' '}</span>
              <a href="mailto:admin@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>admin@safeguardsafety.net</a>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 10. OUR 3 STEPS PROCESS */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          OUR 3 STEPS PROCESS TO UNLOCK YOUR POTENTIAL WITH NEBOSH, IOSH AND CQI-IRCA ISO COURSES
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
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
                justifyContent: 'center',
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
      </section>

{/* 🏢 11. CORPORATE CLIENTS SECTION (MOVING MARQUEE ONLY) */}
      <section style={{ padding: '5rem 0 2rem 0', backgroundColor: '#ffffff', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            SOME ORGANIZATIONS THAT HAVE USED OUR SERVICES
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3rem auto' }}></div>
        </div>

        {/* Moving Logos Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {corporateClients.map((client, idx) => (
              <div 
                key={`corp1-${idx}`} 
                className="marquee-item" 
                style={{ 
                  margin: '0 2.5rem', 
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      title={client.name}
                      style={{ maxHeight: '65px', maxWidth: '170px', width: 'auto', objectFit: 'contain', transform: client.scale || 'none', transformOrigin: 'center', transition: 'transform 0.3s ease' }} 
                    />
                  ) : (
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#344054' }}>
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="marquee-content" aria-hidden="true">
            {corporateClients.map((client, idx) => (
              <div 
                key={`corp2-${idx}`} 
                className="marquee-item" 
                style={{ 
                  margin: '0 2.5rem', 
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      title={client.name}
                      style={{ maxHeight: '65px', maxWidth: '170px', width: 'auto', objectFit: 'contain' }} 
                    />
                  ) : (
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#344054' }}>
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📩 12. REQUEST FOR FULL DETAILS FORM */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          Request For Full Details Of Any Course Or Service Of Choice
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'stretch' }}>
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
              <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>INDIVIDUAL OR PERSONAL REQUEST</h3>

              <form onSubmit={handleCourseSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div><label style={labelStyle}>Name of Contact Person:</label><input type="text" required value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} style={inputStyle} placeholder="Your Full Name" /></div>
                <div><label style={labelStyle}>Official email:</label><input type="email" required value={courseForm.email} onChange={(e) => setCourseForm({ ...courseForm, email: e.target.value })} style={inputStyle} placeholder="name@example.com" /></div>
                <div><label style={labelStyle}>WhatsApp:</label><input type="tel" required value={courseForm.phone} onChange={(e) => setCourseForm({ ...courseForm, phone: e.target.value })} style={inputStyle} placeholder="+234 / +44 Phone Number" /></div>
                <div><label style={labelStyle}>Name of Organisation:</label><input type="text" value={courseForm.organisation} onChange={(e) => setCourseForm({ ...courseForm, organisation: e.target.value })} style={inputStyle} placeholder="Organisation / Self-employed" /></div>
                <div><label style={labelStyle}>Course or Service of Choice:</label><input type="text" required value={courseForm.choice} onChange={(e) => setCourseForm({ ...courseForm, choice: e.target.value })} style={inputStyle} placeholder="e.g. NEBOSH IGC" /></div>
                <div><label style={labelStyle}>Country of location:</label><input type="text" required value={courseForm.country} onChange={(e) => setCourseForm({ ...courseForm, country: e.target.value })} style={inputStyle} placeholder="e.g. Nigeria / UK" /></div>

                <button 
                  type="submit" 
                  style={{ backgroundColor: '#2b704a', color: '#ffffff', fontWeight: '800', padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.5rem', transition: 'all 0.25s ease' }} 
                  onMouseEnter={(e) => { e.target.style.backgroundColor = '#1e5235'; e.target.style.transform = 'translateY(-2px)'; }} 
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#2b704a'; e.target.style.transform = 'translateY(0)'; }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '0.8rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1.5rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#475467', fontWeight: '600' }}>Your request will be sent to:{' '}</span>
              <a href="mailto:register@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', textDecoration: 'none' }}>register@safeguardsafety.net</a>
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
              <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>COMPANY OR CORPORATE REQUEST</h3>

              <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div><label style={labelStyle}>Name of Contact Person:</label><input type="text" required value={quoteForm.name} onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} style={inputStyle} placeholder="Your Full Name" /></div>
                <div><label style={labelStyle}>Official email:</label><input type="email" required value={quoteForm.email} onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })} style={inputStyle} placeholder="name@company.com" /></div>
                <div><label style={labelStyle}>WhatsApp:</label><input type="tel" required value={quoteForm.phone} onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })} style={inputStyle} placeholder="+234 / +44 Phone Number" /></div>
                <div><label style={labelStyle}>Name of Organisation:</label><input type="text" required value={quoteForm.organisation} onChange={(e) => setQuoteForm({ ...quoteForm, organisation: e.target.value })} style={inputStyle} placeholder="Company / Organisation Name" /></div>
                <div><label style={labelStyle}>Course or Service of Choice:</label><input type="text" required value={quoteForm.service} onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })} style={inputStyle} placeholder="e.g. ISO 9001 Audit" /></div>
                <div><label style={labelStyle}>Country of location:</label><input type="text" required value={quoteForm.country} onChange={(e) => setQuoteForm({ ...quoteForm, country: e.target.value })} style={inputStyle} placeholder="e.g. Nigeria / UK" /></div>

                <button 
                  type="submit" 
                  style={{ backgroundColor: '#2b704a', color: '#ffffff', fontWeight: '800', padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.5rem', transition: 'all 0.25s ease' }} 
                  onMouseEnter={(e) => { e.target.style.backgroundColor = '#1e5235'; e.target.style.transform = 'translateY(-2px)'; }} 
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#2b704a'; e.target.style.transform = 'translateY(0)'; }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '0.8rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1.5rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#475467', fontWeight: '600' }}>Your request will be sent to:{' '}</span>
              <a href="mailto:register@safeguardsafety.net" style={{ color: '#2b704a', fontWeight: '700', textDecoration: 'none' }}>register@safeguardsafety.net</a>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 13. REASONS TO ENROL */}
      <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
          Reasons To Enrol In Our NEBOSH, IOSH And CQI-IRCA Courses
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
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
                <h3 style={{ fontSize: '1.05rem', color: '#2b704a', fontWeight: '800', margin: 0 }}>{reason.title}</h3>
              </div>
              <p style={{ color: '#475467', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{reason.desc}</p>
            </div>
          ))}
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

export default About;