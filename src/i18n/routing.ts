import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['nl', 'en'],

    defaultLocale: 'nl',

    pathnames: {
        '/ervaringsplein': {
            en: '/experience-square',
        },
        '/ervaringsplein/cognitief': {
            en: '/experience-square/cognitive',
        },
    }
});