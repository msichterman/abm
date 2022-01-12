import dynamic from 'next/dynamic';

import { formatPhoneNumber } from '../lib/utils';

export default function ContactSection({ contactItems }) {
  return (
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
            We increase student-athletes’ earning potential while managing their
            brands and personal businesses.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {contactItems.map(contact => {
              const {
                _id,
                icon,
                title,
                addressLine1,
                addressLine2,
                city,
                state,
                zipcode,
                phone,
                email,
              } = contact;
              // Dynamically import the icon
              const Icon = dynamic(async () => {
                const mod = await import('react-icons/hi');
                return mod[icon.name];
              });

              return (
                <div className="relative" key={_id}>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {title}
                    </p>
                  </dt>

                  {addressLine1 && (
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      <p>{addressLine1}</p>
                      {addressLine2 && <p>{addressLine2}</p>}
                      <p>{`${city}, ${state} ${zipcode}`}</p>
                    </dd>
                  )}

                  {phone && (
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      <a
                        className="py-1 px-2 bg-red-100 border rounded border-none"
                        href={`tel:+1${phone}`}
                      >
                        {formatPhoneNumber(phone)}
                      </a>
                    </dd>
                  )}

                  {email && (
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      <a
                        className="py-1 px-2 bg-red-100 border rounded border-none"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
