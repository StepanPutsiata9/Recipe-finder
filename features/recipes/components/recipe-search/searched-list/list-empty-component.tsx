import { JSX } from 'react';
import { Text, View } from 'react-native';

import { useStyles } from './searched-list.styles';

export const ListEmptyComponent = (): JSX.Element => {
  const styles = useStyles();
  return (
    <View style={styles.emptyContainer}>
      <Text style={{ color: 'white' }}>No recipes found</Text>
    </View>
  );
};
