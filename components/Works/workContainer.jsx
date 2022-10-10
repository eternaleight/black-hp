import Image from 'next/image'
// import { Container, Content } from '../projectsStyle.js'

export const WorkContainer = ({src, name}) => {

return (
<div>
  <div className='co co-media'>
    <Image className='' src={src} layout='fill' objectFit='contain' alt='logo'/>
  </div>
  <h2>{name}</h2>
</div>
  )
}

