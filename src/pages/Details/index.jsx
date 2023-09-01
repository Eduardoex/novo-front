import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  
  
    return(
        <Container>
        <Header/>
        <main>
            <Content>

          

            <ButtonText title="Excluir Nota"/>

            <h1>
                Introdução ao React
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ad delectus voluptatem harum laboriosam id error explicabo molestias doloremque aperiam fugit ipsa natus alias corrupti, aspernatur ducimus nobis, ab recusandae?
            </p>


        <Section title="Link úteis">
            <Links>
                <li><a href="#">https://www.rocketseat.com.br/</a></li>
                <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
        </Section>
        <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="express"/>
        </Section>



        <Button title="Voltar"/>


        </Content>
        </main>
        </Container> 
         
    )
  }