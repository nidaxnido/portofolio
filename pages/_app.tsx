import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  styles:{
    global:{
      body:{
        fontFamily: `'DM sans', sans-serif`,
      },
      heading:{
        fontFamily: `'DM sans', sans-serif`,
      }
    }
  },

})
export default function App({ Component, pageProps }: AppProps) {
  return  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  
}
