import { StyleSheet } from 'react-native';
import { rem } from '../../utils/rem';

export const styles = StyleSheet.create({
  container: {
    height: 60 * rem,
    padding: 5 * rem,
    flexDirection: 'row',
  },
  side: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  name: {
    fontSize: 14 * rem,
  },
  id: {
    fontSize: 12 * rem,
    color: 'grey',
    marginTop: 3 * rem,
  },
  statusContainer: {
    backgroundColor: 'red',
    height: '60%',
    aspectRatio: 1,
    borderRadius: 15 * rem,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14 * rem,
    fontWeight: '600',
    color: 'white',
  },
});
