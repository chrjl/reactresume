import {
  HorizontalList,
  LinkifiedSpan,
  HeadingCard,
  DescriptionTable,
  StackedCard,
  GridCard,
} from '../lib/main';
import sampleData from './assets/sample-card-data.json';
import loremArr from './assets/lorem-array.json';
import styles from './App.module.css';

const { title, subtitle, note, description, highlights } = sampleData;

function App() {
  return (
    <>
      <h1>Utility components</h1>

      <h2>Horizontal List</h2>
      <div>
        Single child:
        <HorizontalList className={styles.example}>
          <div>child</div>
        </HorizontalList>
      </div>
      <div>
        Left variant:
        <HorizontalList className={styles.example}>
          {loremArr.map((entry, index) => (
            <span key={index}>{entry}</span>
          ))}
        </HorizontalList>
      </div>
      <div>
        Right variant:
        <HorizontalList variant="right" className={styles.example}>
          {loremArr.map((entry, index) => (
            <span key={index}>{entry}</span>
          ))}
        </HorizontalList>
      </div>

      <h2>Linkified Span</h2>

      <ul>
        <li>
          String:
          <span className={styles.example}>
            <LinkifiedSpan value="string" />
          </span>
        </li>
        <li>
          URL:
          <span className={styles.example}>
            <LinkifiedSpan value="https://example.com" />
          </span>
        </li>
        <li>
          Email:
          <span className={styles.example}>
            <LinkifiedSpan value="example@example.com" />
          </span>
        </li>
      </ul>

      <h1>Display components</h1>

      <h2>Heading Card</h2>
      <HeadingCard
        title={title}
        subtitle={subtitle}
        note={note}
        description={description}
        highlights={highlights}
        className={styles.example}
      />

      <h2>Description Table</h2>
      <DescriptionTable
        data={[sampleData, sampleData]}
        className={styles.example}
      />

      <h2>Stacked Card</h2>
      <StackedCard
        title={title}
        subtitle={subtitle}
        note={note}
        description={description}
        highlights={highlights}
        className={styles.example}
      />

      <h2>Grid Card</h2>
      <div className={styles.grid}>
        {Array(4).fill(
          <GridCard
            title={title}
            subtitle={subtitle}
            note={note}
            description={description}
            highlights={highlights}
            className={styles.example}
          />
        )}
      </div>

      <h1>Sample data</h1>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </>
  );
}

export default App;
