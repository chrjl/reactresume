# @reactresume/types

Exports shared types to describe `reactresume` data.

- `JSONResumeObject`: describes the [JSON Resume schema](https://jsonresume.org/schema), with some extensions/enhancements described below
- `ResumeObject`: describes the standardized schema of `reactresume`, returned after passing the JSON Resume through the project's parser. Sections are composed of `ResumeEntry` objects.
  - `ResumeEntry`: standardized object schema consumed by the component library

## Exports

### `JSONResumeObject`

Each section (besides Basics) is an array of objects namespaced under `JSONResumeEntry`. For example, `JSONResumeObject.skills` is an array of `JSONResumeEntry.Skill` objects.

#### Included sections and extensions to schema

- [x] Basics
- [x] Skills
- [x] Languages
- [x] Education
- [x] Certificates
- [x] Projects  
       : Modify the `url` field to accept either string (original) or array
- [x] Work  
       : Add `department`, `location` fields
- [x] Experience?:
- [ ] Interests
- [ ] Volunteer
- [ ] Awards
- [ ] Publications
- [ ] Interests

New sections:

- [x] Experience  
       : Uses the `Work` schema

#### Extensions to `JSONResumeEntry`

Each object described under `JSONResumeEntry` is extended to include the following metadata described by the `JSONResumeEntryMeta` interface.

- `_display (boolean): true`: whether to include the entry during parsing
- `_tags (string[])`: for grouping entries within the same section

### `ResumeObject`

Each resume section is described by an array of standardized `ResumeEntry` objects. The subsections of each entry can be strings or React components. Any parsing of Markdown (e.g. via `react-markdown` components) or shaping via custom components (e.g. for custom list styles) should be done by the parser.

#### `ResumeEntry`

Supports the following fields, all of which are of type `React.ReactNode`:

- title
- subtitle
- note
- description
- highlights
