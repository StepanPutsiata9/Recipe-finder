import i18n from '@/languages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useTranslation as useI18nTranslation } from 'react-i18next';
import { setLanguage, setLanguageLoading } from '../store/localization.slice';
export const useLocalization = (namespace?: string | string[]) => {
  const { t, i18n: i18nInstance } = useI18nTranslation(namespace || 'common');
  const dispatch = useAppDispatch();
  const { currentLanguage, languageLoading } = useAppSelector((state) => state.localization);

  const changeLanguage = async (lang: string): Promise<void> => {
    try {
      dispatch(setLanguageLoading(true));
      await i18n.changeLanguage(lang);
      dispatch(setLanguage(lang));
    } catch {
      dispatch(setLanguage('en'));
    } finally {
      dispatch(setLanguageLoading(false));
    }
  };
  const loadLanguage = async () => {
    try {
      dispatch(setLanguageLoading(true));
      dispatch(setLanguage(i18n.language));
    } catch {
      dispatch(setLanguage('en'));
    } finally {
      dispatch(setLanguageLoading(false));
    }
  };
  return {
    t,
    i18n: i18nInstance,
    currentLanguage,
    changeLanguage,
    isLoading: languageLoading,
    loadLanguage: loadLanguage,
  };
};
