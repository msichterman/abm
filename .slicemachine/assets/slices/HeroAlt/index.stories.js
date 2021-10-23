import MyComponent from '../../../../slices/HeroAlt'

export default {
  title: 'slices/HeroAlt',
}

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: 'default-slice',
      name: 'Default slice',
      slice_type: 'hero_alt',
      items: [],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Reintermediate robust networks',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text:
              'Nostrud in aliquip fugiat laboris duis ullamco dolore est elit commodo labore. Id aute non veniam non minim nulla culpa id mollit sunt voluptate ipsum ex amet. Aliqua cillum consequat cupidatat sunt ipsum ex incididunt sint et deserunt ut eu enim officia ullamco.',
            spans: [],
          },
        ],
        link: { link_type: 'Web', url: 'https://prismic.io' },
        linkLabel: 'architect vertical bandwidth',
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url:
            'https://images.unsplash.com/photo-1531265726475-52ad60219627?w=900&h=500&fit=crop',
        },
      },
      id: '_DefaultSlice',
    }}
  />
)
_DefaultSlice.storyName = 'Default slice'
