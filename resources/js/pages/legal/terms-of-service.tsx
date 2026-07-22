import { LegalPage, type LegalSection } from '@/components/legal/LegalPage';

const sections: LegalSection[] = [
    {
        heading: 'Website use',
        content: (
            <p>
                You may use this public website for lawful informational and business-inquiry purposes. You may not interfere with its operation,
                attempt unauthorized access, submit malicious material, abuse forms, misrepresent your identity, or use the site in a way that
                violates applicable law or the rights of another person.
            </p>
        ),
    },
    {
        heading: 'No professional-services agreement from website use',
        content: (
            <p>
                Visiting the site, sending an inquiry, or scheduling a conversation does not create a client relationship, support obligation,
                emergency response commitment, confidentiality agreement, or obligation to accept work. Professional services begin only under a
                separate written agreement authorized by the parties.
            </p>
        ),
    },
    {
        heading: 'Information and recommendations',
        content: (
            <p>
                Website content is general information and may not reflect your system, security, legal, regulatory, financial, or operational
                circumstances. Do not rely on public website content as a substitute for a scoped assessment or qualified professional advice.
            </p>
        ),
    },
    {
        heading: 'Intellectual property',
        content: (
            <p>
                Unless otherwise stated, Empuls3 or its licensors own the website’s original text, design, graphics, branding, and code. You may view
                the site for ordinary business use but may not republish, sell, scrape at scale, or create misleading derivative material without
                permission. Client names, logos, and linked third-party materials remain the property of their respective owners.
            </p>
        ),
    },
    {
        heading: 'External links and availability',
        content: (
            <p>
                External links are provided for convenience and do not automatically imply endorsement or a formal partnership. We do not control
                third-party content or availability. The website may change, become unavailable, or contain errors, and we may correct or remove
                content without advance notice.
            </p>
        ),
    },
    {
        heading: 'Disclaimer and limitation',
        content: (
            <p>
                To the extent permitted by law, the public website is provided without warranties of uninterrupted availability, completeness, or
                fitness for a particular purpose. Empuls3 is not liable for indirect, incidental, special, consequential, or punitive damages arising
                solely from use of, or inability to use, the public website. Separate service agreements govern professional work and may contain
                different terms.
            </p>
        ),
    },
    {
        heading: 'Governing law and changes',
        content: (
            <p>
                These website terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. We may update these
                terms by publishing a revised version and date on this page. Continued use after publication means the updated website terms apply to
                that use.
            </p>
        ),
    },
];

export default function TermsOfService() {
    return (
        <LegalPage
            title="Website Terms of Service"
            description="Terms governing use of the public Empuls3 website and the distinction between an inquiry and a professional-services agreement."
            introduction="These terms apply to use of the public Empuls3 website. A signed client agreement, not this page, governs professional services."
            sections={sections}
        />
    );
}
