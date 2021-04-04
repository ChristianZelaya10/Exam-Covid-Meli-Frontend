import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resouceEs from '../../texts/es/translation';
import resourceEn from '../../texts/en/translation';

i18n
    .use(initReactI18next)
   
    .init({
        fallbackLng: 'es',
        debug: true,
        whitelist: ['en', 'es'],
        resources: {
            en: {
                translation: resourceEn
            },
            es: {
                translation: resouceEs
            }
        },
        interpolation: {
            escapeValue: false, 
        }
    });


export default i18n;