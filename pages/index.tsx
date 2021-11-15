import Link from 'next/link'
import Tweet from '../components/Tweet'
import { getTweets } from '../lib/twitter'
import Layout from '../components/Layout'
import { OfficeBuildingIcon, AtSymbolIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home({ tweets }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">
                        Athlete Branding & Management
                      </span>
                      <img
                        // className="h-8 w-auto sm:h-10"
                        className="h-12 w-auto"
                        src="/red-logo.png"
                        alt="ABM Logo"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:text-red-500"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-red-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block text-red-600 xl:inline">
                  online business
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="ABMHero.png"
          alt=""
        />
      </div>
    </div>
    // <Layout>
    //   <section className="text-gray-700 my-12">
    //     <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full my-16">
    //       <div className="text-center w-full md:w-1/2">
    //         <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    //           <span className="block xl:inline">Athlete Branding &</span>{' '}
    //           <span className="block text-red-600 xl:inline">
    //             Marketing LLC
    //           </span>
    //         </h1>
    //         <p className="mt-3 text-gray-500 text-xl">
    //           We help student-athletes maximize their Name, Image, & Likeness
    //           (NIL) income opportunities.
    //         </p>
    //         <div className="mt-5 md:mt-8 md:flex justify-center w-full">
    //           <div className="mx-6">
    //             <Link href="/contact">
    //               <div className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-16">
    //                 Contact us
    //               </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-center w-full mb-8 md:mb-0 md:w-1/2">
    //         <img
    //           className="object-cover object-center rounded-lg"
    //           alt="hero"
    //           loading="lazy"
    //           src="/ABMHero.png"
    //         />
    //       </div>
    //     </div>

    //     <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    //       <div className="sm:text-center lg:text-left">
    //         <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    //           <span className="block xl:inline">Data to enrich your</span>{' '}
    //           <span className="block text-red-600 xl:inline">
    //             online business
    //           </span>
    //         </h1>
    //         <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
    //           Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    //           lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    //           fugiat aliqua.
    //         </p>
    //         <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //           <div className="rounded-md shadow">
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
    //             >
    //               Get started
    //             </a>
    //           </div>
    //           <div className="mt-3 sm:mt-0 sm:ml-3">
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
    //             >
    //               Live demo
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //     <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    //       <img
    //         className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    //         src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    //         alt=""
    //       />
    //     </div>

    //     <div className="py-12 bg-white rounded-lg mt-16 border border-gray-300">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="lg:text-center">
    //           <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
    //             Join the family
    //           </h2>
    //           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    //             Are you an athlete? Let's get in touch!
    //           </p>
    //           <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
    //             We are based out of the Historic Haymarket District in Lincoln,
    //             Nebraska.
    //           </p>
    //         </div>

    //         <div className="mt-10">
    //           <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
    //             <div className="relative">
    //               <dt>
    //                 <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
    //                   <OfficeBuildingIcon
    //                     className="h-6 w-6"
    //                     aria-hidden="true"
    //                   />
    //                 </div>
    //                 <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
    //                   The Office
    //                 </p>
    //               </dt>
    //               <dd className="mt-2 ml-16 text-base text-gray-500">
    //                 201 N 8th St <br />
    //                 Suite 202 <br />
    //                 Lincoln, NE 68508
    //               </dd>
    //             </div>

    //             <div className="relative">
    //               <dt>
    //                 <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
    //                   <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
    //                 </div>
    //                 <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
    //                   Gerrod Lambrecht
    //                 </p>
    //               </dt>
    //               <dd className="mt-2 ml-16 text-base text-gray-500">
    //                 <a href="tel:+14022191580">(402) 219-1580</a>
    //                 <br />
    //                 <a href="mailto:gerrod@abmusa.org">gerrod@abmusa.org</a>
    //               </dd>
    //             </div>

    //             <div className="relative">
    //               <dt>
    //                 <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
    //                   <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
    //                 </div>
    //                 <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
    //                   Megan Taylor
    //                 </p>
    //               </dt>
    //               <dd className="mt-2 ml-16 text-base text-gray-500">
    //                 <a href="tel:+13215433760">(321) 543-3760</a>
    //                 <br />
    //                 <a href="mailto:megan@abmusa.org">megan@abmusa.org</a>
    //               </dd>
    //             </div>
    //           </dl>
    //         </div>
    //       </div>
    //     </div>

    //     <Tweets tweets={tweets} />
    //   </section>
    // </Layout>
  )
}

function Tweets({ tweets }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto my-16">
      <h2 className="text-red-600 uppercase tracking-wider font-bold mb-4 text-2xl text-center">
        ABM works with athletes to maximize their NIL income opportunities. Here
        are some of our clients and partners!
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
