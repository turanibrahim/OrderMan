import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#212121',
  },
  searchInput: {
    backgroundColor: 'white',
    borderBottomColor: 'white',
  },
});

export default styles;
