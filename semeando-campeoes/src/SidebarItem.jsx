import React from 'react'
import { Container } from './styles/SidebarItem.styles'

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem