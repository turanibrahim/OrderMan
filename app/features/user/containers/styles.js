import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileContainer: { flex: 1, alignItems: 'center' },
  profileButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileButtonsContainer: {
    flexGrow: 1,
    width: '90%',
    overflow: 'hidden',
  },
  profileAvatar: { height: 120, resizeMode: 'contain' },
});

export default styles;
