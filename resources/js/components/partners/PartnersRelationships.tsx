import { Check } from 'lucide-react';
import { useRef, useState, useSyncExternalStore, type KeyboardEvent } from 'react';
import { relationships } from './partners-content';

const DESKTOP_QUERY = '(min-width: 1024px)';

function subscribeToDesktop(onChange: () => void) {
    const media = window.matchMedia(DESKTOP_QUERY);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
}

// Tabs stack vertically at lg and scroll horizontally below it; aria-orientation follows the layout.
function useIsDesktop() {
    return useSyncExternalStore(
        subscribeToDesktop,
        () => window.matchMedia(DESKTOP_QUERY).matches,
        () => false,
    );
}

export function PartnersRelationships() {
    const isDesktop = useIsDesktop();
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const focusTab = (index: number) => {
        const next = (index + relationships.length) % relationships.length;
        setActive(next);
        tabRefs.current[next]?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const keys: Record<string, () => void> = {
            ArrowDown: () => focusTab(index + 1),
            ArrowRight: () => focusTab(index + 1),
            ArrowUp: () => focusTab(index - 1),
            ArrowLeft: () => focusTab(index - 1),
            Home: () => focusTab(0),
            End: () => focusTab(relationships.length - 1),
        };
        const action = keys[event.key];
        if (action) {
            event.preventDefault();
            action();
        }
    };

    return (
        <section id="relationship-types" className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="relationships-heading">
            <div className="container mx-auto">
                <div className="mb-10 max-w-2xl md:mb-14">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Who we work with</p>
                    <h2 id="relationships-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        Who we work alongside
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">Most projects involve more than one team. Here is how we fit in with each.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                    <div
                        role="tablist"
                        aria-label="Relationship types"
                        aria-orientation={isDesktop ? 'vertical' : 'horizontal'}
                        className="-mx-[5vw] flex gap-2 overflow-x-auto px-[5vw] pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
                    >
                        {relationships.map((relationship, index) => {
                            const selected = index === active;
                            return (
                                <button
                                    key={relationship.id}
                                    ref={(element) => {
                                        tabRefs.current[index] = element;
                                    }}
                                    type="button"
                                    role="tab"
                                    id={`tab-${relationship.id}`}
                                    aria-selected={selected}
                                    aria-controls={`panel-${relationship.id}`}
                                    tabIndex={selected ? 0 : -1}
                                    onClick={() => setActive(index)}
                                    onKeyDown={(event) => handleKeyDown(event, index)}
                                    className={`focus-visible:ring-accent-pink flex min-h-11 shrink-0 items-center gap-4 rounded-lg border px-5 py-4 text-left transition-colors focus:outline-none focus-visible:ring-2 lg:px-6 lg:py-5 ${
                                        selected
                                            ? 'border-primary bg-primary text-white'
                                            : 'text-primary border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                    <span
                                        className={`font-header text-sm font-bold ${selected ? 'text-[#F29AB8]' : 'text-accent-pink'}`}
                                        aria-hidden="true"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-semibold lg:text-lg">
                                        <span className="lg:hidden">{relationship.shortTitle}</span>
                                        <span className="hidden lg:inline">{relationship.title}</span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div>
                        {relationships.map((relationship, index) => (
                            <div
                                key={relationship.id}
                                role="tabpanel"
                                id={`panel-${relationship.id}`}
                                aria-labelledby={`tab-${relationship.id}`}
                                hidden={index !== active}
                                tabIndex={0}
                                className="focus-visible:ring-accent-pink rounded-lg border border-gray-200 bg-white p-6 focus:outline-none focus-visible:ring-2 md:p-10"
                            >
                                <h3 className="text-primary text-2xl font-bold md:text-3xl">{relationship.title}</h3>
                                <p className="mt-4 text-lg leading-8 text-gray-700">{relationship.description}</p>
                                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <div>
                                        <h4 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Who this includes</h4>
                                        <ul className="mt-4 space-y-3">
                                            {relationship.whoItIncludes.map((item) => (
                                                <li key={item} className="text-primary flex items-start gap-3">
                                                    <Check className="text-accent-pink mt-1 size-4 shrink-0" aria-hidden="true" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold tracking-wide text-gray-600 uppercase">How we work together</h4>
                                        <p className="mt-4 leading-7 text-gray-700">{relationship.howWeWork}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
