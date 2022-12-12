import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderNavigationBar } from '../layouts/HeaderNavigationBar'
import { NavSideBar } from '../layouts/NavSideBar'
import { Provider } from 'react-redux'
import { store } from '../libs/redux/store'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={ store }>
      <div className="flex flex-col bg-state-900 text-state min-h-screen">
        <HeaderNavigationBar />

        <section className="flex flex-1">
          <NavSideBar className="flex-1 fixed"/>  

          <main className="flex-1">
            <Component {...pageProps} />
          </main>
        </section>
      </div>
    </Provider>
  )
}
