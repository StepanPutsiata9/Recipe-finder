import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import React, { JSX, useCallback, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useLocalization } from '@/features/localization';
import { IoniconsIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useStyles } from './avatar-bottom-sheet.styles';

interface IAvatarBottomSheetProps {
  isOpen: boolean;
  currentAvatar: string | null;
  onClose: () => void;
  onPickFromGallery: () => void;
  onTakePhoto: () => void;
  bottomSheetRef: React.RefObject<any>;
  handleSheetChanges: (index: number) => void;
}

export const AvatarBottomSheet = ({
  isOpen,
  currentAvatar,
  onClose,
  onPickFromGallery,
  onTakePhoto,
  bottomSheetRef,
  handleSheetChanges,
}: IAvatarBottomSheetProps): JSX.Element | null => {
  const insets = useSafeAreaInsets();
  const snapPoints = useMemo(() => ['60%'], []);
  const { t } = useLocalization('settings');
  const { colors } = useTheme();
  const styles = useStyles();
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        onPress={onClose}
      />
    ),
    [onClose]
  );
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handleIndicator}
        backgroundStyle={styles.bottomSheetBackground}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={[styles.contentContainer, { paddingBottom: insets.bottom + 20 }]}>
          <Text style={styles.modalTitle}>{t('changeAvatar')}</Text>

          <View style={styles.avatarContainer}>
            {currentAvatar ? (
              <Image source={{ uri: currentAvatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <IoniconsIcon name="person" size={60} color={colors.primary} />
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.modalOption} onPress={onPickFromGallery}>
            <IoniconsIcon name="library-outline" size={24} color={colors.primary} />
            <Text style={styles.modalOptionText}>{t('chooseFromGallery')}</Text>
            <IoniconsIcon name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption} onPress={onTakePhoto}>
            <IoniconsIcon name="camera" size={24} color={colors.primary} />
            <Text style={styles.modalOptionText}>{t('takePhoto')}</Text>
            <IoniconsIcon name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.modalOption, styles.cancelOption]} onPress={onClose}>
            <Text style={styles.cancelText}>{t('cancel')}</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};
