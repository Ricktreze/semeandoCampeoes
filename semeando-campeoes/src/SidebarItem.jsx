import React from 'react'
import { Container } from './styles/SidebarItem.styles'
import './styles/MenuLateral.css'

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem