import { LogoutButton } from '@/features/auth';
import { IColorsTheme, SwitchThemeButton, useTheme } from '@/features/theme';
import { AvatarBottomSheet, ChangeAvatarButton, useBottomSheet } from '@/features/userAvatar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  const { bottomSheetRef, isOpen, handleOpen, handleClose, handleSheetChanges } = useBottomSheet();
  const handlePickFromGallery = () => {
    handleClose();
    console.log('Выбрать из галереи');
  };

  const handleTakePhoto = () => {
    handleClose();
    console.log('Сделать фото');
  };

  const { colors } = useTheme();
  const styles = useStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.buttonsContainer}>
        <SwitchThemeButton colors={colors} />
        <ChangeAvatarButton onPress={handleOpen} />
        <LogoutButton onPress={() => {}} />
      </View>

      <AvatarBottomSheet
        isOpen={isOpen}
        currentAvatar={undefined}
        onClose={handleClose}
        onPickFromGallery={handlePickFromGallery}
        onTakePhoto={handleTakePhoto}
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
      />
    </SafeAreaView>
  );
}

const useStyles = (colors: IColorsTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    text: {
      color: colors.text.primary,
      fontSize: 20,
      fontFamily: 'MontserratBold',
      letterSpacing: 0.5,
      marginBottom: 20,
    },
    buttonsContainer: {
      gap: 12,
    },
  });
};
