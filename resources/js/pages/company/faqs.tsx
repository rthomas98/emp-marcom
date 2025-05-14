import SiteLayout from '@/layouts/site-layout';
import { FAQsHeader } from '@/components/company/FAQsHeader';
import { FAQsCategories } from '@/components/company/FAQsCategories';
import { FAQsContact } from '@/components/company/FAQsContact';
import { Head } from '@inertiajs/react';

export default function Faqs() {
  return (
    <SiteLayout>
      <Head title="FAQs - Empuls3" />
      <FAQsHeader />
      <FAQsCategories />
      <FAQsContact />
    </SiteLayout>
  );
}
