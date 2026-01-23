import { useTheme } from '@/features/theme';
import { JSX } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { styles } from './loading-modal.styles';
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
