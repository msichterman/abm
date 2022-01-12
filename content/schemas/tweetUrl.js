export default {
    name: 'tweetUrl',
    title: 'Tweet URL',
    description: 'Copy and paste Tweet URLs for the Tweets you want to feature',
    type: 'document',
    fields: [
      {
        name: 'url',
        title: 'URL',
        type: 'string',
        description: 'Head over to https://twitter.com and copy/paste a tweet you want to feature',
        validation: Rule => Rule.required(),
      },
    ],
  }
  