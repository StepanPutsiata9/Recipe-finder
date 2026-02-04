import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@/features/theme/hooks';

import { IoniconsIcon } from '../icon';
import useStyles from './header-back.styles';

interface IHeaderBack {
  title: string | string[];
}
export const HeaderBack = ({ title }: IHeaderBack) => {
  const { colors } = useTheme();
  const styles = useStyles();
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.9}>
        <IoniconsIcon name="chevron-back" size={32} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.rightPlaceholder} />
    </View>
  );
};
