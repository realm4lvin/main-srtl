import { useState } from 'react';
import Select from 'react-select';
import PhoneInputPkg from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Safe component extractor
const PhoneInput = PhoneInputPkg.default || PhoneInputPkg;

// Full Alphabetical List of ISO Countries
const countryOptions = [
  { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' },
  { value: 'Andorra', label: 'Andorra' },
  { value: 'Angola', label: 'Angola' },
  { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Armenia', label: 'Armenia' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Austria', label: 'Austria' },
  { value: 'Azerbaijan', label: 'Azerbaijan' },
  { value: 'Bahamas', label: 'Bahamas' },
  { value: 'Bahrain', label: 'Bahrain' },
  { value: 'Bangladesh', label: 'Bangladesh' },
  { value: 'Barbados', label: 'Barbados' },
  { value: 'Belarus', label: 'Belarus' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Belize', label: 'Belize' },
  { value: 'Benin', label: 'Benin' },
  { value: 'Bhutan', label: 'Bhutan' },
  { value: 'Bolivia', label: 'Bolivia' },
  { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
  { value: 'Botswana', label: 'Botswana' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Brunei', label: 'Brunei' },
  { value: 'Bulgaria', label: 'Bulgaria' },
  { value: 'Burkina Faso', label: 'Burkina Faso' },
  { value: 'Burundi', label: 'Burundi' },
  { value: 'Cambodia', label: 'Cambodia' },
  { value: 'Cameroon', label: 'Cameroon' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Cape Verde', label: 'Cape Verde' },
  { value: 'Central African Republic', label: 'Central African Republic' },
  { value: 'Chad', label: 'Chad' },
  { value: 'Chile', label: 'Chile' },
  { value: 'China', label: 'China' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'Comoros', label: 'Comoros' },
  { value: 'Congo', label: 'Congo' },
  { value: 'Costa Rica', label: 'Costa Rica' },
  { value: 'Croatia', label: 'Croatia' },
  { value: 'Cuba', label: 'Cuba' },
  { value: 'Cyprus', label: 'Cyprus' },
  { value: 'Czech Republic', label: 'Czech Republic' },
  { value: 'Denmark', label: 'Denmark' },
  { value: 'Djibouti', label: 'Djibouti' },
  { value: 'Dominica', label: 'Dominica' },
  { value: 'Dominican Republic', label: 'Dominican Republic' },
  { value: 'Ecuador', label: 'Ecuador' },
  { value: 'Egypt', label: 'Egypt' },
  { value: 'El Salvador', label: 'El Salvador' },
  { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
  { value: 'Eritrea', label: 'Eritrea' },
  { value: 'Estonia', label: 'Estonia' },
  { value: 'Eswatini', label: 'Eswatini' },
  { value: 'Ethiopia', label: 'Ethiopia' },
  { value: 'Fiji', label: 'Fiji' },
  { value: 'Finland', label: 'Finland' },
  { value: 'France', label: 'France' },
  { value: 'Gabon', label: 'Gabon' },
  { value: 'Gambia', label: 'Gambia' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Greece', label: 'Greece' },
  { value: 'Grenada', label: 'Grenada' },
  { value: 'Guatemala', label: 'Guatemala' },
  { value: 'Guinea', label: 'Guinea' },
  { value: 'Guyana', label: 'Guyana' },
  { value: 'Haiti', label: 'Haiti' },
  { value: 'Honduras', label: 'Honduras' },
  { value: 'Hungary', label: 'Hungary' },
  { value: 'Iceland', label: 'Iceland' },
  { value: 'India', label: 'India' },
  { value: 'Indonesia', label: 'Indonesia' },
  { value: 'Iran', label: 'Iran' },
  { value: 'Iraq', label: 'Iraq' },
  { value: 'Ireland', label: 'Ireland' },
  { value: 'Israel', label: 'Israel' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Jamaica', label: 'Jamaica' },
  { value: 'Japan', label: 'Japan' },
  { value: 'Jordan', label: 'Jordan' },
  { value: 'Kazakhstan', label: 'Kazakhstan' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'Kuwait', label: 'Kuwait' },
  { value: 'Latvia', label: 'Latvia' },
  { value: 'Lebanon', label: 'Lebanon' },
  { value: 'Liberia', label: 'Liberia' },
  { value: 'Libya', label: 'Libya' },
  { value: 'Lithuania', label: 'Lithuania' },
  { value: 'Luxembourg', label: 'Luxembourg' },
  { value: 'Madagascar', label: 'Madagascar' },
  { value: 'Malawi', label: 'Malawi' },
  { value: 'Malaysia', label: 'Malaysia' },
  { value: 'Maldives', label: 'Maldives' },
  { value: 'Mali', label: 'Mali' },
  { value: 'Malta', label: 'Malta' },
  { value: 'Mauritania', label: 'Mauritania' },
  { value: 'Mauritius', label: 'Mauritius' },
  { value: 'Mexico', label: 'Mexico' },
  { value: 'Moldova', label: 'Moldova' },
  { value: 'Monaco', label: 'Monaco' },
  { value: 'Mongolia', label: 'Mongolia' },
  { value: 'Montenegro', label: 'Montenegro' },
  { value: 'Morocco', label: 'Morocco' },
  { value: 'Mozambique', label: 'Mozambique' },
  { value: 'Namibia', label: 'Namibia' },
  { value: 'Nepal', label: 'Nepal' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'New Zealand', label: 'New Zealand' },
  { value: 'Nicaragua', label: 'Nicaragua' },
  { value: 'Niger', label: 'Niger' },
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Oman', label: 'Oman' },
  { value: 'Pakistan', label: 'Pakistan' },
  { value: 'Palestine', label: 'Palestine' },
  { value: 'Panama', label: 'Panama' },
  { value: 'Papua New Guinea', label: 'Papua New Guinea' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'Peru', label: 'Peru' },
  { value: 'Philippines', label: 'Philippines' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Portugal', label: 'Portugal' },
  { value: 'Qatar', label: 'Qatar' },
  { value: 'Romania', label: 'Romania' },
  { value: 'Russia', label: 'Russia' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia' },
  { value: 'Senegal', label: 'Senegal' },
  { value: 'Serbia', label: 'Serbia' },
  { value: 'Sierra Leone', label: 'Sierra Leone' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Slovakia', label: 'Slovakia' },
  { value: 'Slovenia', label: 'Slovenia' },
  { value: 'South Africa', label: 'South Africa' },
  { value: 'South Korea', label: 'South Korea' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Sri Lanka', label: 'Sri Lanka' },
  { value: 'Sudan', label: 'Sudan' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Switzerland', label: 'Switzerland' },
  { value: 'Tanzania', label: 'Tanzania' },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Togo', label: 'Togo' },
  { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
  { value: 'Tunisia', label: 'Tunisia' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'United States', label: 'United States' },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Uzbekistan', label: 'Uzbekistan' },
  { value: 'Venezuela', label: 'Venezuela' },
  { value: 'Vietnam', label: 'Vietnam' },
  { value: 'Yemen', label: 'Yemen' },
  { value: 'Zambia', label: 'Zambia' },
  { value: 'Zimbabwe', label: 'Zimbabwe' }
];

// Alphabetical List of All 75 Courses
const allCourseOptions = [
  'Advance Fire Fighting & Fire Emergency Response',
  'Advanced Cardiac Life Support (ACLS)',
  'Advanced First Aid & Emergency Response',
  'Basic Electrical Safety',
  'Basic Fire Fighting',
  'Basic First Aid & CPR',
  'Basic Life Support (BLS)',
  'Behaviour Based Safety (BBS)',
  'Bow-Tie & Fault-Tree Program',
  'Confined Space & Gas Testing',
  'Confined Space Entry',
  'Confined Space, B.A. Wearer & Emergency Evacuation',
  'Confined Space, Gas Testing & B. A. Wearer',
  'Control of Substances Hazardous to Health (COSHH)',
  'Crane, Sling and Rigging Safety',
  'Crime Prevention Techniques',
  'Defensive Driving Techniques',
  'Designated First Aider & Emergency Response',
  'Environmental Health and Waste Management',
  'Environmental Risk Control and Management',
  'Fire Prevention, Protection & Practical Fire Fighting',
  'Fire Warden, Fire Watch & Emergency Team Member',
  'First Aid at Work',
  'First Aid, CPR & AED',
  'Food Handling Safety and Hygiene',
  'Forklift Safety Training',
  'Gas Testing',
  'Gas Testing & B. A. Wearer',
  'Hydrogen Sulphide Safety',
  'Incident/ Accident Investigation',
  'International Diploma for Occ. Health & Safety Mgt. (DI)',
  'International Diploma in Environmental Mgt. (IDE)',
  'IOSH Managing Safely',
  'IOSH Working Safely',
  'ISO 14001:2015 EMS Lead Auditor',
  'ISO 22000:2018 FSMS Lead Auditor',
  'ISO 27001:2022 ISMS Lead Auditor',
  'ISO 45001:2018 OHSMS Lead Auditor',
  'ISO 50001:2018 EnMS Lead Auditor',
  'ISO 9001:2015 QMS Lead Auditor',
  'Job Safety (Hazard) Analysis',
  'Journey Management',
  'Lift Truck, Empty Container Handler & Reach Stacker Safety',
  'Lock Out & Tag Out Procedures',
  'Manual Handling and Safe Lifting',
  'National Diploma for Occ. Health & Safety Mgt. (DN)',
  'National Diploma in Environmental Mgt. (NDE)',
  'NEBOSH Certificate in Fire Safety (FSC)',
  'NEBOSH Environmental Awareness at Work (EAW)',
  'NEBOSH Environmental Mgt. Certificate (EMC)',
  'NEBOSH Health & Safety at Work (HSA)',
  'NEBOSH Health & Safety Management for Construction (International - CI)',
  'NEBOSH Health & Safety Management for Construction (UK - CN)',
  'NEBOSH HSE Certificate in Health & Safety Leadership Excellence (HSL)',
  'NEBOSH HSE Certificate in Manual Handling Risk Assessment (MHR)',
  'NEBOSH HSE Certificate in Managing Stress at Work (MSW)',
  'NEBOSH HSE Certificate in Process Safety Mgt. (PSM)',
  'NEBOSH HSE Introduction to Incident Investigation (INV)',
  'NEBOSH HSE Managing Risks & Risk Assessment at Work (RAW)',
  'NEBOSH IIRSM Certificate in Managing Risk (MAR)',
  'NEBOSH Int\'l General Certificate in Occ. Health & Safety (IGC)',
  'NEBOSH National General Certificate in Occ. Health & Safety (GNC)',
  'NEBOSH Working with Wellbeing (WEL)',
  'Permit to Work System',
  'Practical Fire Fighting',
  'Practical First Aid & CPR',
  'Professional Advanced Certificate in HSE',
  'Professional General Certificate in HSE',
  'Rig Floor Safety Course',
  'Rigging Safety & Rigging Inspectors Course',
  'Safe Handling of Chemicals (SHOC)',
  'Security Awareness & Crime Control',
  'Working at Height',
  'Workplace Ergonomics',
  'Workplace Hazard Management'
].map(item => ({ value: item, label: item }));

const RequestFormSection = ({ hasMessage = false }) => {
  const [courseForm, setCourseForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    choice: '',
    country: '',
    message: ''
  });

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    service: '',
    country: '',
    message: ''
  });

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    let body = `Name of Contact Person: ${courseForm.name}\n` +
      `Official email: ${courseForm.email}\n` +
      `WhatsApp: +${courseForm.phone}\n` +
      `Name of Organisation: ${courseForm.organisation}\n` +
      `Course or Service of Choice: ${courseForm.choice}\n` +
      `Country of Location: ${courseForm.country}`;

    if (hasMessage && courseForm.message) {
      body += `\n\nYour Message:\n${courseForm.message}`;
    }

    window.location.href = `mailto:register@safeguardsafety.net?subject=${encodeURIComponent('Individual or Personal Request')}&body=${encodeURIComponent(body)}`;
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    let body = `Name of Contact Person: ${quoteForm.name}\n` +
      `Official email: ${quoteForm.email}\n` +
      `WhatsApp: +${quoteForm.phone}\n` +
      `Name of Organisation: ${quoteForm.organisation}\n` +
      `Course or Service of Choice: ${quoteForm.service}\n` +
      `Country of Location: ${quoteForm.country}`;

    if (hasMessage && quoteForm.message) {
      body += `\n\nYour Message:\n${quoteForm.message}`;
    }

    window.location.href = `mailto:register@safeguardsafety.net?subject=${encodeURIComponent('Company or Corporate Request')}&body=${encodeURIComponent(body)}`;
  };

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

  const selectCustomStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: '6px',
      borderColor: state.isFocused ? '#2b704a' : '#d0d5dd',
      boxShadow: state.isFocused ? '0 0 0 1px #2b704a' : 'none',
      padding: '0.1rem',
      fontSize: '0.9rem',
      '&:hover': { borderColor: '#2b704a' }
    })
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '5rem auto 0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '1.6rem', color: '#2b704a', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>
        Request For Full Details Of Any Course Or Service Of Choice
      </h2>
      <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-yellow)', margin: '0 auto 3.5rem auto' }}></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'stretch' }}>
        
        {/* Form 1: INDIVIDUAL OR PERSONAL REQUEST */}
        <div 
          style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ...cardHoverStyle }}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>INDIVIDUAL OR PERSONAL REQUEST</h3>

            <form onSubmit={handleCourseSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Name of Contact Person:</label>
                <input type="text" required value={courseForm.name} onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })} style={inputStyle} placeholder="e.g. John Doe" />
              </div>

              <div>
                <label style={labelStyle}>Official email:</label>
                <input type="email" required value={courseForm.email} onChange={(e) => setCourseForm({ ...courseForm, email: e.target.value })} style={inputStyle} placeholder="name@example.com" />
              </div>

              <div>
                <label style={labelStyle}>WhatsApp Number:</label>
                <PhoneInput
                  country={'ng'}
                  value={courseForm.phone}
                  onChange={(phone) => setCourseForm({ ...courseForm, phone })}
                  containerStyle={{ width: '100%' }}
                  inputStyle={{ 
                    width: '100%', 
                    height: '42px', 
                    fontSize: '0.9rem', 
                    borderRadius: '6px', 
                    borderColor: '#d0d5dd',
                    paddingLeft: '80px'
                  }}
                  buttonStyle={{ 
                    borderRadius: '6px 0 0 6px', 
                    borderColor: '#d0d5dd',
                    width: '70px',
                    paddingRight: '6px'
                  }}
                  prefix="+"
                  enableAreaCodes={true}
                  countryCodeEditable={false}
                  placeholder="801 234 5678"
                />
              </div>

              <div>
                <label style={labelStyle}>Name of Organisation:</label>
                <input type="text" value={courseForm.organisation} onChange={(e) => setCourseForm({ ...courseForm, organisation: e.target.value })} style={inputStyle} placeholder="Organisation / Self-employed" />
              </div>

              <div>
                <label style={labelStyle}>Course or Service of Choice:</label>
                <Select
                  options={allCourseOptions}
                  styles={selectCustomStyles}
                  placeholder="Select or type your course..."
                  isSearchable={true}
                  onChange={(selected) => setCourseForm({ ...courseForm, choice: selected ? selected.value : '' })}
                />
              </div>

              <div>
                <label style={labelStyle}>Country of Location:</label>
                <Select
                  options={countryOptions}
                  styles={selectCustomStyles}
                  placeholder="Select or type your country..."
                  isSearchable={true}
                  onChange={(selected) => setCourseForm({ ...courseForm, country: selected ? selected.value : '' })}
                />
              </div>

              {hasMessage && (
                <div>
                  <label style={labelStyle}>Your Message:</label>
                  <textarea rows={4} value={courseForm.message} onChange={(e) => setCourseForm({ ...courseForm, message: e.target.value })} style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }} placeholder="Add a description or specific questions..." />
                </div>
              )}

              <button type="submit" style={{ backgroundColor: '#2b704a', color: '#ffffff', fontWeight: '800', padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.5rem', transition: 'all 0.25s ease' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#1e5235'; e.target.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#2b704a'; e.target.style.transform = 'translateY(0)'; }}>
                Submit Request
              </button>
            </form>
          </div>

          <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '0.8rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1.5rem', fontSize: '0.85rem' }}>
            <span style={{ color: '#475467', fontWeight: '600' }}>Your request will be sent to:{' '}</span>
            <a href="mailto:register@safeguardsafety.net?subject=Individual%20or%20Personal%20Request" style={{ color: '#2b704a', fontWeight: '700', textDecoration: 'none' }}>
              register@safeguardsafety.net
            </a>
          </div>
        </div>

        {/* Form 2: COMPANY OR CORPORATE REQUEST */}
        <div 
          style={{ backgroundColor: '#ffffff', border: '1px solid #eaecf0', borderTop: '4px solid #2b704a', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ...cardHoverStyle }}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#2b704a', fontWeight: '800', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>COMPANY OR CORPORATE REQUEST</h3>

            <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Name of Contact Person:</label>
                <input type="text" required value={quoteForm.name} onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} style={inputStyle} placeholder="e.g. John Doe" />
              </div>

              <div>
                <label style={labelStyle}>Official email:</label>
                <input type="email" required value={quoteForm.email} onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })} style={inputStyle} placeholder="name@company.com" />
              </div>

              <div>
                <label style={labelStyle}>WhatsApp Number:</label>
                <PhoneInput
                  country={'ng'}
                  value={quoteForm.phone}
                  onChange={(phone) => setQuoteForm({ ...quoteForm, phone })}
                  containerStyle={{ width: '100%' }}
                  inputStyle={{ 
                    width: '100%', 
                    height: '42px', 
                    fontSize: '0.9rem', 
                    borderRadius: '6px', 
                    borderColor: '#d0d5dd',
                    paddingLeft: '80px'
                  }}
                  buttonStyle={{ 
                    borderRadius: '6px 0 0 6px', 
                    borderColor: '#d0d5dd',
                    width: '70px',
                    paddingRight: '6px'
                  }}
                  prefix="+"
                  enableAreaCodes={true}
                  countryCodeEditable={false}
                  placeholder="801 234 5678"
                />
              </div>

              <div>
                <label style={labelStyle}>Name of Organisation:</label>
                <input type="text" required value={quoteForm.organisation} onChange={(e) => setQuoteForm({ ...quoteForm, organisation: e.target.value })} style={inputStyle} placeholder="Company / Organisation Name" />
              </div>

              <div>
                <label style={labelStyle}>Course or Service of Choice:</label>
                <Select
                  options={allCourseOptions}
                  styles={selectCustomStyles}
                  placeholder="Select or type your course..."
                  isSearchable={true}
                  onChange={(selected) => setQuoteForm({ ...quoteForm, service: selected ? selected.value : '' })}
                />
              </div>

              <div>
                <label style={labelStyle}>Country of Location:</label>
                <Select
                  options={countryOptions}
                  styles={selectCustomStyles}
                  placeholder="Select or type your country..."
                  isSearchable={true}
                  onChange={(selected) => setQuoteForm({ ...quoteForm, country: selected ? selected.value : '' })}
                />
              </div>

              {hasMessage && (
                <div>
                  <label style={labelStyle}>Your Message:</label>
                  <textarea rows={4} value={quoteForm.message} onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })} style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }} placeholder="Add a description or project specifications..." />
                </div>
              )}

              <button type="submit" style={{ backgroundColor: '#2b704a', color: '#ffffff', fontWeight: '800', padding: '0.8rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.5rem', transition: 'all 0.25s ease' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#1e5235'; e.target.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#2b704a'; e.target.style.transform = 'translateY(0)'; }}>
                Submit Request
              </button>
            </form>
          </div>

          <div style={{ backgroundColor: '#f9fafb', borderLeft: '4px solid #2b704a', padding: '0.8rem 1.2rem', borderRadius: '0 6px 6px 0', marginTop: '1.5rem', fontSize: '0.85rem' }}>
            <span style={{ color: '#475467', fontWeight: '600' }}>Your request will be sent to:{' '}</span>
            <a href="mailto:register@safeguardsafety.net?subject=Company%20or%20Corporate%20Request" style={{ color: '#2b704a', fontWeight: '700', textDecoration: 'none' }}>
              register@safeguardsafety.net
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RequestFormSection;