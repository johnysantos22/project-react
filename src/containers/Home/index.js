import React, { useRef, useState } from "react";

import axios from 'axios';
import Buger2 from '../../assets/burger 2.png';
import Arrow from '../../assets/arrow.svg';

import {
  Container,
  H1,
  ContainerItens,
  Image,
  ImputLabel,
  Imput,
  Button,
} from './style'
  ;


const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("https://primeiro-projeto-node-js-7n95.vercel.app/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });


    setUsers([...users, newUser]);
  };


  return (

    <Container>
      <Image alt="logo-Imagem" src={Buger2} />
      <ContainerItens>

        <H1>Faça seu Pedido</H1>

        <ImputLabel>Pedido</ImputLabel>
        <Imput placeholder="1 Coca-Cola, 1 X Salada" ref={inputName}>
        </Imput>

        <ImputLabel>Nome do Cliente</ImputLabel>
        <Imput placeholder="Steve Jobs" ref={inputAge}>
        </Imput>

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow}
          /></Button>

      </ContainerItens>
    </Container>

  )
}

export default App;
