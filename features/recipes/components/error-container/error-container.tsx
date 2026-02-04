import { JSX } from 'react';
import { Text, View } from 'react-native';

import { useStyles } from './error-container.styles';

interface ErrorContainerProps {
  error: string | null;
}

export function ErrorContainer({ error }: ErrorContainerProps): JSX.Element | null {
  const styles = useStyles();

  if (!error) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}
