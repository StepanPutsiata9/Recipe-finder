import { useRouter } from 'expo-router';
import type { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/search.styles';
import { useLocalization } from '@/features/localization';
import { IoniconsIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

export default function Search(): JSX.Element {
  const { colors } = useTheme();
  const styles = useStyles();
  const router = useRouter();
  const handleBack = (): void => router.back();

  const { t } = useLocalization('search');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.9}>
          <IoniconsIcon name="chevron-back" size={32} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{t('search')}</Text>
        </View>
        <View style={styles.rightPlaceholder} />
      </View>
    </SafeAreaView>
  );
}
