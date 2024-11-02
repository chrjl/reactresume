import classnames from 'classnames';

import HorizontalList from './utilities/HorizontalList';
import LinkifiedSpan from './utilities/LinkifiedSpan';
import type { CardProps } from './types';

import styles from './StackedCard.module.css';

interface Props extends CardProps {
  className?: string;
}

export default function StackedCard({
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
      <div className={styles.header}>
        <span className={classnames(styles.title, 'title', 'bold')}>
          {title.join(' ')}
        </span>
        {subtitle.length ? (
          <span className="subtitle">
            <HorizontalList>{subtitle}</HorizontalList>
          </span>
        ) : null}
      </div>

      <div className={classnames(styles.body, 'body')}>
        {description.length ? (
          <div className="description">
            {description.map((entry, index) => (
              <div key={index}>{entry}</div>
            ))}
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
          <div className={classnames(styles.note, 'note')}>
            <HorizontalList>
              {note.map((entry, index) => (
                <LinkifiedSpan key={index} value={entry} />
              ))}
            </HorizontalList>
          </div>
        ) : null}
      </div>
    </div>
  );
}
