import React from 'react'
import { RichText } from 'prismic-reactjs'

const FullWidthImage = ({ slice }) => (
  <section>
    <img
      className="mx-auto mb-16"
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
    />
  </section>
)

export default FullWidthImage
