import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/oswald/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/quattrocento/400.css'
import '../styles/globals.css'

const theme = extendTheme({
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Quattrocento', sans-serif`,
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '+20%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '+20%',
    },
    p: {
      fontSize: ['36px', '48px'],
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '+20%',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'Quattrocento, sans-serif',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#002E45', 'gray.800')(props),
        lineHeight: '140%',
        letterSpacing: '+20%',
      },
    }),
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp