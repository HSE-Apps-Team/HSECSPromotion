import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import { aiTopics, facts, nextSteps, quotes, reasons, skills, units } from '../data/apcsp';
import { contact } from '../data/site';

export default function ApCsp() {
  const [i, setI] = useState(0);
  const n = quotes.length;
  const idx = ((i % n) + n) % n;
  const quote = quotes[idx];

  return (
    <>
      <section className="hero">
        <Header />
        <div className="container hero-apcsp">
          <Link to="/#courses" className="back-link">← All courses</Link>
          <div className="apcsp-top">
            <div className="apcsp-intro">
              <span className="pill-red pill-lg">RECOMMENDED FOR EVERY STUDENT</span>
              <h1>AP Computer Science Principles</h1>
              <p>
                Whether you want to be a doctor, an engineer, or an artist, technology will be part of it. This is the one class we
                think every HSE student should take.
              </p>
            </div>
            <div className="facts">
              {facts.map((f) => (
                <div key={f.label} className="fact">
                  <div className="fact-label">{f.label}</div>
                  <div className="fact-value">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad-top">
        <Eyebrow>WHY EVERYONE</Eyebrow>
        <h2 className="h2">No coding experience needed.</h2>
        <div className="grid grid-three">
          {reasons.map((r, ri) => (
            <div key={r.title} className="reason">
              <div className="reason-num">{String(ri + 1).padStart(2, '0')}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-pad-top learn">
        <div className="learn-text">
          <Eyebrow>WHAT YOU'LL LEARN · UPDATED FOR FALL 2027</Eyebrow>
          <h2 className="h2">Five units.</h2>
          <div className="units">
            {units.map((u) => (
              <div key={u.code} className="unit">
                <span className="unit-code">{u.code}</span>
                <div>
                  <div className="unit-name">{u.name}</div>
                  <div className="unit-desc">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="learn-photos">
          <img className="learn-tile" src="/images/apcsp-tile.png" alt="AP Computer Science Principles course icon: a laptop, flowchart, and light bulb" />
          <img src="/images/apcsp-code.jpg" alt="A student's colorful circle program" />
          <img src="/images/apcsp-classroom.jpg" alt="AP Computer Science Principles classroom" />
        </div>
      </section>

      <section className="container section-pad-top">
        <div className="navy-panel grid-bg">
          <span className="pill-red pill-lg">NEW FOR FALL 2027</span>
          <h2 className="h2 h2-light">AI is now part of the course.</h2>
          <p className="lead lead-light">
            College Board updated AP Computer Science Principles so you learn to build with AI tools and understand how they work.
          </p>
          <div className="grid grid-four">
            {aiTopics.map((t) => (
              <div key={t.title} className="glass-card">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="skills-label">SKILLS YOU'LL PRACTICE ALL YEAR</div>
          <div className="skills">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad-top">
        <div className="navy-panel quote-panel">
          <div className="quote-head">
            <Eyebrow light>FROM STUDENTS WHO TOOK IT</Eyebrow>
            <div className="quote-buttons">
              <button type="button" aria-label="Previous quote" onClick={() => setI(idx - 1)}>←</button>
              <button type="button" aria-label="Next quote" onClick={() => setI(idx + 1)}>→</button>
            </div>
          </div>
          <blockquote aria-live="polite">"{quote.text}"</blockquote>
          <span className="quote-author">
            {quote.author} · {idx + 1} of {n}
          </span>
        </div>
      </section>

      <section className="container section-pad">
        <h2 className="h2 h2-sm">Where it leads</h2>
        <div className="grid grid-two">
          {nextSteps.map((s) => (
            <Link key={s.title} to="/#courses" className="lead-card">
              <div className="lead-card-title">{s.title}</div>
              <div className="lead-card-steps">
                {s.steps.map((step) => (
                  <div key={step}>{step}</div>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <p className="muted-note">
          Ready to sign up? Talk to your counselor when you pick classes. Questions? Email {contact.name} at{' '}
          <a href={`mailto:${contact.email}`}><strong>{contact.email}</strong></a>.
        </p>
      </section>

      <Footer />
    </>
  );
}
