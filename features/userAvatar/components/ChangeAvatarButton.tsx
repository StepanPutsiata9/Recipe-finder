import { IColorsTheme } from '@/features/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IChangeAvatarButtonProps {
  onPress: () => void;
  colors: IColorsTheme;
}

export const ChangeAvatarButton = ({ onPress, colors }: IChangeAvatarButtonProps) => {
  const styles = useStyles(colors);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.buttonText}>Change Avatar</Text>
      <MaterialIcons name="arrow-forward" size={24} color={colors.primary} />
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
