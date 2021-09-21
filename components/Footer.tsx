import Link from 'next/link'

export default function Footer() {
  return (
    <div className="items-center">
      <footer className="text-red-600 transition duration-500 ease-in-out transform bg-white">
        <div className="flex flex-wrap justify-center p-5">
          <nav className="flex flex-wrap items-center justify-center w-full mx-auto text-base space-x-2">
            <Link href="/">
              <a className="text-red-600 hover:bg-black hover:text-white px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                Home
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-red-600 hover:bg-black hover:text-white px-3 py-2 rounded-md uppercase tracking-wide text-sm font-bold">
                Contact us
              </a>
            </Link>
            <a
              target="_blank"
              href="https://www.instagram.com/athlete_branding_and_marketing/"
            >
              <span className="inline-flex justify-center px-3 py-2 hover:bg-black text-red-600 hover:text-white rounded-md">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </span>
            </a>
            <a target="_blank" href="https://twitter.com/GerrodLambrecht">
              <span className="inline-flex justify-center px-3 py-2 hover:bg-black text-red-600 hover:text-white rounded-md">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </span>
            </a>
          </nav>
        </div>
        <div className="flex align-center w-full px-8 py-6 bg-gradient-to-r from-gray-800 to-black">
          <p className="mx-auto text-center text-white uppercase tracking-wide text-sm">
            {' '}
            <span className="font-bold">
              Athlete Branding & Marketing LLC
            </span>{' '}
            © 2021. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
