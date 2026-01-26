import { useState } from 'react';

import { useAuth } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';

export const useInitializeApp = () => {
  const { loadTheme } = useTheme();
  const { loadLanguage } = useLocalization();
  const { loadUser } = useAuth();
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const initializeApp = async (): Promise<void> => {
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
