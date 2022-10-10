import Image from 'next/image'
// import { Container, Content } from '../projectsStyle.js'
import Link from 'next/link'

export const WorkContainer = ({src, name, url}) => {

return (
<div>
  <div className='co co-media'>
    <Image className='' src={src} layout='fill' objectFit='contain' alt='logo'/>
  </div>
  <Link href={url}>
  <h2 className='works-url'>{name}</h2>
  </Link>
</div>
  )
}

