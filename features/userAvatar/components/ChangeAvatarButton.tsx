import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IChangeAvatarButtonProps {
  currentAvatar?: string;
}

export const ChangeAvatarButton = ({ currentAvatar }: IChangeAvatarButtonProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const insets = useSafeAreaInsets();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const snapPoints = useMemo(() => ['65%'], []);

  const handleOpenSheet = useCallback(() => {
    setIsSheetOpen(true);
    setTimeout(() => {
      bottomSheetRef.current?.expand();
    }, 100);
  }, []);

  const handleCloseSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    setTimeout(() => {
      setIsSheetOpen(false);
    }, 100);
  }, []);

  const pickImageFromGallery = async () => {
    handleCloseSheet();
  };

  const takePhoto = async () => {
    handleCloseSheet();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.5} />
    ),
    []
  );

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpenSheet} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Change Avatar</Text>
        <MaterialIcons name="arrow-forward" size={24} color={'#FF6E41'} />
      </TouchableOpacity>

      {isSheetOpen && (
        <Portal>
          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={styles.handleIndicator}
            backgroundStyle={styles.bottomSheetBackground}
            onClose={handleCloseSheet}
          >
            <BottomSheetView
              style={[styles.contentContainer, { paddingBottom: insets.bottom + 20 }]}
            >
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
                onPress={handleCloseSheet}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheet>
        </Portal>
      )}
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  handleIndicator: {
    backgroundColor: '#E0E0E0',
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
