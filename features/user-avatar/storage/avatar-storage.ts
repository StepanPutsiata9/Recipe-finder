import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAvatar = async (avatar: string | null): Promise<boolean> => {
  try {
    if (avatar === null || avatar === undefined) {
      await AsyncStorage.removeItem('avatar');
    } else {
      await AsyncStorage.setItem('avatar', JSON.stringify(avatar));
    }
    return true;
  } catch {
    return false;
  }
};

export const getAvatar = async (): Promise<string | null> => {
  try {
    const storedData = await AsyncStorage.getItem('avatar');
    return storedData ? JSON.parse(storedData) : null;
  } catch {
    return null;
  }
};
