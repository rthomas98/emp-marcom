import { LegalPage, type LegalSection } from '@/components/legal/LegalPage';

const sections: LegalSection[] = [
    {
        heading: 'Our approach',
        content: (
            <p>
                Empuls3 aims to make its public website usable with keyboard navigation, screen readers, browser zoom, and common assistive
                technologies. Accessibility is treated as ongoing maintenance rather than a one-time certification claim.
            </p>
        ),
    },
    {
        heading: 'Standards and limitations',
        content: (
            <p>
                We use the Web Content Accessibility Guidelines as a reference when reviewing content and interface changes. This statement does not
                claim that every page, third-party service, document, or historical asset has been independently certified to a particular conformance
                level.
            </p>
        ),
    },
    {
        heading: 'Third-party services',
        content: (
            <p>
                Scheduling, maps, social networks, client websites, and other linked services are controlled by their providers. We cannot guarantee
                their accessibility, but feedback about barriers in a path originating on our site is still useful.
            </p>
        ),
    },
    {
        heading: 'Requesting assistance',
        content: (
            <p>
                If you cannot access content or complete a task, tell us the page address, the task you were attempting, the assistive technology or
                browser involved if you are comfortable sharing it, and an accessible way to respond. We will review the request and provide a
                practical alternative or remediation update as soon as reasonably possible.
            </p>
        ),
    },
];

export default function AccessibilityStatement() {
    return (
        <LegalPage
            title="Accessibility Statement"
            description="Empuls3’s approach to website accessibility, known limitations, third-party services, and requesting assistance."
            introduction="Empuls3 is committed to improving access to its public website and responding constructively when a visitor encounters a barrier."
            sections={sections}
        />
    );
}
