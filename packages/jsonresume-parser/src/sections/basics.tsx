import type { JSONResumeObject, ResumeEntry } from '@reactresume/types';

export default function parse(
  data: JSONResumeObject['basics']
): ResumeEntry[] {
  if (!data) {
    return [];
  }

  const {
    name,
    label = '',
    email,
    phone,
    url = '',
    profiles = [],
    location = {city: '', region: '', countryCode: ''},
  } = data;
  const { city = '', region = '', countryCode = '' } = location;

  return [
    {
      title: [name],
      subtitle: [label],
      description: [city, region, countryCode],
      note: [phone],
      highlights: [email, url, ...profiles.map((profile) => profile.url)],
    },
  ];
}
