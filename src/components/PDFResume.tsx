import { useContext } from 'react';
import { Text, Link, View, Font, StyleSheet } from '@react-pdf/renderer';
import Markdown from 'react-markdown';

import parseJsonResume from '@reactresume/jsonresume-parser';

import { DataContext } from '../contexts/DataContext';
import { DocumentContext } from '../contexts/DocumentContext';
import {
  HeadingCard,
  GridCard,
  StackedCard,
  DescriptionTable,
} from '@reactresume/components-reactpdf';

import Inter from '../assets/Inter-Regular.ttf';
import InterBold from '../assets/Inter-Bold.ttf';
import Roboto from '../assets/Roboto-Regular.ttf';
import RobotoBold from '../assets/Roboto-Bold.ttf';
import Arimo from '../assets/Arimo-Regular.ttf';
import ArimoBold from '../assets/Arimo-Bold.ttf';
import Cousine from '../assets/Cousine-Regular.ttf';
import CousineBold from '../assets/Cousine-Bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [{ src: Roboto }, { src: RobotoBold, fontWeight: 700 }],
});

Font.register({
  family: 'Inter',
  fonts: [{ src: Inter }, { src: InterBold, fontWeight: 700 }],
});

Font.register({
  family: 'Arimo',
  fonts: [{ src: Arimo }, { src: ArimoBold, fontWeight: 700 }],
});

Font.register({
  family: 'Cousine',
  fonts: [{ src: Cousine }, { src: CousineBold, fontWeight: 700 }],
});

Font.registerHyphenationCallback((word) => [word]);

export default function PDFResume() {
  const [jsonResume] = useContext(DataContext);
  const [documentOptions] = useContext(DocumentContext);

  const { spacing, headings } = documentOptions;

  if (!jsonResume) {
    return null;
  }

  const resumeObject = parseJsonResume(jsonResume);
  const basics = resumeObject.basics ? resumeObject.basics[0] : null;
  const { skills, languages, work, projects, education, certificates } =
    resumeObject;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      rowGap: spacing * 10,
    },
    heading: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 5,
      fontFamily: 'Inter',
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: 10,
      justifyContent: 'space-between',
    },
    stacked: {
      rowGap: 10,
    },
    code: {
      fontFamily: 'Cousine',
      fontWeight: 'bold',
      fontSize: 9,
    },
    strong: {
      fontWeight: 'bold',
    },
    em: {},
  });

  const renderers = {
    p: ({ children }: { children?: React.ReactNode }) => (
      <Text>{children}</Text>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <Text style={styles.code}>{children}</Text>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <Text style={styles.strong}>{children}</Text>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <Text style={styles.em}>{children}</Text>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
      <Link src={href}>{children}</Link>
    ),
  };

  return (
    <View style={styles.container}>
      {basics ? (
        <HeadingCard
          title={basics.title}
          subtitle={basics.subtitle}
          note={basics.note}
          description={basics.description}
          highlights={basics.highlights}
        />
      ) : null}

      {(languages && languages.length) || (skills && skills.length) ? (
        <View wrap={false}>
          {headings.skills ? (
            <Text style={styles.heading}>{headings.skills}</Text>
          ) : null}

          <DescriptionTable
            data={[skills || [], languages || []].flat().filter(Boolean)}
          />
        </View>
      ) : null}

      {projects && projects.length ? (
        <View wrap={false}>
          {headings.projects ? (
            <Text style={styles.heading}>{headings.projects}</Text>
          ) : null}

          <View style={styles.grid}>
            {projects.map((entry, index) => (
              <GridCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description?.map((description) => (
                  <Markdown components={renderers}>{description}</Markdown>
                ))}
                highlights={entry.highlights?.map((highlight) => (
                  <Markdown components={renderers}>{highlight}</Markdown>
                ))}
              />
            ))}
          </View>
        </View>
      ) : null}

      {work && work.length ? (
        <View wrap={false}>
          {headings.work ? (
            <Text style={styles.heading}>{headings.work}</Text>
          ) : null}

          <View style={styles.stacked}>
            {work.map((entry, index) => (
              <StackedCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description?.map((description) => (
                  <Markdown components={renderers}>{description}</Markdown>
                ))}
                highlights={entry.highlights?.map((highlight) => (
                  <Markdown components={renderers}>{highlight}</Markdown>
                ))}
              />
            ))}
          </View>
        </View>
      ) : null}

      {education && education.length ? (
        <View wrap={false}>
          {headings.education ? (
            <Text style={styles.heading}>{headings.education}</Text>
          ) : null}

          <View style={styles.grid}>
            {education.map((entry, index) => (
              <GridCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description}
                highlights={entry.highlights}
              />
            ))}
          </View>
        </View>
      ) : null}

      {certificates && certificates.length ? (
        <View wrap={false}>
          {headings.certificates ? (
            <Text style={styles.heading}>{headings.certificates}</Text>
          ) : null}

          <View style={styles.grid}>
            {certificates.map((entry, index) => (
              <GridCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                note={entry.note}
                description={entry.description}
                highlights={entry.highlights}
              />
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}
