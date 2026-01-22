import { useLocalization } from '@/features/localization';
import { IColorsTheme } from '@/features/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks';

interface ILogoutButtonProps {
  colors: IColorsTheme;
}
export const LogoutButton = ({ colors }: ILogoutButtonProps) => {
  const styles = useStyles(colors);
  const { t } = useLocalization('settings');
  const { handleLogoutPress } = useAuth();
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogoutPress} activeOpacity={0.9}>
      <Text style={styles.buttonText}>{t('signOut')}</Text>
      <MaterialIcons name="logout" size={24} color={'#FE5C51'} />
    </TouchableOpacity>
  );
};

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    button: {
      paddingVertical: 16,
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    buttonText: {
      fontSize: 16,
      fontFamily: 'MontserratBold',
      color: colors.primary,
      marginRight: 15,
    },
  });
