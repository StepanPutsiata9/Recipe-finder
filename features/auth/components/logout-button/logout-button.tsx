import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { JSX } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks';
import { useStyles } from './logout-button.styles';

export const LogoutButton = (): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();
  const { t } = useLocalization('settings');
  const { handleLogoutPress } = useAuth();
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogoutPress} activeOpacity={0.9}>
      <Text style={styles.buttonText}>{t('signOut')}</Text>
      <MaterialIcons name="logout" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};
