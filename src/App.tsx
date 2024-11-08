import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import {
  HorizontalList,
  UnorderedList,
  LinkifiedSpan,
  HeadingCard,
  DescriptionTable,
  StackedCard,
  GridCard,
} from '../lib/main';
import sampleData from './assets/sample-card-data.json';
import loremArr from './assets/lorem-array.json';

const { title, subtitle, note, description, highlights } = sampleData;

const styles = StyleSheet.create({
  page: {
    padding: '0.5in',
    fontSize: 12,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 10,
    marginTop: 28,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    justifyContent: 'space-between',
  },
  example: {
    backgroundColor: 'lightgray',
    marginVertical: '5',
  },
});

function App() {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page size="LETTER" style={styles.page}>
          <View wrap={false}>
            <Text style={styles.h1}>Horizontal List</Text>
            <Text style={styles.h2}>Plain text child</Text>
            <HorizontalList style={styles.example}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore consequatur provident, necessitatibus commodi similique
              deleniti. Nobis aperiam perferendis quas quod cumque laudantium
              saepe incidunt enim nesciunt maxime. Rem, suscipit itaque?
            </HorizontalList>

            <Text style={styles.h2}>Single Element child</Text>
            <HorizontalList style={styles.example}>
              <Text>Child</Text>
            </HorizontalList>

            <Text style={styles.h2}>Left variant</Text>
            <HorizontalList style={styles.example}>
              {loremArr.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </HorizontalList>

            <Text style={styles.h2}>Right variant</Text>
            <HorizontalList variant="right" style={styles.example}>
              {loremArr.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </HorizontalList>
          </View>

          <View wrap={false}>
            <Text style={styles.h1}>Linkified Span</Text>
            <Text style={styles.h2}>String</Text>
            <View style={styles.example}>
              <LinkifiedSpan>string</LinkifiedSpan>
            </View>
            <Text style={styles.h2}>Email</Text>
            <View style={styles.example}>
              <LinkifiedSpan>example@example.com</LinkifiedSpan>
            </View>
            <Text style={styles.h2}>URL</Text>
            <View style={styles.example}>
              <LinkifiedSpan>https://example.com</LinkifiedSpan>
            </View>
          </View>

          <View wrap={false}>
            <Text style={styles.h1}>Unordered List</Text>
            <UnorderedList style={styles.example}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Text>
              <Text>
                Dolorum veniam ad molestiae blanditiis eum illum ducimus
                exercitationem ex in accusamus quibusdam, a quam dolores
                voluptas maiores commodi quos reiciendis minima.
              </Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </UnorderedList>
            <UnorderedList style={styles.example} padding={15}>
              <Text>
                Cumque quaerat ea non esse temporibus voluptatum officia
                delectus illum rerum iusto, quo, aspernatur voluptatibus quae
                labore quisquam. Minus similique non maiores?
              </Text>
            </UnorderedList>
          </View>

          <View wrap={false}>
            <Text style={styles.h1}>Heading Card</Text>
            <HeadingCard
              title={title}
              subtitle={subtitle}
              note={note}
              description={description}
              highlights={highlights}
              style={styles.example}
            />
          </View>

          <View wrap={false}>
            <Text style={styles.h1}>Stacked Card</Text>
            <StackedCard
              title={title}
              subtitle={subtitle}
              note={note}
              description={description}
              highlights={highlights}
              style={styles.example}
            />
          </View>

          <View wrap={false}>
            <Text style={styles.h1}>Grid Card</Text>
            <View style={[styles.example, styles.grid]}>
              <GridCard
                title={title}
                subtitle={subtitle}
                note={note}
                description={description}
                highlights={highlights}
              />
              <GridCard
                title={title}
                subtitle={subtitle}
                note={note}
                description={description}
                highlights={highlights}
              />
              <GridCard
                title={title}
                subtitle={subtitle}
                note={note}
                description={description}
                highlights={highlights}
              />
              <GridCard
                title={title}
                subtitle={subtitle}
                note={note}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ipsam non blanditiis labore vero hic libero, ratione quod atque illo soluta, odit corporis aspernatur inventore temporibus pariatur alias! Ratione, tempora."
                highlights={highlights}
              />
            </View>
          </View>

          <View wrap={false}>
            <Text style={styles.h1}>Description Table</Text>
            <DescriptionTable
              data={[
                sampleData,
                {
                  title: 'Lorem ipsum',
                  description:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum in placeat dolor expedita, modi distinctio? Accusamus, minus debitis maxime aperiam porro architecto! Alias commodi doloremque molestiae eligendi, dolorem iure sapiente.',
                },
              ]}
              style={styles.example}
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default App;
