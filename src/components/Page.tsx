import styles from './Page.module.css';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return <div className={styles.page}>{children}</div>;
}
