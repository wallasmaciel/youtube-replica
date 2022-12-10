import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderNavigationBar } from '../layouts/HeaderNavigationBar'
import { NavSideBar } from '../layouts/NavSideBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col bg-state-900 text-state h-[100vh]">
      <HeaderNavigationBar />

      <section className="flex flex-1">
        <NavSideBar className="flex-1"/>

        <main className="flex-1 bg-state-300">
          <Component {...pageProps} />
        </main>
      </section>
    </div>
  )
}
