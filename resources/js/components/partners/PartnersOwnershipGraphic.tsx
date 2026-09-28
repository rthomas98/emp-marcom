/**
 * Native, accessible diagram: three collaborating groups overlap around one shared written plan.
 * Replaces a raster so labels stay sharp and readable by assistive technology.
 */
export function PartnersOwnershipGraphic() {
    return (
        <figure className="mx-auto w-full max-w-md">
            <svg viewBox="0 0 400 380" className="h-auto w-full" role="img" aria-labelledby="ownership-graphic-title ownership-graphic-desc">
                <title id="ownership-graphic-title">How collaborating groups connect</title>
                <desc id="ownership-graphic-desc">
                    Three overlapping circles labelled internal teams, agencies and vendors meet at a centre point labelled one shared plan.
                </desc>
                <defs>
                    <filter id="ownership-soften" x="-10%" y="-10%" width="120%" height="120%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
                    </filter>
                </defs>

                <g filter="url(#ownership-soften)" style={{ mixBlendMode: 'multiply' }}>
                    <circle cx="200" cy="130" r="105" fill="#E8A33D" fillOpacity="0.28" />
                    <circle cx="135" cy="240" r="105" fill="#5B7A99" fillOpacity="0.26" />
                    <circle cx="265" cy="240" r="105" fill="#BD1550" fillOpacity="0.16" />
                </g>

                <g stroke="#1F1946" strokeOpacity="0.35" strokeWidth="1.25" strokeDasharray="3 5" fill="none">
                    <line x1="200" y1="75" x2="200" y2="190" />
                    <line x1="95" y1="265" x2="200" y2="200" />
                    <line x1="305" y1="265" x2="200" y2="200" />
                </g>

                <g fill="#1F1946">
                    <circle cx="200" cy="75" r="5" />
                    <circle cx="95" cy="265" r="5" />
                    <circle cx="305" cy="265" r="5" />
                </g>

                <circle cx="200" cy="200" r="48" fill="#1F1946" />
                <circle cx="200" cy="200" r="56" fill="none" stroke="#BD1550" strokeWidth="2" />

                <g fontFamily="inherit" textAnchor="middle" fill="#1F1946" fontWeight="600" fontSize="17">
                    <text x="200" y="55">
                        Internal teams
                    </text>
                    <text x="85" y="300">
                        Agencies
                    </text>
                    <text x="315" y="300">
                        Vendors
                    </text>
                </g>
                <g fontFamily="inherit" textAnchor="middle" fill="#FFFFFF" fontWeight="700" fontSize="11" letterSpacing="0.5">
                    <text x="200" y="197">
                        ONE SHARED
                    </text>
                    <text x="200" y="212">
                        PLAN
                    </text>
                </g>
            </svg>
            <figcaption className="mt-3 text-center text-sm text-gray-600">
                Everyone works from the same written plan, project notes, and access list.
            </figcaption>
        </figure>
    );
}
