import { StyleSheet } from 'react-native';
import { rem } from '../../utils/rem';

export const styles = StyleSheet.create({
  container: {
    height: 55 * rem,
    width: '100%',
    backgroundColor: 'white',
    elevation: 10,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingLeft: 18 * rem,
    justifyContent: 'center',
  },
  border: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
  },
  title: {
    fontSize: 16 * rem,
  },
  subtitle: {
    fontSize: 13 * rem,
    color: '#097368',
    marginTop: 3 * rem,
  },
  superScript: {
    fontSize: 10 * rem,
    textAlignVertical: 'top',
  },
});
