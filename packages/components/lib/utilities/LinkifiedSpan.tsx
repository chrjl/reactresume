import isEmail from 'validator/lib/isEmail';
import isURL from 'validator/lib/isURL';

interface Props {
  value: string;
}

export default function LinkifiedSpan({ value }: Props) {
  if (isEmail(value)) {
    return <a href={`mailto:${value}`}>{value}</a>;
  } else if (isURL(value)) {
    return (
      <a href={value} target="_blank">
        {value}
      </a>
    );
  }

  return <span>{value}</span>;
}
