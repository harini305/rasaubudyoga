'use client';

import { useState } from 'react';
import { days, sessions, timetableFilters } from '@/content/classes';
import styles from './Timetable.module.css';

export default function Timetable() {
  const [filter, setFilter] = useState(timetableFilters[0]);
  const showAll = filter === timetableFilters[0];
  const visible = showAll ? sessions : sessions.filter((s) => s.filter === filter);

  return (
    <div className={styles.timetable}>
      <div className={styles.filters} role="group" aria-label="Filter the timetable by class">
        {timetableFilters.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={styles.filter}>
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length
          ? `Showing ${visible.length} published session${visible.length === 1 ? '' : 's'} for ${filter}.`
          : `No published sessions for ${filter}.`}
      </p>

      {visible.length === 0 ? (
        <div className={styles.empty}>
          <p>
            No {filter} sessions are listed in the published timetable. Check the live schedule on Momoyoga for current
            classes.
          </p>
        </div>
      ) : (
        <ol className={styles.week} role="list">
          {days.map((day) => {
            const list = visible.filter((s) => s.day === day);
            return (
              <li key={day} className={styles.day} data-empty={list.length ? undefined : 'true'}>
                <h3 className={styles.dayName}>
                  <span className={styles.dayLong}>{day}</span>
                  <span className={styles.dayShort} aria-hidden="true">
                    {day.slice(0, 3)}
                  </span>
                </h3>
                {list.length ? (
                  <ul role="list" className={styles.sessions}>
                    {list.map((s) => (
                      <li key={s.time + s.title} className={styles.session} data-muted={s.muted ? 'true' : undefined}>
                        <span className={styles.time}>{s.time}</span>
                        <span className={styles.title}>{s.title}</span>
                        {s.note && <span className={styles.note}>{s.note}</span>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.none}>
                    <span aria-hidden="true">—</span>
                    <span className="sr-only">No sessions</span>
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
