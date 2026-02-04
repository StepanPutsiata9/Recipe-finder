import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useRef, useState } from 'react';

export const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback((): void => {
    setIsOpen(true);
    setTimeout(() => {
      bottomSheetRef.current?.expand();
    }, 100);
  }, []);

  const handleClose = useCallback((): void => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback((index: number): void => {
    if (index === -1) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  }, []);

  return {
    bottomSheetRef,
    isOpen,
    handleOpen,
    handleClose,
    handleSheetChanges,
  };
};
