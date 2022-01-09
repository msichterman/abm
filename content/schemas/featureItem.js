export default {
    name: 'featureItem',
    title: 'Feature Item',
    description: 'Share what ABM can do for the athletes using these feature items',
    type: 'document',
    fields: [
      {
        name: 'icon',
        title: 'Icon',
        type: 'string',
        description: 'Head over to https://heroicons.com and copy/paste the name of the desired icon. (e.g. academic-cap)',
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
  