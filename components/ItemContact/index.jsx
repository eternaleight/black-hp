import React from 'react'
import { Item, Icon, Text, UnderWhite } from './style'

function ItemContact({ IconFa, LinkContact }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
      <UnderWhite  href={LinkContact}>{LinkContact}</UnderWhite>
      </Text>
    </Item>
  )
}

export default ItemContact
