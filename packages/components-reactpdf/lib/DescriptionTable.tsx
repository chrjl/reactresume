import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

import type { CardProps } from './types';

import rootStyles from './styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    columnGap: 2.5,
  },
  entry: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },
  term: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '20%',
  },
  description: {
    width: '80%',
  },
});

interface Props {
  data: CardProps[];
  className?: string;
  style?: Style | Style[];
}

export default function DescriptionTable({
  data,
  style: inheritedStyle,
}: Props) {
  const containerStyle = inheritedStyle
    ? [inheritedStyle, styles.container].flat()
    : styles.container;

  return (
    <View style={containerStyle}>
      {data.map(({ title, description }, index) => (
        <View key={index} style={styles.entry}>
          <Text style={[styles.term, rootStyles.bold]}>
            {Array.isArray(title) ? title.join(' ') : title}
          </Text>
          {description && (
            <Text style={[styles.description, rootStyles.content]}>
              {Array.isArray(description)
                ? description.join(', ')
                : description}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
}
