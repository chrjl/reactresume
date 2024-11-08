import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

import HorizontalList from './utilities/HorizontalList';
import UnorderedList from './utilities/UnorderedList';
import LinkifiedSpan from './utilities/LinkifiedSpan';
import type { CardProps } from './types';

import rootStyles from './styles';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    columnGap: '20',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 2.5,
  },
  description: {},
  highlights: {
    margin: 0,
  },
  note: {
    marginTop: 5,
  },
});

interface Props extends CardProps {
  style?: Style | Style[];
}

export default function StackedCard({
  title = [],
  subtitle = [],
  note = [],
  description = [],
  highlights = [],
  style: inheritedStyle,
}: Props) {
  title = [title].flat().filter(Boolean);
  subtitle = [subtitle].flat().filter(Boolean);
  note = [note].flat().filter(Boolean);
  description = [description].flat().filter(Boolean);
  highlights = [highlights].flat().filter(Boolean);

  return (
    <View style={inheritedStyle}>
      <View style={styles.header}>
        <Text style={[styles.title, rootStyles.bold]}>{title.join(' ')}</Text>
        {subtitle.length ? (
          <HorizontalList style={rootStyles.content}>
            {subtitle.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </HorizontalList>
        ) : null}
      </View>

      <View style={[styles.body, rootStyles.content]}>
        {description.length ? (
          <View style={styles.description}>
            {description.map((entry, index) => (
              <Text key={index}>{entry}</Text>
            ))}
          </View>
        ) : null}

        {highlights.length ? (
          <UnorderedList style={styles.highlights}>
            {highlights.map((entry, index) => (
              <Text key={index}>{entry}</Text>
            ))}
          </UnorderedList>
        ) : null}

        {note.length ? (
          <HorizontalList style={styles.note}>
            {note.map((entry, index) => (
              <LinkifiedSpan key={index}>{entry}</LinkifiedSpan>
            ))}
          </HorizontalList>
        ) : null}
      </View>
    </View>
  );
}
