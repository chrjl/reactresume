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
import { DocumentContext } from '../contexts/DocumentContext';

export default function Document() {
  const [jsonResume] = useContext(DataContext);
  const [documentOptions] = useContext(DocumentContext);

  const { headings } = documentOptions;

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

      {(languages && languages.length) || (skills && skills.length) ? (
        <div className="skills">
          {headings.skills ? (
            <h1 className={classnames(styles.heading, 'heading')}>
              {headings.skills}
            </h1>
          ) : null}

          <DescriptionTable
            className={styles.table}
            data={[skills || [], languages || []].flat().filter(Boolean)}
          />
        </div>
      ) : null}

      {projects && projects.length ? (
        <div className="projects">
          {headings.projects ? (
            <h1 className={classnames(styles.heading, 'heading')}>
              {headings.projects}
            </h1>
          ) : null}

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
          {headings.work ? (
            <h1 className={classnames(styles.heading, 'heading')}>
              {headings.work}
            </h1>
          ) : null}

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
          {headings.education ? (
            <h1 className={classnames(styles.heading, 'heading')}>
              {headings.education}
            </h1>
          ) : null}

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
          {headings.certificates ? (
            <h1 className={classnames(styles.heading, 'heading')}>
              {headings.certificates}
            </h1>
          ) : null}

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
