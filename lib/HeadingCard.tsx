import classnames from 'classnames';

import HorizontalList from './utilities/HorizontalList';
import LinkifiedSpan from './utilities/LinkifiedSpan';
import type { CardProps } from './types';

import styles from './HeadingCard.module.css';

interface Props extends CardProps {
  className?: string;
}

export default function HeadingCard({
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
    <div className={className}>
      {title.length ? (
        <h1 className={classnames(styles.title, 'title')}>{title.join(' ')}</h1>
      ) : null}

      {subtitle.length ? (
        <h2 className={classnames(styles.subtitle, 'subtitle')}>
          {subtitle.join(' ')}
        </h2>
      ) : null}

      {highlights.length ? (
        <div className={classnames(styles.highlights, 'highlights')}>
          <HorizontalList>
            {[note, highlights].flat().map((entry, index) => (
              <LinkifiedSpan value={entry} key={index} />
            ))}
          </HorizontalList>
        </div>
      ) : null}

      {description.length ? (
        <div className={classnames(styles.description, 'description')}>
          {description.join(', ')}
        </div>
      ) : null}
    </div>
  );
}
