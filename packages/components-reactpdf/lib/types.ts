export interface CardProps {
  title?: string | string[];
  subtitle?: string | string[];
  note?: string | string[];
  description?: (React.ReactElement | string)[];
  highlights?: (React.ReactElement | string)[];
}
