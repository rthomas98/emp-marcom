import { LegalPage, type LegalSection } from '@/components/legal/LegalPage';

const sections: LegalSection[] = [
    {
        heading: 'Information we collect',
        content: (
            <>
                <p>
                    When you contact Empuls3, we may collect the information you submit, including your name, email address, phone number, company,
                    project type, budget range, timeline, message, project description, and requirements.
                </p>
                <p>
                    The website and its infrastructure may also record technical information such as IP address, browser type, device information,
                    referring page, pages viewed, timestamps, and security or diagnostic events. Google Analytics may collect usage information as
                    described in our Cookie Policy.
                </p>
            </>
        ),
    },
    {
        heading: 'How we use information',
        content: (
            <ul className="list-disc space-y-2 pl-6">
                <li>Review and respond to inquiries or support requests.</li>
                <li>Evaluate whether a requested engagement is a fit and prepare follow-up communication.</li>
                <li>Operate, secure, diagnose, and improve the website and contact process.</li>
                <li>Maintain business records and comply with legal obligations.</li>
                <li>Measure website and conversion activity without claiming that analytics identifies every individual visitor.</li>
            </ul>
        ),
    },
    {
        heading: 'How information is shared',
        content: (
            <>
                <p>
                    We may share information with service providers that support website hosting, email delivery, scheduling, analytics, security, and
                    business operations. Those providers receive information only as needed to perform their services under their applicable terms.
                </p>
                <p>
                    We may also disclose information when required by law, to protect rights or safety, in connection with a business transaction, or
                    with your direction. Empuls3 does not sell personal information submitted through the public contact form.
                </p>
            </>
        ),
    },
    {
        heading: 'Retention and security',
        content: (
            <>
                <p>
                    We retain inquiry and operational records for as long as reasonably needed for the purposes described above, contractual or legal
                    obligations, dispute resolution, and security. Retention varies by record type and business context.
                </p>
                <p>
                    We use reasonable administrative and technical measures appropriate to the website and the information involved. No internet
                    transmission or storage method is guaranteed to be completely secure. Do not submit passwords, private keys, regulated data, or
                    confidential source files through the public form.
                </p>
            </>
        ),
    },
    {
        heading: 'Your choices and requests',
        content: (
            <>
                <p>
                    You may configure your browser to limit cookies and may use browser or device privacy controls. Some essential website functions
                    may rely on session or security cookies.
                </p>
                <p>
                    To request access, correction, deletion, or information about personal data associated with an inquiry, contact us using the
                    information below. We may need to verify identity and may retain information where law or legitimate business obligations require
                    it.
                </p>
            </>
        ),
    },
    {
        heading: 'Children and external services',
        content: (
            <>
                <p>The website is intended for business audiences and is not directed to children under 13.</p>
                <p>
                    Links to scheduling, client websites, social networks, and other third-party services are governed by those providers’ own privacy
                    practices. Review their terms before submitting information.
                </p>
            </>
        ),
    },
];

export default function PrivacyPolicy() {
    return (
        <LegalPage
            title="Privacy Policy"
            description="How Empuls3 collects, uses, shares, retains, and protects information submitted through its public website."
            introduction="This policy explains the information practices for the public Empuls3 website and contact process. A separate agreement may govern information handled during a client engagement."
            sections={sections}
        />
    );
}
