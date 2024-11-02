import { useContext } from 'react';
import classnames from 'classnames';

import parseJsonResume from '@reactresume/jsonresume-parser';

import {
  HeadingCard,
  DescriptionTable,
  StackedCard,
  GridCard,
} from '@reactresume/components';

import styles from './Document.module.css';

import { DataContext } from '../contexts/DataContext';

export default function Document() {
  const [jsonResume] = useContext(DataContext);

  if (!jsonResume) {
    return null;
  }

  const resumeObject = parseJsonResume(jsonResume);
  const basics = resumeObject.basics ? resumeObject.basics[0] : null;
  const { skills, languages, work, projects, education, certificates } =
    resumeObject;

  return (
    <>
      {basics ? (
        <HeadingCard
          className={styles.basics}
          title={basics.title}
          subtitle={basics.subtitle}
          note={basics.note}
          description={basics.description}
          highlights={basics.highlights}
        />
      ) : null}

      <DescriptionTable
        className={styles.table}
        data={[skills, languages].flat().filter(Boolean)}
      />

      {projects && projects.length ? (
        <div className="projects">
          <h1 className={classnames(styles.heading, 'heading')}>Projects</h1>
          <div className={styles.grid}>
            {projects.map((entry, index) => (
              <GridCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description}
                highlights={entry.highlights}
              />
            ))}
          </div>
        </div>
      ) : null}

      {work && work.length ? (
        <div className="work">
          <h1 className={classnames(styles.heading, 'heading')}>Work experience</h1>
          <div className={styles.stacked}>
            {work.map((entry, index) => (
              <StackedCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description}
                highlights={entry.highlights}
              />
            ))}
          </div>
        </div>
      ) : null}

      {education && education.length ? (
        <div className="education">
          <h1 className={classnames(styles.heading, 'heading')}>Education</h1>
          <div className={styles.grid}>
            {education.map((entry, index) => (
              <GridCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description}
                highlights={entry.highlights}
              />
            ))}
          </div>
        </div>
      ) : null}

      {certificates && certificates.length ? (
        <div className="certificates">
          <h1 className={classnames(styles.heading, 'heading')}>Certificates</h1>
          <div className={styles.grid}>
            {certificates.map((entry, index) => (
              <GridCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description}
                highlights={entry.highlights}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
