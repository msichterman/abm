import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="text-gray-700 my-12">

      <div className="text-center w-full">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Athlete Branding &</span>{' '}
                <span className="block text-red-600 xl:inline">Marketing LLC</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 text-xl">
              We help student-athletes maximize their Name, Image, & Likeness (NIL) income opportunities.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Learn more
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          
          <div className="flex items-center justify-center mt-4 p-4">
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">ABM is live! Excited to announce our first two clients: <a href="https://twitter.com/MartinezTheQB?ref_src=twsrc%5Etfw">@MartinezTheQB</a> &amp; <a href="https://twitter.com/CamTaylorBritt5?ref_src=twsrc%5Etfw">@CamTaylorBritt5</a> <a href="https://twitter.com/hashtag/PoweredByABM?src=hash&amp;ref_src=twsrc%5Etfw">#PoweredByABM</a> <a href="https://t.co/9GGftm2lUG">pic.twitter.com/9GGftm2lUG</a></p>&mdash; Gerrod Lambrecht (@GerrodLambrecht) <a href="https://twitter.com/GerrodLambrecht/status/1428807037849329664?ref_src=twsrc%5Etfw">August 20, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"/>
            </div>
      </section>
    </Layout>
  )
}
