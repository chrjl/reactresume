import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  bold: {
    fontFamily: 'Arimo',
    fontWeight: 'bold',
  },
  uppercase: {
    fontFamily: 'Arimo',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: 10,
  },
});

export default styles;
