import SiteLayout from '@/layouts/site-layout';
import { Header } from '@/components/home/Header';
import { Features } from '@/components/home/Features';
import { Services } from '@/components/home/Services';
import { Industries } from '@/components/home/Industries';
import { Innovation } from '@/components/home/Innovation';
import { Approach } from '@/components/home/Approach';
import { Partners } from '@/components/home/Partners';
import { Testimonials } from '@/components/home/Testimonials';
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <SiteLayout title="Empuls3 - Software Development & IT Consulting">
      <Head>
        <meta name="description" content="Empuls3 delivers custom software development, web applications, and IT consulting services that transform your business and drive growth in the digital landscape." />
        <meta name="keywords" content="software development, web development, IT consulting, custom applications, digital transformation" />
      </Head>
      <Header />
      <Features />
      <Services />
      <Industries />
      <Innovation />
      <Approach />
      <Partners />
      <Testimonials />
    </SiteLayout>
  );
}
