import { IColorsTheme } from '@/features/theme';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, LinearTransition } from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

interface ITabbarProps {
  colors: IColorsTheme;
}
export const CustomTabBar: React.FC<BottomTabBarProps & ITabbarProps> = ({
  state,
  descriptors,
  navigation,
  colors,
}: BottomTabBarProps & ITabbarProps) => {
  const styles = useStyles(colors);
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            onPress={onPress}
            activeOpacity={1}
            style={[styles.tabItem, isFocused && styles.activeTabItem]}
          >
            {getIconByRouteName(route.name, isFocused ? colors.tabbarActiveText : colors.primary)}
            {isFocused && (
              <Animated.Text entering={FadeIn.duration(200)} style={styles.text}>
                {label as string}
              </Animated.Text>
            )}
          </AnimatedTouchableOpacity>
        );
      })}
    </View>
  );

  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case 'index':
        return <Feather name="home" size={24} color={color} />;
      case 'favorites':
        return <Feather name="heart" size={24} color={color} />;
      case 'settings':
        return <Ionicons name="settings-outline" size={24} color={color} />;
      default:
        return <Feather name="home" size={24} color={color} />;
    }
  }
};
const useStyles = (colors: IColorsTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.tabbarBackground,
      width: '80%',
      alignSelf: 'center',
      bottom: 42,
      borderRadius: 40,
      paddingVertical: 12,
      paddingHorizontal: 0,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    tabItem: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      paddingHorizontal: 16,
      borderRadius: 30,
      minWidth: 60,
    },
    activeTabItem: {
      backgroundColor: colors.primary,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    text: {
      color: colors.tabbarActiveText,
      fontSize: 14,
      marginLeft: 8,
      fontFamily: 'Montserrat',
      fontWeight: '600',
    },
  });
