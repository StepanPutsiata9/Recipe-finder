import { useAuth } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { useState } from 'react';

export const useInitializeApp = () => {
  const { loadTheme } = useTheme();
  const { loadLanguage } = useLocalization();
  const { loadUser } = useAuth();
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const initializeApp = async () => {
    try {
      await Promise.all([loadUser(), loadTheme(), loadLanguage()]);
      setIsAppInitialized(true);
    } catch {
      setIsAppInitialized(false);
    }
  };
  return {
    initializeApp: initializeApp,
    isAppInitialized: isAppInitialized,
  };
};
