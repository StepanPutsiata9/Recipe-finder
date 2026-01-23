import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import { StyleSheet, Text, View } from 'react-native';
export default function Favorites() {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const { t } = useLocalization('favorites');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('favorites')}</Text>
    </View>
  );
}

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xxl,
      fontFamily: 'Montserrat',
    },
  });
