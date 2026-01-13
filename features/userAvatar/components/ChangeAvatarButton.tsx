import { IColorsTheme } from '@/features/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useBottomSheet } from '../hooks';
import { AvatarBottomSheet } from './AvatarBottomSheet';

interface IChangeAvatarButtonProps {
  colors: IColorsTheme;
}

export const ChangeAvatarButton = ({ colors }: IChangeAvatarButtonProps) => {
  const styles = useStyles(colors);
  const { bottomSheetRef, isOpen, handleOpen, handleClose, handleSheetChanges } = useBottomSheet();
  const handlePickFromGallery = () => {
    handleClose();
    console.log('Выбрать из галереи');
  };

  const handleTakePhoto = () => {
    handleClose();
    console.log('Сделать фото');
  };
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Change Avatar</Text>
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
        colors={colors}
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
