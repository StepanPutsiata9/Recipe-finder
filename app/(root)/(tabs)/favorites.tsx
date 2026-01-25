import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontFamily, fontSize } from '@/styles';
import { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Favorites(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('favorites');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('favorites')}</Text>
    </View>
  );
}

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xxl,
      fontFamily: fontFamily.medium,
    },
  });
};
