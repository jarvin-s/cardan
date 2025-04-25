import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['nl', 'en'],

    // Used when no locale matches
    defaultLocale: 'nl',

    // Define pathname mapping between languages
    pathnames: {
        '/ervaringsplein': {
            en: '/experience-square',
        },
        // Add other path mappings here
        // '/voorbeeld-pad': {
        //   en: '/example-path',
        // },
    }
});