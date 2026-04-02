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
      a: 'We only work with private clinics where this is personally verified. Shadow doctor practices occur in high-volume factory clinics — which we never use. Your dedicated concierge is physically present to verify this on the day of your procedure.',
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
      <nav
        style={{
          background: navScrolled
            ? 'rgba(14,14,14,0.98)'
            : 'rgba(14,14,14,0.92)',
        }}
      >
        <Link href="/" className="nav-logo">
          APC <span>Seoul</span>
        </Link>
        <div className="nav-right">
          <Link href="/" className="lang-btn active">ENG</Link>
          <Link href="/jp" className="lang-btn">JP</Link>
          <Link href="#contact" className="nav-cta">Free Consultation</Link>
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
          Most people who come to Seoul for surgery get it wrong.
          We exist so you don&apos;t have to find out how.
        </p>

        <div className="hero-ctas">
          <Link href="#contact" className="btn-primary">
            Book a Free Consultation
          </Link>
          <Link href="#services" className="btn-ghost">
            Our Services
          </Link>
        </div>

        {/* Before / After Strip */}
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
            The world&apos;s most advanced aesthetic medicine.
            At a fraction of the Western price.
          </h2>
          <div className="divider" />
          <p className="section-sub">
            Korea leads global aesthetic surgery — not just in volume,
            but in surgical precision and technology that won&apos;t reach
            the West for years.
          </p>
        </div>

        <div className="why-grid reveal">
          {[
            {
              n: '01',
              title: 'Technology',
              body: 'Korean surgeons perform hundreds of the same procedure annually. The specialization and technique refinement is simply unmatched anywhere in the world.',
              stat: '"5–10 years ahead of the West"',
            },
            {
              n: '02',
              title: 'Cost',
              body: 'A full SMAS facelift in New York runs $20,000+. In Seoul, the equivalent procedure at a top private clinic: $8,000–$12,000. Same outcome. Significantly lower risk.',
              stat: '40–50% less than the US or UK',
            },
            {
              n: '03',
              title: 'Privacy',
              body: 'Mandatory CCTV in all operating rooms (law enforced since 2023). Strict medical confidentiality. No press exposure. Absolute discretion for private individuals.',
              stat: 'Legally enforced transparency',
            },
          ].map(({ n, title, body, stat }) => (
            <div className="why-card" key={n}>
              <div className="why-number">{n}</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="why-stat">{stat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section id="problem">
        <div className="reveal">
          <p className="section-label">The Risk</p>
          <h2 className="section-title">
            Why most people get it wrong in Seoul.
          </h2>
          <div className="divider" style={{ background: '#c0392b' }} />
          <p className="section-sub">
            The clinics that dominate search results were not built for
            discerning patients. They were built for volume.
          </p>
        </div>

        <div className="problem-grid reveal">
          {[
            {
              icon: '🏭',
              title: 'Factory Clinics',
              body: 'Dozens of patients processed daily. You are not a priority. Your consultation is rushed. Your surgeon may be juggling multiple operating rooms simultaneously.',
            },
            {
              icon: '👤',
              title: 'Shadow Doctors',
              body: 'The surgeon you consulted may not be the one performing your procedure. A known risk in high-volume clinics — and one that is almost impossible to detect without an insider.',
            },
            {
              icon: '💰',
              title: 'Foreigner Pricing',
              body: "No transparency. No guarantee you're paying what a local patient would pay. Inflated quotes for overseas patients are common in tourist-facing clinics.",
            },
            {
              icon: '✈️',
              title: 'Zero Aftercare',
              body: "Once you're on the plane home, the clinic's responsibility ends. If complications arise weeks later — and they sometimes do — you are entirely on your own.",
            },
          ].map(({ icon, title, body }) => (
            <div className="problem-card" key={title}>
              <div className="problem-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution">
        <div className="reveal">
          <p className="section-label">Our Standard</p>
          <h2 className="section-title" style={{ color: 'white' }}>
            This is what APC Seoul was built for.
          </h2>
          <div className="divider" />
          <p className="section-sub">
            We are not a booking platform. We are your private medical
            concierge in Seoul — from initial inquiry to full recovery
            at home.
          </p>
        </div>

        <div className="solution-grid reveal">
          {[
            {
              icon: '👑',
              title: 'Private Clinics Only',
              body: 'We exclusively work with carefully vetted private clinics in Seoul — never factory-style tourist clinics. Every partner clinic is personally assessed before any referral is made.',
            },
            {
              icon: '🛡️',
              title: 'Legal Shield',
              body: 'If anything goes wrong — we handle it. Dispute resolution, revision coordination, communication with the clinic. You are never navigating this alone.',
            },
            {
              icon: '💎',
              title: 'Same Price Guarantee',
              body: 'You pay exactly what Korean patients pay. No foreigner markup. No hidden fees. Our concierge fee is separate and fully transparent.',
            },
            {
              icon: '🤝',
              title: 'Fully Escorted',
              body: 'Private car pickup from the airport. A dedicated 1:1 medical interpreter at every appointment. Daily check-ins throughout your stay. Aftercare coordination after you return home.',
            },
          ].map(({ icon, title, body }) => (
            <div className="solution-card" key={title}>
              <div className="solution-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="reveal">
          <p className="section-label">Services</p>
          <h2 className="section-title">What we arrange.</h2>
          <div className="divider" />
        </div>

        {/* Primary */}
        <div className="services-primary reveal">
          <div className="service-card-primary">
            <div className="service-badge">Primary</div>
            <h3>Facelift &amp; Neck Lift</h3>
            <p>
              Korea&apos;s SMAS facelift techniques are years ahead of the
              West. We arrange access to surgeons with 3,000+ facelifts
              performed — with no waitlist, through our VIP channel.
            </p>
            <div className="service-stay">Typical stay: 10–14 days</div>
          </div>

          <div className="service-card-primary">
            <div className="service-badge">Primary</div>
            <h3>Hair Transplant (FUE)</h3>
            <p>
              Scar-free, natural hairline design by surgeons who perform this
              procedure exclusively. The world&apos;s most experienced FUE
              specialists are in Seoul. We get you in front of them.
            </p>
            <div className="service-stay">Typical stay: 2–3 days</div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="services-addons reveal">
          <div className="service-card-addon">
            <div className="addon-tag">Add-on</div>
            <h3>Smile Design (Laminate Veneer)</h3>
            <p>
              No drilling. Whiter, perfectly aligned smile in a matter of
              days. Ideal during recovery downtime — maximise your time
              in Seoul.
            </p>
            <div
              className="service-stay"
              style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.8rem' }}
            >
              ✦ Typical stay: 1–3 days
            </div>
          </div>

          <div className="service-card-addon">
            <div className="addon-tag">Add-on</div>
            <h3>Skin Regeneration &amp; Anti-Aging</h3>
            <p>
              Stem cell therapy, BBL, Sofwave — treatments not yet widely
              available in Western markets. Powerful results achievable
              in a single visit.
            </p>
            <div
              className="service-stay"
              style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.8rem' }}
            >
              ✦ Typical stay: 1 day
            </div>
          </div>
        </div>

        <div className="service-note reveal">
          ✦ Exact pricing and required length of stay are confirmed after
          consultation — every case is individual. All consultations are
          free of charge.
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="process">
        <div className="reveal">
          <p className="section-label">The Process</p>
          <h2 className="section-title">How it works.</h2>
          <div className="divider" />
          <p className="section-sub">
            Everything is handled through messaging, email, or our inquiry
            form — at your pace, on your terms.
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
          <div className="divider" />
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item${openFaq === index ? ' open' : ''}`}
            >
              <button className="faq-q" onClick={() => toggleFaq(index)}>
                {faq.q}
                <span className="faq-arrow">+</span>
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
          {/* Left */}
          <div className="contact-left reveal">
            <p
              className="section-label"
              style={{ color: 'rgba(184,151,90,0.8)' }}
            >
              Get in Touch
            </p>
            <h2 className="section-title">
              Start with a private conversation.
            </h2>
            <div className="divider" />
            <p className="section-sub">
              No commitment. No pressure. Tell us what you&apos;re
              considering — we&apos;ll tell you exactly what&apos;s possible.
            </p>

            <div className="contact-detail">
              <div className="contact-item">
                📧&nbsp;
                <a href="mailto:yhkim@apc-seoul.com">yhkim@apc-seoul.com</a>
              </div>
              <div className="contact-item">
                💬&nbsp;
                <a
                  href="https://wa.me/821012345678"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp — available for text enquiries
                </a>
              </div>
              <div className="contact-item">
                🌐&nbsp;
                <span style={{ color: 'rgba(255,255,255,0.38)' }}>
                  apc-seoul.com
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form reveal">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="First name is fine" />
            </div>

            <div className="form-group">
              <label>Email or WhatsApp</label>
              <input type="text" placeholder="How should we reach you?" />
            </div>

            <div className="form-group">
              <label>Procedure of Interest</label>
              <select defaultValue="">
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
              <textarea placeholder="Timeline, budget range, questions — anything helps us prepare a better response." />
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
          </div>
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
