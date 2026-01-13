import { IColorsTheme } from '@/features/theme';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';
interface IHeaderProps {
  colors: IColorsTheme;
}
export const Header = ({ colors }: IHeaderProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.greetView}>
          <MaterialCommunityIcons name="human-greeting-variant" size={28} color={colors.primary} />
          <Text style={styles.helloText}>Hello</Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>Stepan!</Text>
        </View>
      </View>
      <View>
        <Feather name="search" size={34} color={colors.primary} onPress={() => {}} />
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
    },
    greetView: {
      flexDirection: 'row',
      gap: 6,
      alignItems: 'flex-end',
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
  });
