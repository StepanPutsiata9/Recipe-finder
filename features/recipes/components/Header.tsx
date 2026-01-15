import { useLocalization } from '@/features/localization';
import { IColorsTheme } from '@/features/theme';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface IHeaderProps {
  colors: IColorsTheme;
}
export const Header = ({ colors }: IHeaderProps) => {
  const styles = useStyles(colors);
  const router = useRouter();
  const { t } = useLocalization('home');
  const handleSearchButtonPressed = () => router.navigate('/(root)/search');
  const handleNotificationsButtonPressed = () => router.navigate('/(root)/notifications');
  return (
    <View style={styles.container}>
      <View style={styles.greetView}>
        <View style={styles.avatarPlaceholder}>
          <MaterialIcons name="person" size={38} color={colors.primary} />
        </View>
        <View>
          <View>
            <Text style={styles.helloText}>{t('greeting')}</Text>
          </View>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Stepan!</Text>
          </View>
        </View>
      </View>

      <View style={styles.functionsBlock}>
        <TouchableOpacity
          onPress={handleSearchButtonPressed}
          style={styles.placeholder}
          activeOpacity={0.9}
        >
          <Feather name="search" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.placeholder}
          onPress={handleNotificationsButtonPressed}
          activeOpacity={0.9}
        >
          <Ionicons name="notifications-outline" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
      paddingHorizontal: 16,
    },
    greetView: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },
    helloText: {
      color: colors.text.primary,
      fontFamily: 'Montserrat',
      fontSize: 18,
      letterSpacing: 1.3,
    },
    nameView: {},
    nameText: {
      fontSize: 22,
      fontFamily: 'MontserratBold',
      color: colors.text.primary,
    },
    avatarPlaceholder: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    placeholder: {
      width: 35,
      height: 35,
      borderRadius: 50,
      backgroundColor: 'rgba(255, 110, 65, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    functionsBlock: {
      flexDirection: 'row',
      gap: 12,
    },
  });
