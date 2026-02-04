import { useState } from 'react';

import { useAuth } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { useAvatar } from '@/features/user-avatar';

export const useInitializeApp = () => {
  const { loadTheme } = useTheme();
  const { loadLanguage } = useLocalization();
  const { loadUser } = useAuth();
  const { loadAvatar } = useAvatar();
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const initializeApp = async (): Promise<void> => {
    try {
      await Promise.all([loadUser(), loadTheme(), loadLanguage(), loadAvatar()]);
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
