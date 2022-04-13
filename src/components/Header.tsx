import React from 'react'
import AppLink from './AppLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <AppLink href="/" label="Next.js"/>
    </header>
  )
}

export default Header