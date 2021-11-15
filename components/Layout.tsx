import Head from 'next/head'
import Navbar from './Navbar'
import MailingList from './MailingList'
import Footer from './Footer'

interface Props {
  children: JSX.Element
  showBanner?: boolean
  showMailingList?: boolean
}

export default function Layout({
  children,
  showBanner = false,
  showMailingList = false,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen flex flex-col justify-between">
      <Head>
        <meta
          name="og:title"
          content="Athlete Branding &
Marketing LLC"
        />
        <meta name="og:image" content="/banner.jpg" />
        <meta
          name="og:description"
          content="We help student-athletes maximize their Name, Image, & Likeness (NIL) income opportunities."
        />
        <title>Athlete Branding & Marketing</title>
        <meta
          name="description"
          content="We help student-athletes maximize their Name, Image, & Likeness (NIL) income opportunities."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      {showBanner && (
        <img
          className="object-cover object-center"
          alt="hero"
          loading="lazy"
          src="/banner.jpg"
        />
      )}
      <main className="text-gray-700">{children}</main>
      <div>
        {showMailingList && <MailingList />}
        <Footer />
      </div>
    </div>
  )
}
