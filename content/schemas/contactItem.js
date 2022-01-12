export default {
    name: 'contactItem',
    title: 'Contact Item',
    description: 'Share locations and people that can be contacted.',
    type: 'document',
    groups: [
      {
        name: 'address',
        title: 'Address',
      },
    ],
    fields: [
      {
        name: 'icon',
        title: 'Icon',
        type: 'string',
        description: 'Head over to https://heroicons.com and copy/paste the name of the desired icon. (e.g. academic-cap)',
        validation: Rule => Rule.required(),
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'addressLine1',
        title: 'Address Line 1',
        type: 'string',
        group: 'address',
        description: 'This field is optional.'
      },
      {
        name: 'addressLine2',
        title: 'Address Line 2',
        type: 'string',
        group: 'address',
        hidden: ({document}) => !document?.addressLine1
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        group: 'address',
        hidden: ({document}) => !document?.addressLine1
      },
      {
        name: 'state',
        title: 'State',
        description: 'Please use the state\'s abbreviation (e.g. NE).',
        type: 'string',
        group: 'address',
        hidden: ({document}) => !document?.addressLine1
      },
      {
        name: 'zipcode',
        title: 'Zip Code',
        type: 'string',
        group: 'address',
        hidden: ({document}) => !document?.addressLine1
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
    ],
  }
  