import { useTheme } from '@/features/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { JSX, useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useLocalization } from '../../hooks';
import { useStyles } from './language-switcher.styles';

export const LanguageSwitcher = (): JSX.Element => {
  const { colors } = useTheme();
  const styles = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLocalization('settings');
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
  ];

  const handleLanguageSelect = (langCode: string): void => {
    changeLanguage(langCode);
    setIsModalVisible(false);
  };
  const handleCloseModal = (): void => setIsModalVisible(false);
  const handleOpenModal = (): void => setIsModalVisible(true);

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0];

  return (
    <>
      <TouchableOpacity style={styles.floatingButton} onPress={handleOpenModal} activeOpacity={0.9}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonLanguageCode}>{t('language')}</Text>
          <Text style={styles.buttonLanguageCode}>{currentLang.code.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent
        statusBarTranslucent
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <Pressable style={styles.modalCard} onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalHeader}>
              <Ionicons name="globe-outline" size={24} color={colors.primary} />
              <Text style={styles.modalTitle}>{t('chooseLanguage')}</Text>
              <View style={styles.gradientLine} />
            </View>
            <View style={styles.languagesList}>
              {languages.map((language) => (
                <TouchableOpacity
                  key={language.code}
                  style={[
                    styles.languageItem,
                    currentLanguage === language.code && styles.languageItemActive,
                  ]}
                  onPress={() => handleLanguageSelect(language.code)}
                  activeOpacity={0.7}
                >
                  <View style={styles.languageItemContent}>
                    <Text
                      style={[
                        styles.languageName,
                        currentLanguage === language.code && styles.languageNameActive,
                      ]}
                    >
                      {language.name}
                    </Text>
                  </View>

                  {currentLanguage === language.code && (
                    <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};
