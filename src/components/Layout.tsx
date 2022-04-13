import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  pageTitle: string
  children?:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[];
}

const Layout: React.FC<LayoutProps> = ({pageTitle, children}) => {
  return (
    <>
    <Head>
      <title>Next.js | {pageTitle}</title>
    </Head>
    <div>
      <main>
        <Header/>
        {children}
      </main>
      <Footer/>
    </div>
      </>
  )
}

export default Layout