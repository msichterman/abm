import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="sticky top-0 shadow-md z-50">
      <nav className="bg-gradient-to-r from-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 w-full">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <img
                  className="h-12 w-auto"
                  src="/red-white-logo.png"
                  alt="ABM Logo"
                />
                <span className="hidden ml-4 text-red-600 uppercase tracking-wide text-md lg:text-xl font-extrabold xs:block">
                  Athlete Branding & Marketing LLC
                </span>
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="w-full flex items-baseline justify-items-end space-x-4">
                <Link href="/">
                  <a className=" hover:bg-gray-200 text-gray-200 hover:text-gray-700 block px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                    Home
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-200 hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-black to-gray-800">
                <Link href="/">
                  <a className=" hover:bg-gray-200 text-gray-200 hover:text-gray-700 block px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                    Home
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-200 hover:bg-gray-200 hover:text-gray-700 block px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          }
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
