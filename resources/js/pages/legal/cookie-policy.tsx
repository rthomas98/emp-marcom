import { LegalPage, type LegalSection } from '@/components/legal/LegalPage';

const sections: LegalSection[] = [
    {
        heading: 'What cookies are',
        content: (
            <p>
                Cookies are small text files stored by a browser. Related technologies may use local storage, pixels, or identifiers to support
                security, remember a session, or measure how a website is used.
            </p>
        ),
    },
    {
        heading: 'Essential and security technology',
        content: (
            <p>
                The website may use session, CSRF, load-balancing, or security-related cookies that are necessary to operate forms, protect requests,
                and maintain website reliability. Blocking these technologies may prevent parts of the site from working correctly.
            </p>
        ),
    },
    {
        heading: 'Analytics',
        content: (
            <p>
                We use Google Analytics 4 to understand page usage and actions such as successful contact submissions, calls, email links, and
                consultation links. Analytics availability can be affected by browser settings, extensions, consent tools, and network controls.
                Google’s handling of analytics data is governed by its own terms and privacy documentation.
            </p>
        ),
    },
    {
        heading: 'Advertising cookies',
        content: (
            <p>
                Empuls3 does not currently describe or intentionally deploy advertising-cookie campaigns on this public website. If advertising or
                retargeting technology is introduced, this policy and any required controls should be updated before deployment.
            </p>
        ),
    },
    {
        heading: 'Managing cookies',
        content: (
            <p>
                Most browsers allow you to delete or block cookies, limit cross-site tracking, and clear site data. Those controls are provided by the
                browser or device, not by Empuls3. Blocking essential cookies may affect form submission or other site functions.
            </p>
        ),
    },
];

export default function CookiePolicy() {
    return (
        <LegalPage
            title="Cookie Policy"
            description="The essential and analytics technologies used on the Empuls3 website and the browser choices available to visitors."
            introduction="This policy describes the cookie and measurement technologies currently associated with the public Empuls3 website."
            sections={sections}
        />
    );
}
