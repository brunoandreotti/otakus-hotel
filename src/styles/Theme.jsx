//escolher tema como padrão (cores e fontes)
import { extendTheme } from "@chakra-ui/react";

//passar valores para tema (global: background - fonts - a )
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-tl, gray.900,gray.500, gray.400,gray.200)',
        color: '000',
      },
    },
  },
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Raleway, sans-serif',
  },
  a: {
    _hover: {
      color: '#F6E05E',
      textDecoration: 'underline',
    },
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#FFF',
    green: '#2F855A',
    gray: {
      100: '#EDF2F7',
      200: '#E2E8F0', //claro
      400: '#A0AEC0', //medio
      800: '#1A202C', //escuro
      900: '#171923', //escuro
    },
    Red: {
      600: '#C53030', //medio
      700: '#9B2C2C', //escuro
    },
    Orange: {
      400: '#ED8936', //claro
      600: '#C05621', //escuro
    },
    Yellow: {
      300: '#F6E05E', //claro
      500: '#D69E2E', //medio
      700: '#975A16', //escuro
    },
  },
});