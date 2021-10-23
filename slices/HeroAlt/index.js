import React from 'react'
import { RichText, Link } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'

const HeroAlt = ({ slice }) => (
  <section className="bg-white overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
      <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span className="block">{RichText.asText(slice.primary.title)}</span>
      </h1>
      <div className="text-md mt-4 text-gray-400">
        <RichText render={slice.primary.description} />
      </div>
      <div className="mt-5 md:mt-8 md:flex justify-center w-full">
        <NextLink href={Link.url(slice.primary.link)}>
          <div className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-16">
            <span>{slice.primary.linkLabel}</span>
          </div>
        </NextLink>
      </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
      <img
        className="rounded-lg h-auto w-1/2"
        loading="lazy"
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
      />
      <div>
        <img
          className="rounded-lg mb-8 h-auto"
          loading="lazy"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
        />
        <img
          className="rounded-lg h-auto"
          loading="lazy"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
        />
      </div>
    </div>
  </section>
)

export default HeroAlt
