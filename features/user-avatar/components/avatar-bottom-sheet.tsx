import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import React, { JSX, useCallback, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    contentContainer: {
      flex: 1,
      paddingHorizontal: indets.l,
      paddingTop: indets.s,
      zIndex: 9999,
    },
    handleIndicator: {
      backgroundColor: colors.placeholder,
      width: 40,
      height: 4,
      borderRadius: 2,
    },
    bottomSheetBackground: {
      backgroundColor: colors.background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalTitle: {
      fontSize: indets.l,
      fontFamily: 'MontserratBold',
      color: colors.text.primary,
      textAlign: 'center',
      marginBottom: indets.l,
    },
    avatarContainer: {
      alignItems: 'center',
      marginVertical: indets.l,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: colors.secondaryButtonBorder,
    },
    avatarPlaceholder: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: colors.secondaryButtonBorder,
    },
    modalOption: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: indets.m,
      paddingHorizontal: indets.l,
      borderRadius: 16,
      marginBottom: indets.m,
      backgroundColor: 'rgba(255, 110, 65, 0.05)',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    modalOptionText: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.primary,
      flex: 1,
      marginLeft: indets.s,
    },
    cancelOption: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      justifyContent: 'center',
    },
    cancelText: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.placeholder,
      textAlign: 'center',
    },
  });
