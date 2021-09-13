export default function MailingList() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-xl font-medium text-gray-900 sm:text-3xl">
          <span className="block uppercase tracking-wide text-sm font-bold">
            Want to stay in the loop?
          </span>
          <span className="block text-gray-100 text-lg font-light leading-relaxed tracking-tight">
            Join the mailing list to be the first to hear about new partners,
            opportunities, and more.
          </span>
        </h2>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-100 hidden"
          >
            Email
          </label>
          <div className="mt-3 relative rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-gray-900 focus:border-gray-900 block w-full pl-4 pr-16 sm:text-sm border-gray-100 rounded-md"
              placeholder="name@example.com"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
