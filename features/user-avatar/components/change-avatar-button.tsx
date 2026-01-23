import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { JSX } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useBottomSheet } from '../hooks';
import { AvatarBottomSheet } from './avatar-bottom-sheet';

export const ChangeAvatarButton = (): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const { bottomSheetRef, isOpen, handleOpen, handleClose, handleSheetChanges } = useBottomSheet();
  const { t } = useLocalization('settings');
  const handlePickFromGallery = (): void => {
    handleClose();
  };

  const handleTakePhoto = (): void => {
    handleClose();
  };
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen} activeOpacity={0.9}>
        <Text style={styles.buttonText}>{t('changeAvatar')}</Text>
        <MaterialIcons name="arrow-forward" size={24} color={colors.primary} />
      </TouchableOpacity>
      <AvatarBottomSheet
        isOpen={isOpen}
        currentAvatar={undefined}
        onClose={handleClose}
        onPickFromGallery={handlePickFromGallery}
        onTakePhoto={handleTakePhoto}
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
      />
    </>
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
      marginRight: indets.s,
    },
  });
