import Image from 'next/image'
// import { Container, Content } from '../projectsStyle.js'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const WorkContainer = ({src, name, url}) => {

return (
   <motion.div
        initial={{ opacity: 0.2 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
  <div className='co co-media'>
    <Image className='' src={src} layout='fill' objectFit='contain' alt='logo'/>
  </div>
  <Link href={url}>
  <h2 className='works-url'>{name}</h2>
  </Link>
</motion.div>
  )
}

