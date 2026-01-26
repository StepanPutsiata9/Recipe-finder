import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { JSX } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '@/features/auth';
import { useLocalization } from '@/features/localization';
import { FeatherIcon, IoniconsIcon } from '@/features/shared';
import { useTheme } from '@/features/theme';

import { useStyles } from './header.styles';

export const Header = (): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();
  const router = useRouter();
  const { user, getUserEmail } = useAuth();
  const { t } = useLocalization('home');
  const handleSearchButtonPressed = (): void => router.navigate('/(root)/search');
  const handleNotificationsButtonPressed = (): void => router.navigate('/(root)/notifications');
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
            <ScrollView horizontal>
              <Text style={styles.nameText}>{getUserEmail(user?.email || 'user')}</Text>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={styles.functionsBlock}>
        <TouchableOpacity
          onPress={handleSearchButtonPressed}
          style={styles.placeholder}
          activeOpacity={0.9}
        >
          <FeatherIcon name="search" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.placeholder}
          onPress={handleNotificationsButtonPressed}
          activeOpacity={0.9}
        >
          <IoniconsIcon name="notifications-outline" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
