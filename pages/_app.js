import '../styles/globals.css'
import '../styles/Cascader.css'
import '../styles/Switch.css'
import '../styles/Space.css'
import '../styles/Dropdown.css'
import '../styles/Tag.css'
import Layout from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import store from '../store/store'
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
