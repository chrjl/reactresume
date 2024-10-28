# @reactresume/types

Exports shared types to describe `reactresume` data.

- `JSONResumeObject`: describes the [JSON Resume schema](https://jsonresume.org/schema)
- `ResumeObject`: describes the standardized schema of `reactresume`, returned after parsing the JSON Resume. Sections are composed of `ResumeEntry` objects.
  - `ResumeEntry`: standardized object schema consumed by the component library

## Exports

### `JSONResumeObject`

Each section is an array of objects namespaced under `JSONResumeEntry`. For example, `JSONResumeObject.skills` is an array of `JSONResumeEntry.Skill` objects.

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
- [ ] Interests
- [ ] Volunteer
- [ ] Awards
- [ ] Publications
- [ ] Interests

### `ResumeObject`

Each resume section is described by an array of standardized `ResumeEntry` objects. The subsections of each entry should all be arrays of strings. Any parsing of Markdown (e.g. via `react-markdown` components) or shaping via custom components (e.g. for custom list styles) should be done post-parsing.

#### `ResumeEntry`

Supports the following fields, all of which should be of type `string[]`:

- title
- subtitle
- note
- description
- highlights
