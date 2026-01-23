import { useLocalization } from '@/features/localization';
import { IColorsTheme, useTheme } from '@/features/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useBottomSheet } from '../hooks';
import { AvatarBottomSheet } from './avatar-bottom-sheet';

export const ChangeAvatarButton = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors);
  const { bottomSheetRef, isOpen, handleOpen, handleClose, handleSheetChanges } = useBottomSheet();
  const { t } = useLocalization('settings');
  const handlePickFromGallery = () => {
    handleClose();
  };

  const handleTakePhoto = () => {
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
