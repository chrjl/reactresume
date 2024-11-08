import { Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';

interface Props {
  variant?: 'left' | 'right';
  separator?: string;
  separatorWidth?: number;
  children: string | React.ReactElement | React.ReactElement[];
  style?: Style | Style[];
}

export default function HorizontalList({
  variant = 'left',
  separator = '|',
  separatorWidth = 20,
  children,
  style: inheritedStyle,
}: Props) {
  const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
    },
    separator: {
      width: separatorWidth,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    item: {
      flexDirection: 'row',
    },
    left: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: -separatorWidth,
    },
    right: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      marginRight: -separatorWidth,
    },
  });

  const containerStyle = inheritedStyle
    ? [inheritedStyle, styles.container].flat()
    : styles.container;

  if (!Array.isArray(children) || children.length === 1) {
    if (typeof children === 'string') {
      return <Text style={containerStyle}>{children}</Text>;
    } else {
      return <View style={containerStyle}>{children}</View>;
    }
  }

  if (variant === 'right') {
    return (
      <View style={containerStyle}>
        <View style={styles.right}>
          {children.map((child, index) => (
            <View key={index} style={styles.item}>
              {child}
              <Text style={styles.separator}>{separator}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <View style={styles.left}>
        {children.map((child, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.separator}>{separator}</Text>
            {child}
          </View>
        ))}
      </View>
    </View>
  );
}
