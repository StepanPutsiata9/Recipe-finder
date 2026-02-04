import * as ImagePicker from 'expo-image-picker';
import { useCallback } from 'react';
import { Alert } from 'react-native';

import { useLocalization } from '@/features/localization';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { loadAvatar as loadData, setAva, setLoading } from '../store/avatar.slice';

export const useAvatar = () => {
  const dispatch = useAppDispatch();
  const { t } = useLocalization('settings');
  const { avatarLoading, avatar } = useAppSelector((state) => state.avatar);

  const pickImageFromGallery = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(t('accesGallery'));
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets[0]) {
        dispatch(setAva(result.assets[0].uri));
      }
    } catch {
      Alert.alert(t('error'), t('failedToSelectPhoto'));
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const takePhotoWithCamera = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(t('accesCamera'));
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled && result.assets[0]) {
        dispatch(setAva(result.assets[0].uri));
      }
    } catch {
      Alert.alert(t('error'), t('failedToTakePhoto'));
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const loadAvatar = () => {
    dispatch(loadData());
  };
  return {
    pickImageFromGallery,
    takePhotoWithCamera,
    avatarLoading,
    avatar,
    loadAvatar,
  };
};
