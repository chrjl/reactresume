import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

interface ListItemProps {
  type?: string;
  padding?: number;
  children: React.ReactNode | React.ReactNode[];
}

interface Props extends ListItemProps {
  style?: Style | Style[];
}

export default function UnorderedList({
  padding = 30,
  children,
  style: inheritedStyle,
  type = '•',
}: Props) {
  if (children === null || children === undefined) {
    return;
  }

  return (
    <View style={inheritedStyle}>
      {!Array.isArray(children) ? (
        <ListItem type={type} padding={padding}>
          {children}
        </ListItem>
      ) : (
        children.map((child, index) => (
          <ListItem key={index} type={type} padding={padding}>
            {child}
          </ListItem>
        ))
      )}
    </View>
  );
}

function ListItem({ type, padding, children }: ListItemProps) {
  const styles = StyleSheet.create({
    listItem: {
      flexDirection: 'row',
    },
    before: {
      boxSizing: 'border-box',
      width: padding,
      paddingRight: 4,
      textAlign: 'right',
    },
    content: {
      width: '100%',
    },
  });
  return (
    <View style={styles.listItem}>
      <Text style={styles.before}>{type}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}
