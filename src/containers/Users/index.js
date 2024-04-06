import React, { useEffect, useState } from "react";
import axios from 'axios';

import Buger from '../../assets/burger  1.png';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';


import {
  Container,
  H1,
  ContainerItens,
  Image,
  Button,
  User,
} from './style'
  ;


function Users  ()  {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("https://primeiro-projeto-node-js-7n95.vercel.app/users");

      setUsers(newUsers);
    }
    fetchUsers()
  }, [users]);



  async function deleteUser(userId) {
    await axios.delete(`https://primeiro-projeto-node-js-7n95.vercel.app/users${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (

    <Container>
      <Image alt="logo-Imagem" src={Buger} />
      <ContainerItens>

        <H1>Pedidos</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name}</p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt=" imagem lata de lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
          <img alt="seta" src={Arrow} /> Voltar
        </Button>


      </ContainerItens>
    </Container>

  )
}

export default Users;
