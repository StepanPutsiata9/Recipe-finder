import * as ImagePicker from 'expo-image-picker';
import { useCallback } from 'react';
import { Alert } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { setAva, setLoading } from '../store/avatar.slice';

export const useImagePicker = () => {
  const dispatch = useAppDispatch();
  const { avatarLoading, avatar } = useAppSelector((state) => state.avatar);

  const pickImageFromGallery = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Нужно разрешение для доступа к галерее');
        return null;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets[0]) {
        console.log(result.assets[0].uri);
        dispatch(setAva(result.assets[0].uri));
      }
      return null;
    } catch {
      const errorMsg = 'Не удалось выбрать фото';
      Alert.alert('Ошибка', errorMsg);
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const takePhotoWithCamera = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Нужно разрешение для использования камеры');
        return null;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled && result.assets[0]) {
        dispatch(setAva(result.assets[0].uri));
      }
    } catch {
      const errorMsg = 'Не удалось сделать фото';
      Alert.alert('Ошибка', errorMsg);
      return null;
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  return {
    pickImageFromGallery,
    takePhotoWithCamera,
    avatarLoading,
    avatar,
  };
};
