import React from 'react'

import { Container} from './styles'
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Container>
      <Link to={'/'}>
        <p className='logo'>Aion Group</p>
      </Link>
      <Navbar />

    </Container>
  )
}
