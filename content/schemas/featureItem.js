export default {
    name: 'featureItem',
    title: 'Feature Item',
    description: 'Share what ABM can do for the athletes using these feature items',
    type: 'document',
    fields: [
      {
        name: 'icon',
        title: 'Icon',
        type: 'iconPicker',
        options: {
          providers: ["hi"],
          outputFormat: 'react',
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required(),
      },
    ],
  }
  