import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

import HorizontalList from './utilities/HorizontalList';
import UnorderedList from './utilities/UnorderedList';
import LinkifiedSpan from './utilities/LinkifiedSpan';
import type { CardProps } from './types';

import rootStyles from './styles';

interface Props extends CardProps {
  width?: number | string;
  style?: Style | Style[];
}

export default function GridCard({
  title = [],
  subtitle = [],
  note = [],
  description = [],
  highlights = [],
  width = 265,
  style: inheritedStyle,
}: Props) {
  title = [title].flat().filter(Boolean);
  subtitle = [subtitle].flat().filter(Boolean);
  note = [note].flat().filter(Boolean);
  description = [description].flat().filter(Boolean);
  highlights = [highlights].flat().filter(Boolean);

  const styles = StyleSheet.create({
    container: {
      width,
    },
    title: {
      fontSize: '11',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    subtitle: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      columnGap: 10,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#4b5563',
    },
    body: {
      marginTop: 0.25,
    },
    highlights: {
      margin: 0,
    },
    note: {
      padding: 0,
      marginTop: 5,
      marginBottom: 0,
      fontSize: 9,
    },
  });

  const containerStyle = inheritedStyle
    ? [inheritedStyle, styles.container].flat()
    : styles.container;

  return (
    <View style={containerStyle}>
      <Text style={[styles.title, rootStyles.bold]}>{title.join(' ')}</Text>
      {subtitle.length ? (
        <View style={[styles.subtitle, rootStyles.content]}>
          {subtitle.map((entry, index) => (
            <Text key={index}>{entry}</Text>
          ))}
        </View>
      ) : null}

      <View style={[styles.body, rootStyles.content]}>
        {description.length ? (
          <HorizontalList>
            {description.map((entry, index) => (
              <Text key={index}>{entry}</Text>
            ))}
          </HorizontalList>
        ) : null}

        {highlights.length ? (
          <UnorderedList style={styles.highlights} padding={12.5}>
            {highlights.map((entry, index) => (
              <Text key={index}>{entry}</Text>
            ))}
          </UnorderedList>
        ) : null}

        {note.length ? (
          <View style={styles.note}>
            {note.map((entry, index) => (
              <li key={index}>
                <LinkifiedSpan>{entry}</LinkifiedSpan>
              </li>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
}
