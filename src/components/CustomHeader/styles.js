import { StyleSheet } from 'react-native';
import { rem } from '../../utils/rem';

export const styles = StyleSheet.create({
  container: {
    height: 50 * rem,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10 * rem,
    alignItems: 'center',
  },
  leftColumn: {
    width: '15%',
  },
  middleColumn: {
    width: '55%',
  },
  rightColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  icon: {
    fontSize: 20 * rem,
    color: 'white',
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 19 * rem,
    fontWeight: '600',
    marginLeft: 5 * rem,
  },
});
