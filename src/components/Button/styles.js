import { StyleSheet } from 'react-native';
import { rem } from '../../utils/rem';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 6,
    backgroundColor: '#24a6a4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16 * rem,
    color: 'white',
    fontWeight: '600',
  },
});
