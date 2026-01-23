import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, indets } from '@/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import React, { JSX, useCallback, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from './avatar-bottom-sheet.styles';

interface IAvatarBottomSheetProps {
  isOpen: boolean;
  currentAvatar?: string;
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
  const styles = useStyles(colors, indets, fontSize);
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
                <MaterialIcons name="person" size={60} color={colors.primary} />
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.modalOption} onPress={onPickFromGallery}>
            <MaterialIcons name="photo-library" size={24} color={colors.primary} />
            <Text style={styles.modalOptionText}>{t('chooseFromGallery')}</Text>
            <MaterialIcons name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption} onPress={onTakePhoto}>
            <MaterialIcons name="photo-camera" size={24} color={colors.primary} />
            <Text style={styles.modalOptionText}>{t('takePhoto')}</Text>
            <MaterialIcons name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.modalOption, styles.cancelOption]} onPress={onClose}>
            <Text style={styles.cancelText}>{t('cancel')}</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};
