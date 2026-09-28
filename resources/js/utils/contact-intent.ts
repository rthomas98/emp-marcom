import type { FormType } from '@/components/contact/ContactFormPanel';

/**
 * Lets calls to action open the contact form in a specific mode.
 * Values map onto the existing contact payload (formType / projectType / message); no new fields are sent.
 */
export type ContactIntent = 'new-project' | 'product-planning' | 'project' | 'consultation';

export const CONTACT_INTENT_EVENT = 'empuls3:contact-intent';

export const NEW_PROJECT_TYPE = 'new-website-app';

export const PRODUCT_PLANNING_TYPE = 'product-planning';

export const CONSULTATION_MESSAGE = 'I would like to request a consultation. Topic: \nGood days and times to talk: ';

export interface ResolvedContactIntent {
    formType: FormType;
    projectType?: string;
    message?: string;
}

export function resolveContactIntent(intent: string | null | undefined): ResolvedContactIntent | null {
    switch (intent) {
        case 'new-project':
            return { formType: 'project', projectType: NEW_PROJECT_TYPE };
        case 'product-planning':
            return { formType: 'project', projectType: PRODUCT_PLANNING_TYPE };
        case 'project':
            return { formType: 'project' };
        case 'consultation':
            return { formType: 'general', message: CONSULTATION_MESSAGE };
        default:
            return null;
    }
}

export function contactHref(intent: ContactIntent): string {
    return `/contact?intent=${intent}#contact-form`;
}

/** Reads `?intent=` from an Inertia page URL (e.g. `usePage().url`). */
export function readContactIntentFromUrl(url: string): ResolvedContactIntent | null {
    const query = url.split('#')[0].split('?')[1] ?? '';
    return resolveContactIntent(new URLSearchParams(query).get('intent'));
}

/** Used by buttons already on the contact page: switch the form without a page visit and bring it into view. */
export function requestContactIntent(intent: ContactIntent) {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent<ContactIntent>(CONTACT_INTENT_EVENT, { detail: intent }));
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
