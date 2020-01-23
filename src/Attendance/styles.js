import { StyleSheet } from 'react-native';
import { rem } from '../utils/rem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  body: {
    margin: 10 * rem,
    justifyContent: 'space-between',
    flex: 1,
  },
  bodyInfo: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 10,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'grey',
  },
});
