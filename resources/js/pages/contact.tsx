import SiteLayout from '@/layouts/site-layout';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactFormAdvanced } from '@/components/contact/ContactFormAdvanced';
import { ContactSchedule } from '@/components/contact/ContactSchedule';
import { Head } from '@inertiajs/react';

export default function Contact() {
  return (
    <SiteLayout>
      <Head title="Contact - Empuls3" />
      <ContactHeader />
      <ContactInfo />
      <ContactFormAdvanced />
      <ContactSchedule />
    </SiteLayout>
  );
}
