import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'
// import Image from 'next/image'
import { motion } from 'framer-motion'

const Home = () => {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Ryoya Itabashi</Name>
        <Function>FullStack Developer</Function>
        <Intro>Neovim,Nodejs,Mysql
        <br/>
        GitHub http://github.com/eternaleight 
        <br/>
        Zenn http://zenn.dev/eternaleight</Intro>
        <Link href="projects">
          <LinkProjects>PROJECTS<FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <img className='radius' src="/images/icon.jpeg"  />
      </Logo>
     </Content>
   </Container>
  )
}

export default Home
