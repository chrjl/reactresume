import classnames from 'classnames';

import HorizontalList from './utilities/HorizontalList';
import LinkifiedSpan from './utilities/LinkifiedSpan';
import type { CardProps } from './types';

import styles from './GridCard.module.css';

interface Props extends CardProps {
  className?: string;
}

export default function GridCard({
  title = [],
  subtitle = [],
  note = [],
  description = [],
  highlights = [],
  className,
}: Props) {
  title = [title].flat().filter(Boolean);
  subtitle = [subtitle].flat().filter(Boolean);
  note = [note].flat().filter(Boolean);
  description = [description].flat().filter(Boolean);
  highlights = [highlights].flat().filter(Boolean);

  return (
    <div className={classnames(styles.container, className)}>
      <div className={classnames(styles.heading, 'heading')}>
        <span className={classnames(styles.title, 'title', 'uppercase')}>
          {title.join(' ')}
        </span>
        {subtitle.length ? (
          <ul className={classnames(styles.subtitle, 'subtitle', 'uppercase')}>
            {subtitle.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className={classnames(styles.body, 'body')}>
        {description.length ? (
          <div className="description">
            <HorizontalList>{description}</HorizontalList>
          </div>
        ) : null}

        {highlights.length ? (
          <ul className={classnames(styles.highlights, 'highlights')}>
            {highlights.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        ) : null}

        {note.length ? (
          <ul className={classnames(styles.note, 'note')}>
            {note.map((entry, index) => (
              <li key={index}>
                <LinkifiedSpan value={entry} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
