import Image from 'next/image'
// import { Container, Content } from '../projectsStyle.js'

export const WorkContainer = ({src, name}) => {

return (
<div>
  <div style={{marginTop:'30px', position: 'relative', width: '400px', height: '340px', zIndex: '-1'}}>
    <Image className='' src={src} layout='fill' objectFit='contain' alt='logo'/>
  </div>
  <h2>{name}</h2>
</div>
  )
}

