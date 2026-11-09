import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { COURSES, CourseId, GRADES, PATHWAYS, Pathway } from '../data/courses';

function Tag({ p }: { p: Pathway }) {
  if (!p.tag) return null;
  return <span className={`tag tag-${p.tagStyle ?? 'blue'}`}>{p.tag}</span>;
}

function CourseCard({ id }: { id: CourseId }) {
  const c = COURSES[id];
  const body = (
    <>
      {c.recommended && <span className="pill-red">RECOMMENDED</span>}
      <span className="course-name">{c.name}</span>
      <span className="course-desc">{c.desc}</span>
    </>
  );
  if (c.recommended) {
    return (
      <Link to="/apcsp" className="course-card course-card-rec">
        {body}
      </Link>
    );
  }
  return <div className="course-card">{body}</div>;
}

export default function CoursePathways() {
  return (
    <>
      {/* Desktop and tablet: grid with grades down the side */}
      <div className="pathway-grid-wrap">
        <div className="pathway-grid">
          <div />
          {PATHWAYS.map((p, i) => (
            <div key={i} className="pathway-head">
              <h3>{p.name}</h3>
              <Tag p={p} />
            </div>
          ))}
          {GRADES.map((g, gi) => (
            <Fragment key={g}>
              {gi > 0 && (
                <>
                  <div />
                  {PATHWAYS.map((_, i) => (
                    <div key={i} className="arrow" aria-hidden="true">
                      ↓
                    </div>
                  ))}
                </>
              )}
              <div className="grade-label">
                <span>GRADE</span>
                <strong>{g}</strong>
              </div>
              {PATHWAYS.map((p, i) => (
                <CourseCard key={i} id={p.courses[gi]} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Phones: one card per pathway */}
      <div className="pathway-stack">
        {PATHWAYS.map((p, i) => (
          <div key={i} className="pathway-mobile">
            <div className="pathway-head">
              <h3>{p.name}</h3>
              <Tag p={p} />
            </div>
            {p.courses.map((id, gi) => (
              <Fragment key={gi}>
                {gi > 0 && (
                  <div className="arrow" aria-hidden="true">
                    ↓
                  </div>
                )}
                <div className="mobile-step">
                  <div className="grade-label">
                    <span>GRADE</span>
                    <strong>{GRADES[gi]}</strong>
                  </div>
                  <CourseCard id={id} />
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
