import { StyleSheet } from 'react-native';
import { rem } from '../../utils/rem';

export const styles = StyleSheet.create({
  utility: {
    margin: 10 * rem,
  },
  badge: {
    marginRight: 5 * rem,
  },
  badgeText: {
    paddingHorizontal: 10 * rem,
    fontSize: 14 * rem,
    color: 'white',
    fontWeight: '600',
  },
});
