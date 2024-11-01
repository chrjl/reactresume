import classnames from 'classnames';
import styles from './HorizontalList.module.css';

interface Props {
  variant?: 'left' | 'right';
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function HorizontalList({ variant, children, className }: Props) {
  if (!Array.isArray(children)) {
    if (variant === 'right') {
      return (
        <div className={classnames(className, styles.container, styles.right)}>
          {children}
        </div>
      );
    } else {
      return (
        <div className={classnames(className, styles.container, styles.left)}>
          {children}
        </div>
      );
    }
  }

  const list = (
    <ul className={styles.list}>
      {children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  );

  switch (variant) {
    case 'right': {
      return (
        <div className={classnames(className, styles.container, styles.right)}>{list}</div>
      );
    }
    default: {
      return (
        <div className={classnames(className, styles.container, styles.left)}>{list}</div>
      );
    }
  }
}
