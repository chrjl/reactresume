import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

import HorizontalList from './utilities/HorizontalList';
import LinkifiedSpan from './utilities/LinkifiedSpan';
import type { CardProps } from './types';

import rootStyles from './styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 5,
  },
  highlights: {
    margin: 0,
  },
  description: {
    margin: 0,
  },
});

interface Props extends CardProps {
  style?: Style | Style[];
}

export default function HeadingCard({
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
      {title.length ? (
        <Text style={[styles.title, rootStyles.heading]}>
          {title.join(' ')}
        </Text>
      ) : null}

      {subtitle.length ? (
        <Text style={[styles.subtitle, rootStyles.heading]}>
          {subtitle.join(' ')}
        </Text>
      ) : null}

      {highlights.length ? (
        <HorizontalList style={[styles.highlights, rootStyles.content]}>
          {[note, highlights].flat().map((entry, index) => (
            <LinkifiedSpan key={index}>{entry}</LinkifiedSpan>
          ))}
        </HorizontalList>
      ) : null}

      {description.length ? (
        <Text style={[styles.description, rootStyles.content]}>
          {description.join(', ')}
        </Text>
      ) : null}
    </View>
  );
}
