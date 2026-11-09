import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Eyebrow from '../components/Eyebrow';
import CoursePathways from '../components/CoursePathways';
import { otherCourses } from '../data/courses';
import { CLUBS, CSHS_ACTIVITIES } from '../data/clubs';
import { PROJECTS } from '../data/projects';
import { clubMeeting, contact, cshs } from '../data/site';

export default function Home() {
  return (
    <>
      <section className="hero">
        <Header />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="mono-kicker">// Hamilton Southeastern High School</div>
            <h1>
              Code at <span>HSE</span>.
            </h1>
            <p>
              Courses, clubs, and an honor society that give you the opportunity to make an impact by building apps that the
              whole school uses. No experience needed.
            </p>
            <div className="hero-actions">
              <a className="btn btn-white" href="#courses">Find your first class</a>
              <a className="btn btn-outline" href="#clubs">Join a club</a>
            </div>
          </div>
          <div className="hero-photos">
            <img className="hero-photo-main" src="/images/hero-excited.jpg" alt="An excited student pointing at a computer screen" />
            <img className="hero-photo-small" src="/images/apcsp-class.jpg" alt="AP Computer Science Principles students in class shirts" />
            <div className="hero-card">
              <div className="hero-card-kicker">HSE APPS + GIRLS WHO CODE</div>
              <div className="hero-card-time">Wednesdays · {clubMeeting.time}</div>
              <div className="hero-card-room">Room {clubMeeting.room}</div>
              {clubMeeting.roomNote && <div className="hero-card-note">{clubMeeting.roomNote}</div>}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="section-tint">
        <div className="container section-pad">
          <Eyebrow>01 · COURSES</Eyebrow>
          <h2 className="h2">Our Computer Science Pathways</h2>
          <Link to="/apcsp" className="rec-banner">
            <div className="rec-banner-text">
              <span className="pill-red pill-lg">RECOMMENDED FOR EVERYONE</span>
              <span>
                We highly recommend every student take <span className="pink">AP Computer Science Principles</span>, no matter
                what your future interest is.
              </span>
            </div>
            <span className="rec-banner-link">Here's why →</span>
          </Link>
          <CoursePathways />
          <p className="muted-note">
            {otherCourses.label} <strong>{otherCourses.name}</strong>, {otherCourses.desc}
          </p>
        </div>
      </section>

      <section id="clubs" className="container section-pad-top">
        <div className="section-head">
          <div>
            <Eyebrow>02 · CLUBS</Eyebrow>
            <h2 className="h2">Clubs</h2>
          </div>
          <div className="meeting-badge">
            <span className="meeting-time">{clubMeeting.time}</span>
            <span className="meeting-text">
              {clubMeeting.day} · {clubMeeting.room}
              <br />
              HSE Apps and Girls Who Code
              {clubMeeting.roomNote && (
                <>
                  <br />
                  <span className="meeting-note">{clubMeeting.roomNote}</span>
                </>
              )}
            </span>
          </div>
        </div>
        <div className="grid grid-clubs">
          {CLUBS.map((club) => {
            const inner = (
              <>
                <img className="club-photo" src={club.image} alt={club.imageAlt} style={{ objectPosition: club.imagePosition }} />
                <div className="card-body">
                  <div className="club-title">
                    {club.logo ? (
                      <img src={club.logo} alt="" className="club-logo" />
                    ) : (
                      club.badge && (
                        <span className="club-logo club-logo-text" style={{ background: club.badge.color }}>
                          {club.badge.text}
                        </span>
                      )
                    )}
                    <h3>{club.name}</h3>
                  </div>
                  <p>{club.desc}</p>
                </div>
              </>
            );
            return club.link ? (
              <a key={club.name} className="card lift" href={club.link}>
                {inner}
              </a>
            ) : (
              <div key={club.name} className="card lift">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section id="honor" className="container section-pad-top">
        <div className="section-head">
          <div className="section-head-text">
            <Eyebrow>03 · HONOR SOCIETY</Eyebrow>
            <h2 className="h2">Computer Science Honor Society</h2>
            <p className="lead">
              CSHS members spread computer science across our community. Membership is by application and open to sophomores
              and above.
            </p>
          </div>
          <div className="honor-actions">
            <span className="apply-badge">
              <small>{cshs.grades}</small>
              <strong>{cshs.applicationNote}</strong>
            </span>
            <a href={cshs.bylawsUrl} className="text-link">By-Laws</a>
          </div>
        </div>
        <div className="grid grid-three">
          {CSHS_ACTIVITIES.map((a) => (
            <div key={a.title} className={a.dark ? 'card card-dark' : 'card'}>
              <img className="activity-photo" src={a.image} alt={a.imageAlt} style={{ objectPosition: a.imagePosition }} />
              <div className="card-body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-soft">
        <div className="container section-pad">
          <Eyebrow>04 · STUDENT BUILT</Eyebrow>
          <h2 className="h2">You've used these. Students made them.</h2>
          <div className="grid grid-apps">
            {PROJECTS.map((p) => {
              const inner = (
                <>
                  <div className="app-shot">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      style={{ objectFit: p.fit ?? 'cover', objectPosition: p.imagePosition ?? 'center', background: p.background }}
                    />
                    {p.former && <span className="former-badge">FORMER APP</span>}
                  </div>
                  <div className="app-name">
                    {p.name}
                    {p.link && ' ↗'}
                  </div>
                  <div className="app-desc">{p.desc}</div>
                </>
              );
              return p.link ? (
                <a key={p.name} className="app" href={p.link}>
                  {inner}
                </a>
              ) : (
                <div key={p.name} className="app app-static">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="container section-pad">
        <div className="contact-box">
          <div className="contact-text">
            <Eyebrow>05 · CONTACT</Eyebrow>
            <h2 className="h2 h2-sm">Want more info?</h2>
            <p className="lead">Questions about courses, clubs, or the Honor Society? Email {contact.name}.</p>
          </div>
          <a className="btn btn-blue btn-large" href={`mailto:${contact.email}`}>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            {contact.email}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
