import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IChangeAvatarButtonProps {
  onPress: () => void;
}

export const ChangeAvatarButton = ({ onPress }: IChangeAvatarButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.buttonText}>Change Avatar</Text>
      <MaterialIcons name="arrow-forward" size={24} color={'#FF6E41'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 110, 65, 0.05)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFE5DC',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: '#FF6E41',
    marginRight: 15,
  },
});
