import SiteLayout from '@/layouts/site-layout';
import { FAQsHeader } from '@/components/company/FAQsHeader';
import { FAQsCategories } from '@/components/company/FAQsCategories';
import { FAQsContact } from '@/components/company/FAQsContact';
import { Head } from '@inertiajs/react';

export default function Faqs() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Agency FAQs - Empuls3</title>
        <meta name="description" content="Frequently asked questions about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas. Learn about our personalized technology solutions and direct access to senior specialists." />
        <meta name="keywords" content="micro agency FAQs, boutique technology firm, personalized solutions, senior specialists, direct collaboration, faster implementation times" />
      </Head>
      <FAQsHeader />
      <FAQsCategories />
      <FAQsContact />
    </SiteLayout>
  );
}
