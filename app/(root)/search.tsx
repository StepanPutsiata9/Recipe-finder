import { useLocalization } from '@/features/localization';
import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search() {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const router = useRouter();
  const handleBack = () => router.back();
  const { t } = useLocalization('search');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.9}>
          <Ionicons name="chevron-back" size={32} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{t('search')}</Text>
        </View>
        <View style={styles.rightPlaceholder} />
      </View>
    </SafeAreaView>
  );
}

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: indets.m,
      paddingVertical: indets.s,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.text.primary,
      fontSize: fontSize.xl,
      fontFamily: 'Montserrat',
    },
    rightPlaceholder: {
      width: 40,
    },
  });
