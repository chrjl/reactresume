import { Fragment } from 'react';
import classnames from 'classnames';

import type { CardProps } from './types';

import styles from './DescriptionTable.module.css';

interface Props {
  data: CardProps[];
  className?: string;
}

export default function DefinitionTable({ data, className }: Props) {
  return (
    <dl className={classnames(styles.container, className)}>
      {data.map(({ title, description }, index) => (
        <Fragment key={index}>
          <dt className={classnames(styles.term, 'bold')}>
            {Array.isArray(title) ? title.join(' ') : title}
          </dt>
          {description && (
            <dd className={styles.description}>
              {Array.isArray(description)
                ? description.join(', ')
                : description}
            </dd>
          )}
        </Fragment>
      ))}
    </dl>
  );
}
