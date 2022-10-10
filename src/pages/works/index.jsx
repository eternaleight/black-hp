import { Container, Content } from '../../../components/projectsStyle.js'
import { WorkContainer } from '../../../components/Works/workContainer.jsx'

const Works = () => {

  return (
    <Container>
      <Content>
<div className='grid-container'>
<WorkContainer src="/images/ogc-hp.png" name="OGC-HP" url="https://oomamagolf.com"/>
<WorkContainer src="/images/geek-sns.jpg" name="Geek-SNS" url="https://github.com/eternaleight/geek-sns"/>
<WorkContainer src="/images/crypto-stand.gif" name="crypto stand" url="https://github.com/eternaleight/crypto-stand"/>
<WorkContainer src="/images/nestjs-test2.png" name="nestjs test" url="https://github.com/eternaleight/nestjs-test"/>
<WorkContainer src="/images/high-speed-holodule.png" name="Highspeed holodule" url="https://high-speed-holodule.vercel.app/"/>
<WorkContainer src="/images/bubblegum-colorscheme.png" name="bubblegum colorscheme" url="https://github.com/eternaleight/bubblegum-colorscheme"/>
<WorkContainer src="/images/mysql-s3-uploader.png" name="Mysql S3 Uploader" url="https://github.com/eternaleight/mysql-s3-backend"/>
<WorkContainer src="/images/data-memo.png" name="Data Memo" url="https://github.com/eternaleight/data-memo"/>
</div>
      </Content>
    </Container>
  )
}

export default Works 
