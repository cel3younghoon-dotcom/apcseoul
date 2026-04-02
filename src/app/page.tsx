"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './eng.css';

export default function EnglishHomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleFaq = (index: number) =>
    setOpenFaq(openFaq === index ? null : index);

  // 🔥 이메일 전송 처리 함수 (안전장치 팝업 추가)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('userName') as HTMLInputElement).value;
    const contact = (form.elements.namedItem('userContact') as HTMLInputElement).value;
    const procedure = (form.elements.namedItem('userProcedure') as HTMLSelectElement).value;
    const details = (form.elements.namedItem('userDetails') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`[APC Seoul] New Private Inquiry - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\nProcedure: ${procedure}\n\nDetails:\n${details}`
    );

    // 알림창을 띄워 고객이 안심하고 이메일 앱으로 넘어가도록 안내
    alert("Your default email app will now open to send this inquiry. If it doesn't open automatically, please email us directly at yhkim@apc-seoul.com");

    // 사용자의 기본 메일 클라이언트를 열어 yhkim@apc-seoul.com 으로 내용 전달
    window.location.href = `mailto:yhkim@apc-seoul.com?subject=${subject}&body=${body}`;
  };

  const faqs = [
    {
      q: 'Do I need to speak Korean?',
      a: 'Not at all. Your dedicated APC Seoul concierge handles all communication with the clinic — before, during, and after your procedure. Every appointment includes 1:1 medical interpretation.',
    },
    {
      q: 'How long do I need to stay in Seoul?',
      a: 'It depends on your procedure. Facelift typically requires 10–14 days, hair transplant 2–3 days, laminate veneer 1–3 days, and skin treatments can be completed in a single day. Exact timelines are confirmed after consultation.',
    },
    {
      q: 'What happens if something goes wrong after I return home?',
      a: 'This is exactly what our Legal Shield covers. APC Seoul remains your point of contact with the clinic after you return. We handle all communication, dispute resolution, and revision coordination on your behalf.',
    },
    {
      q: 'Is the price really the same as local patients?',
      a: 'Yes. We maintain formal B2B partnerships with our partner clinics, which means you are billed at the same official rate as Korean patients. There is no foreigner markup. Our concierge fee is entirely separate and disclosed upfront.',
    },
    {
      q: 'How do I know the surgeon I consulted will perform my procedure?',
      a: 'We only work with private clinics where this is contractually guaranteed. Shadow doctor practices occur in high-volume factory clinics — which we never use. Your dedicated concierge is physically present to verify this on the day of your procedure.',
    },
    {
      q: 'Do I need to have a virtual call to get started?',
      a: "No. Everything can be handled via our inquiry form, email, or WhatsApp messaging. Simply tell us what you're considering and share relevant photos — we'll guide you through the process entirely in writing, at your own pace.",
    },
    {
      q: 'Is this covered by insurance?',
      a: 'Elective aesthetic procedures are generally not covered by standard health insurance. However, we can provide full documentation of your procedures upon request for your records or any applicable claims.',
    },
  ];

  return (
    <div className="eng-theme">
      {/* ── NAV ── */}
      <nav style={{ background: navScrolled ? 'rgba(14,14,14,0.98)' : 'rgba(14,14,14,0.92)' }}>
        <Link href="/" className="nav-logo">
          APC <span>Seoul</span>
        </Link>
        <div className="nav-right">
          <Link href="/" className="lang-btn active">
            ENG
          </Link>
          <Link href="/jp" className="lang-btn">
            JP
          </Link>
          {/* 우상단 버튼 누르면 부드럽게 Contact 섹션으로 이동 */}
          <a href="#contact" className="nav-cta">
            Free Consultation
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <p className="hero-label">Private Medical Concierge · Seoul, Korea</p>
        <h1 className="hero-headline">
          Seoul&apos;s Top Clinics.<br />
          <em>Private. Curated. Yours.</em>
        </h1>
        <p className="hero-sub">
          Most people who come to Seoul for surgery get it wrong. We exist so you don&apos;t have to find out how.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">
            Book a Free Consultation
          </a>
          <a href="#services" className="btn-ghost">
            Our Services
          </a>
        </div>

        {/* Before/After Strip */}
        <div className="ba-strip">
          <div className="ba-item">
            <div className="ba-placeholder">
              <div className="icon">🖼</div>
              <div className="notice">
                Facelift Before &amp; After<br />Photo coming soon
              </div>
            </div>
            <div className="ba-label">
              <div className="ba-procedure">Facelift &amp; Neck Lift</div>
              <div className="ba-tag">Before / After · Seoul Private Clinic</div>
            </div>
          </div>
          <div className="ba-item">
            <div className="ba-placeholder">
              <div className="icon">🖼</div>
              <div className="notice">
                Hair Transplant Before &amp; After<br />Photo coming soon
              </div>
            </div>
            <div className="ba-label">
              <div className="ba-procedure">Hair Transplant (FUE)</div>
              <div className="ba-tag">Before / After · Seoul Private Clinic</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SEOUL ── */}
      <section id="why-seoul">
        <div className="reveal">
          <p className="section-label">Why Seoul</p>
          <h2 className="section-title">
            The world&apos;s most advanced aesthetic medicine. At a fraction of the Western price.
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            Korea leads global aesthetic surgery — not just in volume, but in surgical precision and technology that won&apos;t reach the West for years.
          </p>
        </div>
        <div className="why-grid reveal">
          <div className="why-card">
            <div className="why-number">01</div>
            <h3>Technology</h3>
            <p>
              Korean surgeons perform hundreds of the same procedure annually. The specialization and technique refinement is simply unmatched anywhere in the world.
            </p>
            <div className="why-stat">&quot;5–10 years ahead of the West&quot;</div>
          </div>
          <div className="why-card">
            <div className="why-number">02</div>
            <h3>Cost</h3>
            <p>
              A full SMAS facelift in New York runs $20,000+. In Seoul, the equivalent procedure at a top private clinic: $8,000–$12,000. Same outcome. Significantly lower risk.
            </p>
            <div className="why-stat">40–50% less than the US or UK</div>
          </div>
          <div className="why-card">
            <div className="why-number">03</div>
            <h3>Privacy</h3>
            <p>
              Mandatory CCTV in all operating rooms (law enforced since 2023). Strict medical confidentiality. No press exposure. Absolute discretion for private individuals.
            </p>
            <div className="why-stat">Legally enforced transparency</div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section id="problem">
        <div className="reveal">
          <p className="section-label">The Risk</p>
          <h2 className="section-title">Why most people get it wrong in Seoul.</h2>
          <div className="divider" style={{ background: '#c0392b' }}></div>
          <p className="section-sub">
            The clinics that dominate search results were not built for discerning patients. They were built for volume.
          </p>
        </div>
        <div className="problem-grid reveal">
          <div className="problem-card">
            <div className="problem-icon">🏭</div>
            <h3>Factory Clinics</h3>
            <p>
              Dozens of patients processed daily. You are not a priority. Your consultation is rushed. Your surgeon may be juggling multiple operating rooms simultaneously.
            </p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">👤</div>
            <h3>Shadow Doctors</h3>
            <p>
              The surgeon you consulted may not be the one performing your procedure. A known risk in high-volume clinics — and one that is almost impossible to detect without an insider.
            </p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">💰</div>
            <h3>Foreigner Pricing</h3>
            <p>
              No transparency. No guarantee you&apos;re paying what a local patient would pay. Inflated quotes for overseas patients are common in tourist-facing clinics.
            </p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">✈️</div>
            <h3>Zero Aftercare</h3>
            <p>
              Once you&apos;re on the plane home, the clinic&apos;s responsibility ends. If complications arise weeks later — and they sometimes do — you are entirely on your own.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution">
        <div className="reveal">
          <p className="section-label">Our Standard</p>
          <h2 className="section-title" style={{ color: 'white' }}>
            This is what APC Seoul was built for.
          </h2>
          <div className="divider"></div>
          <p className="section-sub">
            We are not a booking platform. We are your private medical concierge in Seoul — from initial inquiry to full recovery at home.
          </p>
        </div>
        <div className="solution-grid reveal">
          <div className="solution-card">
            <div className="solution-icon">👑</div>
            <h3>Private Clinics Only</h3>
            <p>
              We exclusively work with carefully vetted private clinics in Seoul — never factory-style tourist clinics. Every partner clinic is personally assessed by us before any referral is made.
            </p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🛡️</div>
            <h3>Legal Shield</h3>
            <p>
              If anything goes wrong — we handle it. Dispute resolution, revision coordination, communication with the clinic. You are never navigating this alone.
            </p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">💎</div>
            <h3>Same Price Guarantee</h3>
            <p>
              You pay exactly what Korean patients pay. No foreigner markup. No hidden fees. Our concierge fee is separate and fully transparent.
            </p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🤝</div>
            <h3>Fully Escorted</h3>
            <p>
              Airport pickup to clinic to hotel. A dedicated 1:1 medical interpreter at every appointment. Daily check-ins throughout your stay. Aftercare coordination after you return home.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="reveal">
          <p className="section-label">Services</p>
          <h2 className="section-title">What we arrange.</h2>
          <div className="divider"></div>
        </div>

        <div className="services-primary reveal">
          <div className="service-card-primary">
            <div className="service-badge">Primary</div>
            <h3>Facelift &amp; Neck Lift</h3>
            <p>
              Korea&apos;s SMAS facelift techniques are years ahead of the West. We arrange access to surgeons with 3,000+ facelifts performed — with no waitlist, through our VIP channel.
            </p>
            <div className="service-stay">Typical stay: 10–14 days</div>
          </div>
          <div className="service-card-primary">
            <div className="service-badge">Primary</div>
            <h3>Hair Transplant (FUE)</h3>
            <p>
              Scar-free, natural hairline design by surgeons who perform this procedure exclusively. The world&apos;s most experienced FUE specialists are in Seoul. We get you in front of them.
            </p>
            <div className="service-stay">Typical stay: 2–3 days</div>
          </div>
        </div>

        <div className="services-addons reveal">
          <div className="service-card-addon">
            <div className="addon-tag">Add-on</div>
            <h3>Smile Design (Laminate Veneer)</h3>
            <p>
              No drilling. Whiter, perfectly aligned smile in a matter of days. Ideal during recovery downtime — maximise your time in Seoul.
            </p>
            <div className="service-stay" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.8rem' }}>
              ✦ Typical stay: 1–3 days
            </div>
          </div>
          <div className="service-card-addon">
            <div className="addon-tag">Add-on</div>
            <h3>Skin Regeneration &amp; Anti-Aging</h3>
            <p>
              Stem cell therapy, BBL, Sofwave — treatments not yet widely available in Western markets. Powerful results achievable in a single visit.
            </p>
            <div className="service-stay" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.8rem' }}>
              ✦ Typical stay: 1 day
            </div>
          </div>
        </div>

        <div className="service-note reveal">
          ✦ Exact pricing and required length of stay are confirmed after consultation — every case is individual. All consultations are free of charge.
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="process">
        <div className="reveal">
          <p className="section-label">The Process</p>
          <h2 className="section-title">How it works.</h2>
          <div className="divider"></div>
          <p className="section-sub">
            Everything is handled through messaging, email, or our inquiry form — at your pace, on your terms.
          </p>
        </div>

        <div className="process-steps reveal">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-phase">Pre-Care</div>
            <h3>Before You Fly</h3>
            <ul>
              <li>Submit inquiry via form, email, or WhatsApp</li>
              <li>Share photos &amp; procedure interests at your convenience</li>
              <li>Receive clinic recommendations &amp; custom itinerary</li>
              <li>Confirm booking — no virtual calls required</li>
              <li>Hotel arrangement available on request</li>
            </ul>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-phase">On-Site Care</div>
            <h3>While You&apos;re in Seoul</h3>
            <ul>
              <li>Private car pickup from the airport</li>
              <li>1:1 dedicated medical interpreter</li>
              <li>Escort to every clinic appointment</li>
              <li>Daily check-ins throughout your stay</li>
              <li>On-call support for any questions</li>
            </ul>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-phase">After-Care</div>
            <h3>After You Return Home</h3>
            <ul>
              <li>Recovery monitoring via messaging</li>
              <li>Direct communication channel to your surgeon</li>
              <li>Complication support &amp; escalation if needed</li>
              <li>Revision coordination (in the rare event required)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="reveal">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Your questions, answered.</h2>
          <div className="divider"></div>
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggleFaq(index)}>
                {faq.q} <span className="faq-arrow">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <p className="section-label" style={{ color: 'rgba(184,151,90,0.8)' }}>
              Get in Touch
            </p>
            <h2 className="section-title">Start with a private conversation.</h2>
            <div className="divider"></div>
            <p className="section-sub">
              No commitment. No pressure. Tell us what you&apos;re considering — we&apos;ll tell you exactly what&apos;s possible.
            </p>
            <div className="contact-detail">
              <div className="contact-item">
                📧 <a href="mailto:yhkim@apc-seoul.com">yhkim@apc-seoul.com</a>
              </div>
              <div className="contact-item">
                💬{' '}
                <a href="https://wa.me/821012345678" target="_blank" rel="noreferrer">
                  WhatsApp — available for text enquiries
                </a>
              </div>
              <div className="contact-item">
                🌐 <span style={{ color: 'rgba(255,255,255,0.4)' }}>apc-seoul.com</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="userName" placeholder="First name is fine" required />
            </div>
            <div className="form-group">
              <label>Email or WhatsApp</label>
              <input type="text" name="userContact" placeholder="How should we reach you?" required />
            </div>
            <div className="form-group">
              <label>Procedure of Interest</label>
              <select name="userProcedure" defaultValue="" required>
                <option value="" disabled>Select a procedure</option>
                <option>Facelift &amp; Neck Lift</option>
                <option>Hair Transplant (FUE)</option>
                <option>Smile Design (Laminate Veneer)</option>
                <option>Skin Regeneration &amp; Anti-Aging</option>
                <option>Multiple / Not sure yet</option>
              </select>
            </div>
            <div className="form-group">
              <label>Anything else you&apos;d like us to know</label>
              <textarea name="userDetails" placeholder="Timeline, budget range, questions — anything helps us prepare a better response." />
            </div>
            <div className="form-submit">
              <button className="btn-form-primary" type="submit">
                Send Private Inquiry
              </button>
              <a
                href="https://wa.me/821012345678"
                className="btn-form-wa"
                target="_blank"
                rel="noreferrer"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
            
            {/* 🔥 간결하게 줄어든 보안 안내 문구 */}
            <div className="secure-note">
              <span className="icon">🔒</span> Your information is strictly confidential and will never be shared.
            </div>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="logo">
          APC <span>Seoul</span>
        </div>
        <p>© 2026 APC Seoul · Private Medical Concierge · Seoul, Korea</p>
      </footer>
    </div>
  );
}