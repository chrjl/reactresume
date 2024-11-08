import { Text, Link } from '@react-pdf/renderer';

import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

interface Props {
  children: string;
}

export default function LinkifiedSpan({ children }: Props) {
  if (isEmail(children)) {
    return <Link src={`mailto:${children}`}>{children}</Link>;
  } else if (isURL(children)) {
    return <Link src={children}>{children}</Link>;
  }

  return <Text>{children}</Text>;
}
