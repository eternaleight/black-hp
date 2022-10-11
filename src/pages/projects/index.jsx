import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from '../../../components/projectsStyle.js'
import axios from 'axios'
import { motion } from 'framer-motion'

const Projects = () => {
  const [itemsApi, setItemsApi] = useState([])

useEffect(() => {
axios.get('https://api.github.com/users/eternaleight/repos')
.then((response) => {
setItemsApi(response.data);
})
.catch(err => {
console.log(err)
})
},[])

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <a href={item.html_url}><Url>URL: {item.html_url}</Url></a>
            <Created_at>Created date: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}
export default Projects 
