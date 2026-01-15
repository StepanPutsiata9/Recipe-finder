import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

const i18n = createInstance();

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    try {
      const storedLanguage = await AsyncStorage.getItem('user-language');

      if (storedLanguage) {
        callback(storedLanguage);
        return;
      }

      const deviceLocales = Localization.getLocales();
      const systemLanguage = deviceLocales[0]?.languageCode || 'en';

      const supportedLangs = ['en', 'ru'];
      const lang = supportedLangs.includes(systemLanguage) ? systemLanguage : 'en';

      callback(lang);
      await AsyncStorage.setItem('user-language', lang);
    } catch {
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem('user-language', language);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    supportedLngs: ['en', 'ru'],
    ns: ['common', 'home', 'settings', 'favorities', 'auth', 'search', 'notifications'],
    defaultNS: 'common',
  });

export default i18n;
