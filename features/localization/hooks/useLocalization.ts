import i18n from '@/languages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useTranslation as useI18nTranslation } from 'react-i18next';
import { setLanguage, setLanguageLoading } from '../store/localization.slice';
export const useTranslation = () => {
  const { t, i18n: i18nInstance } = useI18nTranslation();
  const dispatch = useAppDispatch();
  const { currentLanguage, languageLoading } = useAppSelector((state) => state.localization);

  const changeLanguage = async (lang: string) => {
    try {
      dispatch(setLanguageLoading(true));
      await i18n.changeLanguage(lang);
      dispatch(setLanguage(lang));
    } catch (error) {
      console.error('Error changing language:', error);
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
  };
};
