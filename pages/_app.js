import '../styles/globals.css'

import App from 'next/app'
import withReduxStore from '../utils/withReduxStore'
import {Provider} from 'react-redux'

class MyApp extends App {
  constructor(props){
    super(props)
  }

  componentDidMount = () => {}

  render(){
    const { Component, pageProps, reduxStore} = this.props

    return(
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default withReduxStore(MyApp)
