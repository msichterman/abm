import React from 'react'
import { RichText, Link } from 'prismic-reactjs'
import { default as NextLink } from 'next/link'

const Hero = ({ slice }) => (
  <section>
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full my-16">
      <div className="text-center w-full md:w-1/2">
        <h1 className="text-4xl tracking-tight font-extrabold text-red-600 sm:text-5xl md:text-6xl">
          {RichText.asText(slice.primary.title)}
        </h1>
        <div className="mt-3 text-gray-500 text-xl">
          <RichText render={slice.primary.description} />
        </div>
        <div className="mt-5 md:mt-8 md:flex justify-center w-full">
          <div className="mx-6">
            <NextLink href={Link.url(slice.primary.link)}>
              <div className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-16">
                <span>{slice.primary.linkLabel}</span>
              </div>
            </NextLink>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full mb-8 md:mb-0 md:w-1/2">
        <img
          className="object-cover object-center rounded-lg"
          loading="lazy"
          src={slice.primary.image.url}
          alt={slice.primary.image.alt}
        />
      </div>
    </div>
  </section>
)

export default Hero
