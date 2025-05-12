import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['nl', 'en'],

    defaultLocale: 'nl',

    pathnames: {
        '/ervaringsplein': {
            en: '/experience-square',
        },
        '/ervaringsplein/visuele-beperking': {
            en: '/experience-square/visual-impairment'
        },
        '/ervaringsplein/auditieve-beperking': {
            en: '/experience-square/auditory-impairment'
        },
        '/ervaringsplein/cognitieve-beperking': {
            en: '/experience-square/cognitive-impairment',
        },
        '/ervaringsplein/motorische-beperking': {
            en: '/experience-square/motor-impairment',
        },
        '/ervaringsplein/dyslexie-kleurcontrast': {
            en: '/experience-square/dyslexia-color-contrast',
        },
        '/ervaringsplein/rapport': {
            en: '/experience-square/report',
        },
    }
});