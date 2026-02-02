import React, { JSX } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useLocalization } from '@/features/localization';
import { IoniconsIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useAvatar, useBottomSheet } from '../../hooks';
import { AvatarBottomSheet } from '../avatar-bottom-sheet/avatar-bottom-sheet';
import { useStyles } from './change-avatar-button.styles';

export const ChangeAvatarButton = (): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();
  const { bottomSheetRef, isOpen, handleOpen, handleClose, handleSheetChanges } = useBottomSheet();
  const { t } = useLocalization('settings');
  const { pickImageFromGallery, takePhotoWithCamera, avatar } = useAvatar();

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen} activeOpacity={0.9}>
        <Text style={styles.buttonText}>{t('changeAvatar')}</Text>
        <IoniconsIcon name="arrow-forward" size={24} color={colors.primary} />
      </TouchableOpacity>
      <AvatarBottomSheet
        isOpen={isOpen}
        currentAvatar={avatar}
        onClose={handleClose}
        onPickFromGallery={pickImageFromGallery}
        onTakePhoto={takePhotoWithCamera}
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
      />
    </>
  );
};
