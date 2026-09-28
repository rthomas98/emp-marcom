import { PartnersOwnershipGraphic } from './PartnersOwnershipGraphic';
import {
    responsibilityGuide,
    responsibilityParties,
    responsibilityPartyLabels,
    responsibilityQuestions,
    type ResponsibilityRole,
} from './partners-content';

const roleStyles: Record<ResponsibilityRole, string> = {
    Responsible: 'bg-accent-pink text-white',
    Approves: 'bg-primary text-white',
    Operates: 'bg-[#E8A33D]/20 text-[#7A4B08]',
    Consulted: 'bg-gray-100 text-gray-700',
    'Not involved': '',
};

function RoleBadge({ role }: { role: ResponsibilityRole }) {
    if (role === 'Not involved') {
        return (
            <span className="text-gray-400">
                <span aria-hidden="true">—</span>
                <span className="sr-only">Not involved</span>
            </span>
        );
    }
    return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${roleStyles[role]}`}>{role}</span>;
}

const guideNote = 'Illustrative example. The actual responsibilities are agreed and documented for each engagement.';

export function PartnersResponsibility() {
    return (
        <section className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="responsibility-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 gap-y-10 md:mb-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Responsibility guide</p>
                        <h2 id="responsibility-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                            Clear roles before work begins
                        </h2>
                        <p className="text-lg leading-8 text-gray-700">
                            For projects with several teams or providers, we answer three questions in writing before dates are set.
                        </p>
                        <dl className="mt-8 space-y-6">
                            {responsibilityQuestions.map((item) => (
                                <div key={item.question} className="border-accent-pink border-l-2 pl-5">
                                    <dt className="text-primary text-lg font-semibold">{item.question}</dt>
                                    <dd className="mt-1 leading-7 text-gray-700">{item.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <PartnersOwnershipGraphic />
                </div>

                <div className="hidden overflow-hidden rounded-lg border border-gray-200 bg-white lg:block">
                    <table className="w-full text-left">
                        <caption className="border-b border-gray-200 px-6 py-4 text-left text-sm text-gray-600">{guideNote}</caption>
                        <thead className="bg-primary text-white">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">
                                    Activity
                                </th>
                                {responsibilityParties.map((party) => (
                                    <th key={party} scope="col" className="px-4 py-4 font-semibold">
                                        {responsibilityPartyLabels[party]}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {responsibilityGuide.map((row) => (
                                <tr key={row.activity}>
                                    <th scope="row" className="text-primary px-6 py-4 font-medium">
                                        {row.activity}
                                    </th>
                                    {responsibilityParties.map((party) => (
                                        <td key={party} className="px-4 py-4">
                                            <RoleBadge role={row.roles[party]} />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="lg:hidden">
                    <p className="mb-4 text-sm text-gray-600">{guideNote}</p>
                    <ul className="space-y-4">
                        {responsibilityGuide.map((row) => (
                            <li key={row.activity} className="rounded-lg border border-gray-200 bg-white p-5">
                                <h3 className="text-primary font-semibold">{row.activity}</h3>
                                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
                                    {responsibilityParties.map((party) => (
                                        <div key={party}>
                                            <dt className="text-xs text-gray-600">{responsibilityPartyLabels[party]}</dt>
                                            <dd className="mt-1">
                                                <RoleBadge role={row.roles[party]} />
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
