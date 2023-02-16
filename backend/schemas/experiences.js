export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'workExperience',
      title: 'Work Experience',
      type: 'array',
      of: [{type: 'workExperience'}],
    },
  ],
}
