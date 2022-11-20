import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../hooks/theme.context'


export default function App({ Component, pageProps }: AppProps) {

  return <>
    <ThemeProvider>
      <Navbar />
      <div className='px-8 py-16 bg-gray-100 dark:bg-gray-700 shadow custom-img'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  </>
}
