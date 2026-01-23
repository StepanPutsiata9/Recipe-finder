import { useTheme } from '@/features/theme';
import { fontSize, IColorsTheme, IFontSize, IIndents, indets } from '@/styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalization } from '../hooks';

export const LanguageSwitcher = () => {
  const { colors } = useTheme();
  const styles = useStyles(colors, indets, fontSize);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLocalization('settings');
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
  ];

  const handleLanguageSelect = (langCode: string) => {
    changeLanguage(langCode);
    setIsModalVisible(false);
  };
  const handleCloseModal = () => setIsModalVisible(false);
  const handleOpenModal = () => setIsModalVisible(true);

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

const useStyles = (colors: IColorsTheme, indets: IIndents, fontSize: IFontSize) =>
  StyleSheet.create({
    floatingButton: {
      backgroundColor: colors.secondaryButtonBackground,
      borderRadius: 20,
      paddingHorizontal: indets.m,
      paddingVertical: indets.m,
      borderWidth: 1,
      borderColor: colors.secondaryButtonBorder,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    buttonTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: indets.xs,
    },
    buttonLanguageCode: {
      fontSize: fontSize.m,
      fontFamily: 'MontserratBold',
      color: colors.primary,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: indets.m,
    },
    modalCard: {
      backgroundColor: colors.background,
      borderRadius: 24,
      width: '100%',
      maxWidth: 320,
      padding: indets.xl,
    },
    modalHeader: {
      alignItems: 'center',
      marginBottom: indets.xl,
    },
    modalTitle: {
      fontSize: fontSize.xl,
      fontFamily: 'MontserratBold',
      color: colors.text.primary,
      marginTop: indets.s,
      marginBottom: indets.m,
    },
    gradientLine: {
      height: 2,
      width: 40,
      backgroundColor: colors.primary,
      borderRadius: 1,
      opacity: 0.8,
    },

    languagesList: {
      gap: indets.s,
      marginBottom: indets.xl,
    },
    languageItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: indets.m,
      borderRadius: 16,
      backgroundColor: colors.secondaryButtonBackground,
      borderWidth: 1,
      borderColor: 'transparent',
    },
    languageItemActive: {
      backgroundColor: colors.primary + '15',
      borderColor: colors.primary,
    },
    languageItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    languageName: {
      fontSize: indets.m,
      fontFamily: 'Montserrat',
      color: colors.text.primary,
    },
    languageNameActive: {
      color: colors.primary,
      fontFamily: 'MontserratBold',
    },
  });
