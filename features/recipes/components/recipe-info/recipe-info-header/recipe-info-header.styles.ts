import { StyleSheet } from 'react-native';

import { indets } from '@/styles';

const useStyles = () => {
  return StyleSheet.create({
    header: {
      height: 300,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      paddingTop: 50,
      paddingHorizontal: indets.m,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 4,
    },
    headerActions: {
      flexDirection: 'row',
      gap: indets.s,
      marginTop: 4,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
