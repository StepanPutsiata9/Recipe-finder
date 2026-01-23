import { useTheme } from '@/features/theme';
import { JSX } from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
export function LoadingModal({ visible }: { visible: boolean }): JSX.Element {
  const { colors } = useTheme();
  return (
    <Modal visible={visible} transparent={true} animationType="fade" statusBarTranslucent={true}>
      <View style={styles.modalContainer}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
