import { Container, Content } from '../../../components/projectsStyle.js'
import { WorkContainer } from '../../../components/Works/workContainer.jsx'

const Works = () => {

  return (
    <Container>
      <Content>
<div className='grid-container'>
<WorkContainer src="/images/ogc-hp.png" name="OGC-HP"/>
<WorkContainer src="/images/geek-sns.jpg" name="Geek-SNS"/>
<WorkContainer src="/images/crypto-stand.gif" name="crypto stand"/>
<WorkContainer src="/images/nestjs-test2.png" name="nestjs test"/>
<WorkContainer src="/images/high-speed-holodule.png" name="Highspeed holodule"/>
<WorkContainer src="/images/bubblegum-colorscheme.png" name="bubblegum colorscheme"/>
<WorkContainer src="/images/mysql-s3-uploader.png" name="Mysql S3 Uploader"/>
<WorkContainer src="/images/data-memo.png" name="Data Memo"/>
</div>
      </Content>
    </Container>
  )
}

export default Works 
