import React, { useEffect, useState } from "react";

import Pedidos from "../../assets/Pedido.png"
import { Container, Image, H1, ContianerItens, Button, Requests, P } from "./styles"
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom";
import Axios from "axios";


function Oders() {

    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    const minhaUrl = "https://primeiro-projeto-node-js.vercel.app"

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await Axios.get(`${minhaUrl}/order`)

            setOrders(newOrders)
        }

        fetchOrders()

    }, [])

    async function deletePedido(orderId) {
        await Axios.delete(`${minhaUrl}/order/${orderId}`)

        const newOrders = orders.filter(order => order.id !== orderId)

        setOrders(newOrders)
    }

    function goBackPage() {
        navigate("/")
    }

    return (
        <Container>
            <ContianerItens>
                <Image alt="foto-pedido" src={Pedidos} />
                <H1>Pedidos</H1>

                <ul>
                    {orders.map(order => (
                        <Requests key={order.id}>
                            <P><p className="pedido">{order.pedido}</p><p className="nome">{order.name}</p></P>
                            <button onClick={() => deletePedido(order.id)}><img src={Trash} alt="lata-de-lixo" /></button>
                        </Requests>
                    ))}
                </ul>

                <Button onClick={goBackPage}>Voltar</Button>
            </ContianerItens>
        </Container>
    )


}


export default Oders