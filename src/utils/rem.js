import { Dimensions } from 'react-native';

const DEV_VIEW_WIDTH = 320;
const { width } = Dimensions.get('window');
export const rem = width / DEV_VIEW_WIDTH;
