import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks';

export const LogoutButton = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const { t } = useLocalization('settings');
  const { handleLogoutPress } = useAuth();
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogoutPress} activeOpacity={0.9}>
      <Text style={styles.buttonText}>{t('signOut')}</Text>
      <MaterialIcons name="logout" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    button: {
      paddingVertical: indets.m,
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    buttonText: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.primary,
      marginRight: indets.m,
    },
  });
