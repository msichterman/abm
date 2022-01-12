import dynamic from 'next/dynamic';

export default function BenefitsSection({ featureItems }) {
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
          {featureItems.map(feature => {
            // Dynamically import the icon
            const Icon = dynamic(async () =>
              {
                const mod = await import('react-icons/hi');
                return mod[feature.icon.name];
              }
            );

            return (
              <div key={feature['_id']}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
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
            );
          })}
        </div>

      </div>
    </div>
  );
}
