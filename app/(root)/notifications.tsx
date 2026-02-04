import { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import useStyles from '@/app/_styles/root-styles/notifications.styles';
import { useLocalization } from '@/features/localization';
import { HeaderBack } from '@/features/shared';

export default function Notifications(): JSX.Element {
  const styles = useStyles();
  const { t } = useLocalization('notifications');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title={t('notifications')} />
    </SafeAreaView>
  );
}
