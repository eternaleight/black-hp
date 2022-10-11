import React from 'react'
import { Container, Content } from '../../../components/contactStyle.js'
import { FaEnvelope, FaTwitter, FaYoutube, FaLaptop, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'
import Link from 'next/link'

const Contact = () => {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLaptop} 
          LinkContact="https://zenn.dev/eternaleight" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/eternaleight" 
        />
        <ItemContact 
          IconFa={FaTwitter} 
          LinkContact="https://twitter.com/initialcommit0" 
        />
        <ItemContact 
          IconFa={FaYoutube} 
          LinkContact="https://bit.ly/3VpjFdM" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="eternaleight0@gmail.com"
        />
      </Content>
    </Container>
  )
}

export default Contact 
