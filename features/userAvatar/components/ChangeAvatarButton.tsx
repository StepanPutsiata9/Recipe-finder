import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IChangeAvatarButtonProps {
  currentAvatar?: string;
}

export const ChangeAvatarButton = ({ currentAvatar }: IChangeAvatarButtonProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const pickImageFromGallery = async () => {
    setIsModalVisible(false);
  };

  const takePhoto = async () => {
    setIsModalVisible(false);
  };

  const renderModal = () => (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      onSwipeComplete={() => setIsModalVisible(false)}
      swipeDirection="down"
      swipeThreshold={100}
      propagateSwipe={true}
      hideModalContentWhileAnimating={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={300}
      backdropOpacity={0.5}
      style={[styles.modal, { marginTop: -insets.top }]}
      statusBarTranslucent={true}
      avoidKeyboard={true}
    >
      <View style={[styles.modalContent, { paddingBottom: insets.bottom }]}>
        <View style={styles.swipeIndicatorContainer}>
          <View style={styles.swipeIndicator} />
        </View>

        <Text style={styles.modalTitle}>Change Avatar</Text>

        <View style={styles.avatarContainer}>
          {currentAvatar ? (
            <Image source={{ uri: currentAvatar }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <MaterialIcons name="person" size={60} color="#FF6E41" />
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.modalOption} onPress={pickImageFromGallery}>
          <MaterialIcons name="photo-library" size={24} color="#FF6E41" />
          <Text style={styles.modalOptionText}>Choose from Gallery</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#FF6E41" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.modalOption} onPress={takePhoto}>
          <MaterialIcons name="photo-camera" size={24} color="#FF6E41" />
          <Text style={styles.modalOptionText}>Take Photo</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#FF6E41" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modalOption, styles.cancelOption]}
          onPress={() => setIsModalVisible(false)}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Change Avatar</Text>
        <MaterialIcons name="arrow-forward" size={24} color={'#FF6E41'} />
      </TouchableOpacity>

      {renderModal()}
    </>
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  swipeIndicatorContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },

  swipeIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'MontserratBold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFE5DC',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 110, 65, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFE5DC',
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: 'rgba(255, 110, 65, 0.05)',
    borderWidth: 1,
    borderColor: '#FFE5DC',
  },
  modalOptionText: {
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: '#FF6E41',
    flex: 1,
    marginLeft: 15,
  },
  cancelOption: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: '#666',
    textAlign: 'center',
  },
});
