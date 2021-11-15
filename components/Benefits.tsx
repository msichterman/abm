/* This example requires Tailwind CSS v2.0+ */
import {
  CurrencyDollarIcon,
  ReceiptTaxIcon,
  BriefcaseIcon,
  LibraryIcon,
  BookOpenIcon,
  DocumentReportIcon,
  BadgeCheckIcon,
  KeyIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Monthly income',
    description: 'Brands want to work with you and pay you monthly.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Help with taxes',
    description: '"Where do I even start?"... We\'ve got you covered.',
    icon: ReceiptTaxIcon,
  },
  {
    name: 'Set up LLC',
    description:
      'Establish your personal business. We will help you with all the paperwork.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Help with legal',
    description:
      'Trademarks, copyrights, patents, or whatever else you may need.',
    icon: LibraryIcon,
  },
  {
    name: 'Help with accounting',
    description: 'Managing your financials is hard, we have experts for that.',
    icon: BookOpenIcon,
  },
  {
    name: 'Brand management / development',
    description:
      "Whether you're already established or starting from zero, we can help.",
    icon: DocumentReportIcon,
  },
  {
    name: 'Booking deals / assist with fulfillment',
    description: 'Partnerships, meet-and-greets, t-shirt printing.',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Car deals / Merchandise / Licensing / Logos',
    description: 'Drive a new car off the lot, start selling your gear.',
    icon: KeyIcon,
  },
]

export default function Benefits() {
  return (
    <div className="bg-red-600 z-10 relative">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          What we do for the student athlete
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-red-200">
          Provide athletes with the tools necessary to navigate the NIL
          landscape while helping them balance the time commitments of
          academics, sports and business.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-red-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
