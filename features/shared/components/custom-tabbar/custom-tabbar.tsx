import { useTheme } from '@/features/theme/hooks';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { JSX } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getIconByRouteName } from '../../utils';
import { useStyles } from './custom-tabbar.styles';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { bottom: 25 + bottom }]}>
      {state.routes.map((route, index) => {
        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label = !!options.tabBarLabel
          ? options.tabBarLabel
          : !!options.title
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
};
