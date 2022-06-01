import type { AppProps } from 'next/app'
import '../styles/global.css'
import '../styles/prism-coldark-dark.css'
import '@fontsource/prompt/300.css'
import '@fontsource/prompt/400.css'
import '@fontsource/prompt/500.css'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
