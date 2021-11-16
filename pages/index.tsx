import Link from 'next/link'
import Tweet from '../components/Tweet'
import { getTweets } from '../lib/twitter'
import Layout from '../components/Layout'
import Benefits from '../components/Benefits'
import { OfficeBuildingIcon, AtSymbolIcon } from '@heroicons/react/outline'

export default function Home({ tweets }) {
  return (
    <Layout>
      <>
        <section className="text-gray-700 my-12 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto container">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full my-16">
            <div className="text-center md:text-left w-full md:w-1/2">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Athlete Branding &</span>{' '}
                <span className="block text-red-600 xl:inline">
                  Marketing LLC
                </span>
              </h1>
              <p className="mt-3 text-gray-500 text-xl px-8 md:px-0">
                A student-athlete representation company assisting athletes in
                maximizing their NIL opportunities through an active
                representation model.
              </p>
              <div className="mt-5 md:mt-8 md:flex justify-center md:justify-start w-full">
                <div className="mx-6 md:mx-0">
                  <Link href="/contact">
                    <div className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-16">
                      Contact us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full mb-8 md:mb-0 md:w-1/2 pl-0 md:pl-16">
              <img
                className="object-cover object-center rounded-lg max-w-sm mx-auto w-1/2 md:w-full z-20"
                alt="hero"
                loading="lazy"
                src="/black-red-logo.png"
              />
            </div>
          </div>
        </section>

        <Benefits />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 mt-16 container">
          <div className="py-12 bg-white rounded-lg border border-gray-300 px-4 sm:px-8 lg:px-14 mx-auto">
            <div className="lg:text-center">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                Join the family
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Are you an athlete? Let's get in touch!
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We are based out of the Historic Haymarket District in Lincoln,
                Nebraska.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <OfficeBuildingIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      The Office
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    201 N 8th St <br />
                    Suite 202 <br />
                    Lincoln, NE 68508
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Gerrod Lambrecht
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    <a href="tel:+14022191580">(402) 310-5756</a>
                    <br />
                    <a href="mailto:gerrod@abmusa.org">gerrod@abmusa.org</a>
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Megan Taylor
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    <a href="tel:+13215433760">(321) 543-3760</a>
                    <br />
                    <a href="mailto:megan@abmusa.org">megan@abmusa.org</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <Tweets tweets={tweets} />
      </>
    </Layout>
  )
}

function Tweets({ tweets }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto my-16 px-4 sm:px-8 lg:px-14 container">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
        <span className="block text-red-600">Keep an eye on our athletes!</span>
        <span className="block">ABM in the media.</span>
      </h2>

      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  let tweets = await getTweets([
    '1428807037849329664',
    '1438576669988642816',
    '1435673108611014667',
    '1444809342583181314',
    '1446212840596152335',
  ])

  return { props: { tweets } }
}
