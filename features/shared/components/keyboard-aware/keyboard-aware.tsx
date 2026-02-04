import { JSX, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

interface KeyboardAwareProps {
  children: ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  bottomOffset?: number;
}

export const KeyboardAware = ({
  children,
  style,
  contentContainerStyle,
  bottomOffset = 65,
}: KeyboardAwareProps): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      style={style}
      contentContainerStyle={contentContainerStyle}
      bottomOffset={bottomOffset}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};
