import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['nl', 'en'],

    defaultLocale: 'nl',

    pathnames: {
        '/ervaringsplein': {
            en: '/experience-square',
        },
        '/ervaringsplein/cognitieve-beperking': {
            en: '/experience-square/cognitive-impairment',
        },
        '/ervaringsplein/motorische-beperking': {
            en: '/experience-square/motor-impairment',
        },
        '/ervaringsplein/visuele-beperking': {
            en: '/experience-square/visual-impairment'
        },
        '/ervaringsplein/auditieve-beperking': {
            en: '/experience-square/auditory-impairment'
        }
    }
});