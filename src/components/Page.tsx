import { useContext } from 'react';
import styled from '@emotion/styled';

import { DocumentContext } from '../contexts/DocumentContext';
import styles from './Page.module.css';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  const [documentOptions] = useContext(DocumentContext);
  const { spacing } = documentOptions;

  const Layout = styled.div({
    display: 'flex',
    flexDirection: 'column',
    rowGap: `${spacing}rem`,
  });

  return <Layout className={styles.page}>{children}</Layout>;
}
