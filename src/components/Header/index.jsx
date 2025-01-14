import React from 'react'
import logo from '../.././assets/gbflogo.png'

import { Container, Register } from './styles'
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Container>
      <Link to={'/'}>
        <img src={logo} alt="Global Force Bank Logo" />
      </Link>
      <Navbar />

    </Container>
  )
}
