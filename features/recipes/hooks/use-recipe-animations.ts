import { useState } from 'react';
import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useRecipeAnimations = () => {
  const SCROLL_VALUE = 200;
  const scrollY = useSharedValue(0);
  const tabAnimation = useSharedValue(0);

  const [tabContainerWidth, setTabContainerWidth] = useState(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollY.value, [-SCROLL_VALUE, 0, SCROLL_VALUE], [-100, 0, 100]),
        },
        {
          scale: interpolate(scrollY.value, [-SCROLL_VALUE, 0, SCROLL_VALUE], [1.3, 1, 1]),
        },
      ],
    };
  });
  const animatedTabStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(tabAnimation.value * (tabContainerWidth / 2), { duration: 300 }) },
      ],
    };
  });
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const handleTabChange = (tab: 'ingredients' | 'instructions') => {
    setActiveTab(tab);
    tabAnimation.value = tab === 'ingredients' ? 0 : 1;
  };
  return {
    scrollHandler,
    imageAnimationStyle,
    animatedTabStyle,
    tabAnimation,
    scrollY,
    setTabContainerWidth,
    activeTab,
    handleTabChange,
  };
};
