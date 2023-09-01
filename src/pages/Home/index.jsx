import { Container, Brand, Menu, Search, NewNote, Content} from "./styles"
import {FiPlus} from "react-icons/fi"

import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
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

            </Content>

            <NewNote>
                <FiPlus/>Criar Nota
            </NewNote>

        </Container>
    )
}