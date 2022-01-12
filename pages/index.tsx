import Link from 'next/link';
import Tweet from '../components/Tweet';
import { getTweets } from '../lib/twitter';
import Layout from '../components/Layout';
import BenefitsSection from '../components/BenefitsSection';
import ContactSection from '../components/ContactSection';
import {
  getAllContactItems,
  getAllFeatureItems,
  getAllTweetUrls,
} from '../lib/api';

export default function Home({ featureItems, contactItems, tweets }) {
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

        <BenefitsSection featureItems={featureItems} />

        <ContactSection contactItems={contactItems} />

        <Tweets tweets={tweets} />
      </>
    </Layout>
  );
}

function Tweets({ tweets }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto my-16 px-4 sm:px-8 lg:px-14 container">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
        <span className="block text-red-600">Keep an eye on our athletes!</span>
        <span className="block">ABM in the media.</span>
      </h2>

      {tweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const featureItems = await getAllFeatureItems();
  const contactItems = await getAllContactItems();
  const tweetUrls = await getAllTweetUrls();

  let tweets = await getTweets(tweetUrls);

  return { props: { featureItems, contactItems, tweets } };
}
