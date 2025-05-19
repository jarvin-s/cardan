import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['nl', 'en'],

    defaultLocale: 'nl',

    pathnames: {
        '/ervaringsplein': {
            en: '/experience-square',
        },
        '/ervaringsplein/kleurenblindheid': {
            en: '/experience-square/color-blindness'
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
        '/ervaringsplein/dyslexie': {
            en: '/experience-square/dyslexia',
        },
        '/ervaringsplein/rapport': {
            en: '/experience-square/report',
        },
    }
});