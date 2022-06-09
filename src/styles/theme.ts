import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    highlight: "#FFBA08",
    highlight50: "rgba(255, 186, 8, 0.5)",
    dark: {
      black: "#000000",
      headingAndText: "#47585B",
      info: "#999999",
      info50: "rgba(153, 153, 153, 0.5)",
    },
    light: {
      white: "#FFFFFF",
      headingAndText: "#F5F8FA",
      info: "#DADADA",
    }
  },
  fonts: {
      body: 'Poppins',
      heading: 'Poppins',
    },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA'
      },
    }
  }
})