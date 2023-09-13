import { Container, Brand, Menu, Search, NewNote, Content} from "./styles"
import {FiPlus} from "react-icons/fi"

import { Input } from "../../components/Input"
import { Note } from "../../components/Note"
import { Header } from "../../components/Header"
import { Section} from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
              <li>  <ButtonText title="Todos" $isActive/></li>
              <li>  <ButtonText title="React"/></li>
              <li>  <ButtonText title="Node"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo"/>
            </Search>
               
            <Content>
                <Section title={"Minhas Notas"}>
                    <Note data={{
                        title: "React", 
                    tags: [
                        {id: "1", name: "react"},
                        {id: "2", name:"Node"}
                        ]
                    }} />

                    <Note data={{
                        title: "React", 
                    tags: [
                        {id: "1", name: "react"},
                        {id: "2", name:"Node"}
                        ]
                    }} />

                    

                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>Criar Nota
            </NewNote>

        </Container>
    )
}