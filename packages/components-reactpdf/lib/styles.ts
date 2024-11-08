import { StyleSheet, Font } from '@react-pdf/renderer';
import Inter from './assets/Inter-Regular.ttf';
import InterBold from './assets/Inter-Bold.ttf';
import Roboto from './assets/Roboto-Regular.ttf';
import RobotoBold from './assets/Roboto-Bold.ttf';
import Arimo from './assets/Arimo-Regular.ttf';
import ArimoBold from './assets/Arimo-Bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [{ src: Roboto }, { src: RobotoBold, fontWeight: 700 }],
});

Font.register({
  family: 'Inter',
  fonts: [{ src: Inter }, { src: InterBold, fontWeight: 700 }],
});

Font.register({
  family: 'Arimo',
  fonts: [{ src: Arimo }, { src: ArimoBold, fontWeight: 700 }],
});

Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
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
