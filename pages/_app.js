import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/bootstrap.min.css';
import '../styles/globals.scss';
import Layout from '../components/layout/Layout';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
