import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#5CD9D8',
    main: '#5CD9D8',
    light: '#5CD9D8'
  },
  secondary: {
    contrastText: white,
    dark: white,
    main: white,
    light: white
  },
  application: {
    font: '#5CD9D8',
    background: '#EEECFE'
  },
  phonescreen: {
    font: '#5643FC',
    background: '#EEECFE'
  },
  inperson: {
    font: '#FFB13E',
    background: '#FFF7EB'
  },
  offer: {
    font: '#39D98A',
    background: '#E9FFF4'
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  main: {
    color: '#2E384D'
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    card1: '#E7F9F9',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
